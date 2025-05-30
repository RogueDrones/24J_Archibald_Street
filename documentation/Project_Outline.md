Interactive Mapbox Drone Imagery Viewer
This solution outlines how to build a Mapbox-based web application to visualize drone imagery over a property. It covers integrating a KML boundary, plotting geotagged images as interactive points, displaying image popups with metadata, enabling full-size image viewing, toggling basemaps, and preparing the project for local development and static hosting.
1. KML Integration (Property Outline)
To display the property outline from a KML file on a Mapbox GL JS map, follow these steps:
Convert KML to GeoJSON: Mapbox GL JS cannot directly read KML, so first convert the .kml file into GeoJSON format. You can use a tool like togeojson or QGIS for this one-time conversion​
DOCS.MAPBOX.COM
. This yields a GeoJSON file (e.g., property_outline.geojson) representing the property’s boundaries.
Add as a Data Source: Include the GeoJSON in your project (e.g., in a data/ folder). In the map initialization script, load this GeoJSON as a source using the Mapbox GL JS API. For example:
js
Copy
Edit
map.on('load', () => {
  map.addSource('propertyOutline', {
    type: 'geojson',
    data: 'data/property_outline.geojson'
  });
  // ... add layer next
});
This uses map.addSource() to make the GeoJSON available on the map​
DOCS.MAPBOX.COM
.
Add a Layer to Draw the Outline: After adding the source, add a layer to visualize it. For a property outline, a line or polygon layer is appropriate. For example, if the GeoJSON contains a polygon of the property, you might add a fill layer with an outline:
js
Copy
Edit
map.addLayer({
  id: 'property-outline',
  type: 'fill',
  source: 'propertyOutline',
  paint: {
    'fill-color': '#888',
    'fill-opacity': 0.1,
    'fill-outline-color': '#000'
  }
});
This will draw the property area with a semi-transparent fill and a solid outline. If the KML was just a boundary line, you could use a line layer instead with a specified line color and width. The key is that the KML data (now GeoJSON) is rendered on the Mapbox map, outlining the property.
2. Image Features as Clickable Points
Next, incorporate the drone images as point features on the map, each at its geotagged coordinates:
Prepare Image Metadata: Create a data structure (for example, a GeoJSON or JSON file) listing each drone image and its metadata. Each entry should include:
Coordinates (latitude and longitude from the image’s geotag).
Image URL or file path (initially pointing to the local image file, e.g., in an images/ folder).
Metadata such as viewing direction, altitude above ground, capture date, etc. (These will be shown in the popup text).
For example, you could create a data/images.geojson file as a GeoJSON FeatureCollection where each feature has a Point geometry and properties for the image and metadata:
json
Copy
Edit
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "image": "images/img001.jpg",
        "direction": "NE",
        "altitude": "120 m"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [170.12345, -45.67890]
      }
    },
    ...
  ]
}
This format makes it easy to add more images later by just appending new features to the JSON.
Load Image Points onto the Map: Similar to the KML, load this GeoJSON as a source and add a layer. For example:
js
Copy
Edit
map.addSource('droneImages', {
  type: 'geojson',
  data: 'data/images.geojson'
});
map.addLayer({
  id: 'drone-image-points',
  type: 'circle',              // using a simple circle to mark the point
  source: 'droneImages',
  paint: {
    'circle-radius': 6,
    'circle-color': '#E54',
    'circle-stroke-width': 2,
    'circle-stroke-color': '#fff'
  }
});
This will draw each image location as a red dot with a white border (you can style as needed). Using a Mapbox GL layer means the points are part of the map and will be clickable via the map’s event system. (Alternatively, you could create individual Marker elements for each image, but the GeoJSON + layer approach scales well for many points and keeps data separate from code.)
3. Popups with Image and Metadata
When a user clicks an image point, a popup should appear showing the photo and relevant metadata. To implement this:
Capture Click Events: Use Mapbox GL JS event handling on the layer of image points. For example:
js
Copy
Edit
map.on('click', 'drone-image-points', (e) => {
  const feature = e.features[0];
  const coords = feature.geometry.coordinates;
  const props = feature.properties;
  // Construct HTML content for the popup
  const popupContent = `
    <div class="popup-image">
      <a href="${props.image}" target="_blank">
        <img src="${props.image}" alt="Drone image" style="max-width:100%;"/>
      </a>
      <div class="metadata">
        Direction: ${props.direction}<br/>
        Altitude: ${props.altitude}
      </div>
    </div>`;
  new mapboxgl.Popup()
    .setLngLat(coords)
    .setHTML(popupContent)
    .addTo(map);
});
Here we build an HTML string that includes the image and metadata. The props.image holds the image URL/path. We wrap the <img> in an anchor (<a>) so that clicking the image will open the file in a new tab (more on this in the next section). The metadata (direction, altitude, etc.) is added as plain text in a <div> below the image. We then create a popup at the feature’s coordinates with setHTML() to fill it with our custom HTML​
DOCS.MAPBOX.COM
​
DOCS.MAPBOX.COM
.
Display the Popup: By calling .addTo(map), the popup will appear when an image point is clicked. The popup will show the drone photo and the text metadata. We used inline CSS (max-width:100%) to ensure the image fits in the popup. You can style the popup further via CSS (e.g., set a max-width or different font for the metadata).
Each point now has an interactive popup. When clicked, the map queries the rendered features at that point and shows the corresponding image and info.
4. Full-Size Image Expansion
For viewing the full-resolution image, the popup’s image can be made clickable:
In the popup content constructed above, we wrapped the <img> tag in an <a> tag with target="_blank". This means if a user clicks the image in the popup, the link opens the image file in a new browser tab. The href of the link is set to the same image URL.
This approach avoids needing additional JavaScript for the image expansion – it leverages a normal hyperlink. Ensure the href points to the full-size image. If you have separate thumbnail and full-size image URLs, use the full-size URL in the href and the thumbnail in the src.
For example, the HTML snippet in the popup might look like:
html
Copy
Edit
<a href="images/img001.jpg" target="_blank">
  <img src="images/img001.jpg" alt="Drone image"/>
</a>
With this in place, a click on the popup image navigates to the actual image file in a new tab, allowing the user to zoom or download it as needed.
This fulfills the requirement that clicking the image again opens it at full size. The user can close that tab to return to the map.
5. Basemap Layer Toggle (Satellite vs. Hybrid)
Implement a toggle control to switch the basemap between Satellite view and Hybrid (satellite imagery with labels/roads):
Use Mapbox Styles: Mapbox provides ready-to-use style URLs for these views. For example:
Satellite: mapbox://styles/mapbox/satellite-v9 (pure imagery)
Hybrid (Satellite Streets): mapbox://styles/mapbox/satellite-streets-v12 (imagery + streets and labels)
Toggle UI: Add a simple UI control in your HTML – this could be two buttons, a checkbox, or radio buttons – that lets the user choose the style. A common approach is radio buttons for each style, or a button that switches the style on each click. For instance:
html
Copy
Edit
<div id="basemapToggle">
  <button id="satView">Satellite</button>
  <button id="hybridView">Hybrid</button>
</div>
(You can style/position this div with CSS so it appears as a toggle on the map.)
Switch Styles on Click: In your script, listen for clicks on these buttons and call map.setStyle(...) to swap the map’s style:
js
Copy
Edit
document.getElementById('satView').onclick = () => {
  map.setStyle('mapbox://styles/mapbox/satellite-v9');
};
document.getElementById('hybridView').onclick = () => {
  map.setStyle('mapbox://styles/mapbox/satellite-streets-v12');
};
This will instruct Mapbox to load the new style. Note: Mapbox GL JS treats style changes as a full map style reload, so any custom layers (like our KML outline and image points) will disappear unless we add them back. A style change resets the map to only the base layers of that style​
DOCS.MAPBOX.COM
.
Persist Custom Data on Style Change: To handle the above issue, re-add the KML outline and image points after each style switch. One way is to listen for the style.load event, which fires after a new style finishes loading, and then re-add our sources/layers:
js
Copy
Edit
map.on('style.load', () => {
  // Re-add property outline layer
  map.addSource(...); map.addLayer(...);
  // Re-add drone images layer and popup handler
  map.addSource(...); map.addLayer(...);
  // (Alternatively, store the GeoJSON data in variables and reuse them here)
});
Another approach is to keep references to the GeoJSON data and call map.addSource/addLayer again inside this event. The Mapbox official example for style switching uses this method to persist data overlays​
DOCS.MAPBOX.COM
. By doing this, the user can toggle between satellite and hybrid basemaps seamlessly, with the property outline and image markers continuing to show on each style.
6. Local Development Setup
During initial development, you can host the images locally and run the app on your computer. Follow these guidelines:
Project Structure: Organize your project files for clarity and scalability. For example:
plaintext
Copy
Edit
project-folder/
├── index.html            # main HTML file containing the map container and script includes
├── css/
│   └── styles.css        # (optional) CSS for custom styling of popups, buttons, etc.
├── js/
│   └── main.js           # your JavaScript code for the Mapbox map initialization
├── data/
│   ├── property_outline.geojson  # converted GeoJSON from the KML
│   └── images.geojson    # GeoJSON with drone image points and metadata
└── images/
    ├── img001.jpg        # sample drone images
    ├── img002.jpg
    └── ... 
This structure keeps data and images separate from code. In index.html, include the Mapbox GL JS library (via a <script> tag to Mapbox GL JS CDN and a link to the Mapbox GL CSS) and your own main.js. Also include a <div id="map"></div> which will host the map.
Mapbox Access Token: Obtain a Mapbox access token (from your Mapbox account) and include it in your code. For example, at the top of main.js add:
js
Copy
Edit
mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN';
This token is required to use Mapbox styles and services.
Local HTTP Server: Run a local server to serve the files. Simply opening index.html in a browser file:// path may not work due to CORS restrictions (for instance, Mapbox GL JS and fetch calls to your GeoJSON might be blocked). An easy way is to use Python’s built-in server or a Node.js static server. For example, in the project directory run:
yaml
Copy
Edit
python3 -m http.server 8000
Then navigate to http://localhost:8000/index.html in your browser. This serves your files properly, allowing the map and data to load.
Testing: Verify that the map loads with the base layer, the property outline appears, and that each drone image is marked. Click on markers to ensure popups show the image and metadata, and that clicking the image opens it in a new tab. Also test the basemap toggle buttons to make sure they switch the view and that your data overlays reappear on each style.
By first developing locally, you can use the local image paths (as we did in the GeoJSON properties) and quickly iterate. All assets are local, so the map should be responsive (internet is only needed for Mapbox tiles).
7. Future Scalability (Adding More Images)
The project is structured to allow adding new drone images without major code changes:
Adding New Images: To include additional images in the future, simply add their details to the images.geojson (or whatever data source you choose). Each new image needs its coordinates and metadata. Because the map loads all features from this GeoJSON, new points will automatically appear on the map next time it’s loaded. No changes to the map code are required other than updating the data file. This design separates content from code, making updates straightforward.
Maintaining Data: If the number of images grows large, you’re still on solid ground – GeoJSON can handle many features, and Mapbox GL JS efficiently renders vector data. Just ensure the data file is updated and deployed. If needed, you could split data into multiple files or use clustering for very large numbers of points, but for moderate amounts this isn’t necessary.
Metadata Extensions: The popup template already displays any metadata provided in the properties. If you want to show more info (e.g., timestamp, camera settings), you can add those to each feature’s properties and update the popup HTML string accordingly. The structure of the code easily allows this.
Overall, the architecture (HTML/JS + static data files) is scalable. You can keep collecting drone imagery and updating the data source, and the map will continue to reflect the new content.
8. Static Hosting and Cloud Migration
Finally, prepare the app for static hosting (e.g., GitHub Pages, Cloudflare Pages) and moving images to Cloudflare for CDN hosting:
Relative Paths for Portability: In the development phase, we used relative paths like "images/img001.jpg" in the data. This is good practice for static hosting because it will load images from the same host. When deploying to GitHub Pages or similar, ensure the folder structure remains (images in an images/ directory, data in data/). The same relative URLs will then work on the live site.
Migrating Images to Cloudflare: If you plan to offload images to Cloudflare (for example, using Cloudflare R2 or another CDN for better bandwidth), you can change the image URLs in the data to absolute URLs on that domain. One convenient approach is to use a base URL variable in your code or data generation. For instance, if on local you use props.image = "images/img001.jpg", you could switch this to https://<YOUR_CDN_DOMAIN>/images/img001.jpg for deployment. In code, this could be managed by a simple find-and-replace or by storing a base URL:
js
Copy
Edit
const IMG_BASE = "https://cdn.yourcloudflare.com/yourproject/";
// ... when building popup or data:
<img src="${IMG_BASE + props.image}" ... >
During development, IMG_BASE could be "" (empty, to use local paths), and for production, set it to the CDN URL. This way, no structural code changes are needed, just a configuration tweak.
Deploy to GitHub Pages or Cloudflare Pages: Since the project is purely static files (HTML, CSS, JS, images, GeoJSON), you can host it on any static site platform. For GitHub Pages, you might put these files in a repository (or the docs/ folder) and enable Pages. For Cloudflare Pages or Netlify, you’d upload the repository and let them build/deploy (no build step is actually required since it’s vanilla JS). The Mapbox GL JS library and map tiles load from Mapbox’s servers, and your data is bundled with the site, so everything should work on a static host with no server code.
Verify on Production: Once hosted, test the live map. Confirm that the property outline loads (the GeoJSON was fetched), markers appear, and images load from the new source (if you moved them to Cloudflare, ensure the URLs are correct and CORS is allowed if on a separate domain). Test the popups and basemap toggle one more time in the production environment.
By following these steps, the application will be compatible with static hosting platforms like GitHub Pages. All data and functionality are handled client-side, which is ideal for static hosting. Mapbox GL JS is designed to work in front-end contexts without requiring a custom backend, as all map interactions (panning, zooming, style changes) and data overlays (our GeoJSON files) are done in the browser. This means we meet the requirement of being deployable on static hosts with ease.
Summary and Next Steps
You now have an interactive Mapbox-based web map that:
Displays a property boundary from a KML (via converted GeoJSON).
Shows drone image locations as clickable points.
Opens popups with an image and descriptive text for each point.
Allows viewing the full photo in a new tab by clicking the popup image.
Can toggle between satellite and hybrid basemaps.
Is built for local development with local assets first, and ready to migrate assets to a CDN.
Can be expanded with new images by updating a data file, without code overhauls.
Is suitable for static hosting (no server-side code needed).
With this structure, maintaining and scaling the application is straightforward. As you collect more drone imagery or if the property boundaries change, you can update the data sources and redeploy the static files. The use of Mapbox GL JS ensures high performance and an interactive experience for end users, all while using static files and client-side logic.
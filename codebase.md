# .bolt\config.json

```json
{
  "template": "bolt-vite-react-ts"
}

```

# .bolt\prompt

```
For all designs I ask you to make, have them be beautiful, not cookie cutter. Make webpages that are fully featured and worthy for production.

By default, this template supports JSX syntax with Tailwind CSS classes, React hooks, and Lucide React for icons. Do not install other packages for UI themes, icons, etc unless absolutely necessary or I request them.

Use icons from lucide-react for logos.

Use stock photos from unsplash where appropriate, only valid URLs you know exist. Do not download the images, only link to them in image tags.


```

# .cspell.json

```json
{
    "version": "0.2",
    "language": "en",
    "words": [
        "archibald",
        "tailwindcss",
        "lucide",
        "vite",
        "roboto",
        "cityville",
        "openstreetmap",
        "mapbox",
        "cloudflare",
        "predeploy",
        "YYYYMMDD",
        "Mapnik",
        "HVAC",
        "yourusername",
        "doesn",
        "hardscaping"
    ],
    "flagWords": [],
    "ignorePaths": [
        "node_modules/**",
        "dist/**",
        ".git/**",
        "public/vite.svg"
    ],
    "ignoreRegExpList": [
        "/'[^']*'/",
        "/\"[^\"]*\"/",
        "/\\(.*\\)/"
    ],
    "dictionaries": [
        "typescript",
        "node",
        "npm",
        "html",
        "css"
    ]
}
```

# .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

# .vscode\settings.json

```json
{
    "css.validate": false,
    "less.validate": false,
    "scss.validate": false,
    "editor.quickSuggestions": {
      "strings": true
    },
    "editor.tabSize": 2,
    "editor.detectIndentation": false,
    "editor.formatOnSave": true,
    "files.associations": {
      "*.css": "css"
    },
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    },
    "cSpell.words": [
      "archibald",
      "tailwindcss",
      "lucide",
      "vite",
      "roboto",
      "cityville",
      "openstreetmap",
      "mapbox",
      "cloudflare"
    ]
}
```

# Arrow_Exports\DJI_0604_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0615_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0616_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0617_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0618_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0619_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0620_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0621_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0622_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0623_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0624_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0626_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0638_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0639_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0640_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0645_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0646_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0647_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0649_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0650_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0651_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0652_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0653_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0654_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0663_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0664_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0668_arrow.png

This is a binary file of the type: Image

# Arrow_Exports\DJI_0670_arrow.png

This is a binary file of the type: Image

# documentation\deployment_guide.md

```md
# Deployment Guide for 24J Archibald Street Construction Tracker

This guide will help you deploy your construction tracking application to GitHub Pages, making it accessible online for all stakeholders.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. Your project code ready for deployment

## Step 1: Update package.json

First, you need to add the homepage field and GitHub Pages deployment scripts to your `package.json` file:

\`\`\`json
{
  "name": "24j-archibald-construction-tracker",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "homepage": "https://yourusername.github.io/24j-archibald-tracker",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  // rest of your package.json remains the same
}
\`\`\`

Replace `yourusername` with your actual GitHub username.

## Step 2: Install the gh-pages package

Run the following command to install the GitHub Pages deployment tool:

\`\`\`bash
npm install --save-dev gh-pages
\`\`\`

## Step 3: Update vite.config.ts

You need to modify your Vite configuration to work with GitHub Pages:

\`\`\`typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/24j-archibald-tracker/', // Add this line - must match your repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
\`\`\`

## Step 4: Set up your GitHub repository

1. Create a new repository on GitHub named `24j-archibald-tracker`
2. Initialize Git in your local project (if not already done):

\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/24j-archibald-tracker.git
git push -u origin main
\`\`\`

## Step 5: Deploy to GitHub Pages

Run the deployment script:

\`\`\`bash
npm run deploy
\`\`\`

This will build your project and publish it to the `gh-pages` branch of your repository.

## Step 6: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. For the "Source", select the `gh-pages` branch
5. Click "Save"

Your site will be published at: `https://yourusername.github.io/24j-archibald-tracker`

## Step 7: Set up Custom Domain (Optional)

If you want to use a custom domain:

1. In the GitHub Pages settings, enter your custom domain
2. Create a CNAME record with your DNS provider pointing to `yourusername.github.io`
3. Add a file named `CNAME` in the `public` folder of your project with your domain name:

\`\`\`
archibald-construction.example.com
\`\`\`

## Updating Your Site

Whenever you need to update your site with new construction phases:

1. Update the `projectData.ts` file with new timeline entries
2. Add new drone images to your Cloudflare account
3. Update image URLs in the `projectData.ts` file
4. Run `npm run deploy` to publish the updates

## Tips for Managing Cloudflare Images

1. **Consistent Naming Convention**: 
   - Use format: `archibald_phase[number]_[view]_[YYYYMMDD].jpg`
   - Example: `archibald_phase3_aerial_20240405.jpg`

2. **Organize in Folders**:
   - Create a folder structure like:
     \`\`\`
     /archibald-project/
       /phase1/
       /phase2/
       /phase3/
       ...
     \`\`\`

3. **Image Optimization**:
   - Keep drone images under 1MB if possible
   - Use JPEG format for photos (best quality/size ratio)
   - Consider creating thumbnails for the timeline view

4. **Access Control**:
   - Set appropriate access controls in Cloudflare
   - Make sure images are publicly accessible for the web app

## Automated GitHub Actions Deployment (Optional)

For automatic deployment on every push, create a file at `.github/workflows/deploy.yml`:

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
          branch: gh-pages
          folder: dist
\`\`\`

This will automatically deploy your site whenever you push changes to the main branch.
```

# documentation\development_plan.md

```md
I'll help you create a plan for building out your construction site visualization web app with Claude. Based on the code you've shared from Bolt.new and your requirements, here's a comprehensive plan to guide you through the development process.

# Development Plan for 24J_Archibald_Street Construction Visualization

## Phase 1: Project Setup and Requirements Refinement

1. **Clarify Core Requirements**
   - Drone image showcase with timeline/progress visualization
   - Map representation of the property
   - Simple navigation between different construction phases
   - Mobile and desktop-friendly interface

2. **Asset Organization**
   - Create a plan for storing drone images on Cloudflare
   - Establish naming conventions for images (e.g., `archibaldsitephase1_frontal_20240229.jpg`)
   - Create folders for different construction phases

3. **Project Data Structure**
   - Define the data model for your timeline entries
   - Decide on map display requirements (coordinates, markers, etc.)
   - Plan for future phases and how to integrate them

## Phase 2: Core Component Development

1. **Update ProjectMap Component**
   - Integrate with free mapping service (like OpenStreetMap)
   - Add property boundaries or markers
   - Display current construction phase

2. **Enhance Timeline Component**
   - Incorporate actual construction dates
   - Add filtering capabilities if needed
   - Improve visual representation of progress

3. **Improve Image Viewer**
   - Optimize for drone imagery display
   - Add comparison features between phases
   - Ensure responsive design works with large images

## Phase 3: Content Integration and Testing

1. **Populate with Real Data**
   - Update projectData.ts with actual project information
   - Import real drone images from Cloudflare
   - Create descriptive text for each phase

2. **Add User Experience Improvements**
   - Implement smoother transitions between timeline points
   - Add loading states for images
   - Improve navigation on mobile devices

3. **Testing and Optimization**
   - Test on various devices and browsers
   - Optimize image loading for performance
   - Fix any responsive design issues

## Phase 4: Deployment

1. **GitHub Pages Setup**
   - Configure repository for GitHub Pages
   - Set up custom domain if needed
   - Ensure all assets are properly referenced

2. **Documentation**
   - Create simple instructions for updating the site with new phases
   - Document the structure for future developers

3. **Handoff**
   - Provide client with access and instructions
   - Plan for future updates as construction progresses

# Specific Claude Prompts to Use

Here are some specific prompts you can use with Claude to help you implement each part of this project:

## For Project Setup

\`\`\`
I need to update the construction visualization web app from Bolt.new. Please help me customize the projectData.ts file to match my specific project at 24J Archibald Street. I need fields for:
- Project name: "24J Archibald Street Development"
- Location information 
- Timeline structure for construction phases
- Placeholder for Cloudflare image URLs

Please provide a complete revised version of projectData.ts that I can directly implement.
\`\`\`

## For Map Integration

\`\`\`
I want to integrate a basic map showing the 24J Archibald Street location in my React app. Can you update the ProjectMap.tsx component to use a free map service like OpenStreetMap or a simple embedded Google Maps view? I have these coordinates for the property: [ADD YOUR COORDINATES]. The map should be simple, just showing the property location with a marker.
\`\`\`

## For Timeline Enhancement

\`\`\`
The current Timeline.tsx component in my construction visualization app works well, but I'd like to enhance it with:
1. Better visual styling for completed vs. upcoming phases
2. A clearer indication of the current phase
3. Possibly adding filtering (optional)

Can you provide an updated Timeline.tsx that incorporates these improvements while maintaining the existing functionality?
\`\`\`

## For Image Viewer Optimization

\`\`\`
I'm using drone images in my construction visualization app and need to optimize the ImageViewer.tsx component for large aerial photos. Can you enhance it with:
1. Better zoom controls suitable for detailed inspection
2. Potentially a side-by-side comparison feature to compare different phases
3. Improved mobile responsiveness for these large images

Please provide an updated version of ImageViewer.tsx with these enhancements.
\`\`\`

## For Deployment Setup

\`\`\`
I'm ready to deploy my React construction visualization app to GitHub Pages. Can you provide me with:
1. The exact commands to build and deploy this app
2. Any configuration changes needed in package.json or elsewhere
3. Instructions for setting up GitHub Actions to automate deployment
4. Tips for ensuring my Cloudflare-hosted images display correctly
\`\`\`

## For Adding New Construction Phases Later

\`\`\`
I'll need to update this app with new construction phases as the project progresses. Can you create a simple guide for:
1. How to add new timeline entries to projectData.ts
2. Best practices for adding new images
3. Any code that needs updating when adding a new phase
4. How to ensure the timeline displays correctly after updates
\`\`\`

# Implementation Strategy

1. Start by updating the `projectData.ts` file with your specific project details
2. Then focus on the map component, since that's a key area you want to improve
3. Enhance the image viewer for drone shots
4. Update the timeline with your actual phases
5. Test thoroughly before deployment
6. Set up GitHub Pages deployment

This approach allows you to build incrementally and test each component as you go, making it easier to identify and fix issues.

Would you like me to help with any specific component implementation first?
```

# documentation\git_commands.md

```md
# 1) Initialize a local Git repository (if not already done)

git init

# 2) Check the current status

git status

# 3) Stage all files

git add .

# 4) Commit the files

git commit -m "Initial commit"

# 5) Switch to 'main' branch (if you're not on it already)

git branch -M main

# 6) Add the remote origin (replace URL with your repo)

git remote add origin https://github.com/RogueDrones/24J_Archibald_Street.git

# 7) Push the local 'main' branch to the 'main' branch on GitHub

git push -u origin main

```

# documentation\phase_updates.md

```md
# Guide for Adding New Construction Phases

This document explains how to add new construction phases to your 24J Archibald Street Construction Progress Tracker as the project advances.

## When to Update

You should update the application with new construction phases:

1. When a significant milestone is reached
2. When new drone imagery becomes available
3. When the current phase is completed
4. On a regular schedule (e.g., monthly updates)

## Step-by-Step Process

### 1. Prepare Your Drone Images

1. **Capture New Drone Images**:
   - Ensure consistent angles/perspectives when possible
   - Capture high-resolution images (at least 2000px wide)
   - Shoot on clear, well-lit days for best results

2. **Process the Images**:
   - Crop and adjust as needed
   - Optimize file size (aim for 500KB-1MB per image)
   - Use consistent naming: `archibald_phase[x]_aerial_[YYYYMMDD].jpg`

3. **Upload to Cloudflare**:
   - Upload to your designated Cloudflare storage
   - Organize in appropriate folders by phase
   - Copy the public URL for each image

### 2. Update the projectData.ts File

Open the `src/data/projectData.ts` file and locate the `timeline` array. Here's how to update it:

#### A. Mark Completed Phases

Find the most recently completed phase and update its `milestoneCompleted` property:

\`\`\`typescript
{
  date: "April 5, 2024",
  title: "Framing",
  description: "Structural framing of the main building. First floor walls erected and roof trusses installed.",
  imageUrl: "https://example.com/cloudflare-image-path/archibald_phase3_aerial_20240405.jpg",
  milestoneCompleted: true  // Change from false to true when completed
},
\`\`\`

#### B. Add a New Phase

To add a new phase, add a new object to the `timeline` array:

\`\`\`typescript
{
  date: "June 12, 2024",  // Use the actual date when the phase started or images were captured
  title: "New Phase Title",  // Concise title of the construction phase
  description: "Detailed description of the work completed in this phase. Be specific about what construction activities are visible in the drone imagery.",
  imageUrl: "https://example.com/cloudflare-image-path/archibald_phase5_aerial_20240612.jpg",  // URL to the new drone image
  milestoneCompleted: false  // Start as false, change to true when completed
},
\`\`\`

Always add new phases in chronological order by date.

#### C. Example: Adding a Mid-Construction Update

Here's an example of adding a new phase between existing phases:

\`\`\`typescript
// Original timeline
timeline: [
  // Previous phases...
  {
    date: "May 20, 2024",
    title: "Exterior Construction",
    description: "Exterior sheathing and roofing. Windows and exterior door installation began.",
    imageUrl: "https://example.com/cloudflare-image-path/archibald_phase4_aerial_20240520.jpg",
    milestoneCompleted: true // Now completed
  },
  {
    date: "July 15, 2024",
    title: "Mechanical Systems",
    description: "Installation of electrical, plumbing, and HVAC systems.",
    imageUrl: "https://example.com/cloudflare-image-path/archibald_phase5_aerial_20240715.jpg",
    milestoneCompleted: false
  },
  // Later phases...
]

// Updated timeline with new phase
timeline: [
  // Previous phases...
  {
    date: "May 20, 2024",
    title: "Exterior Construction",
    description: "Exterior sheathing and roofing. Windows and exterior door installation began.",
    imageUrl: "https://example.com/cloudflare-image-path/archibald_phase4_aerial_20240520.jpg",
    milestoneCompleted: true
  },
  // New phase inserted here
  {
    date: "June 18, 2024",
    title: "Window Installation",
    description: "All exterior windows installed and sealed. Exterior doors hung and weatherproofed.",
    imageUrl: "https://example.com/cloudflare-image-path/archibald_phase4b_aerial_20240618.jpg",
    milestoneCompleted: false
  },
  {
    date: "July 15, 2024",
    title: "Mechanical Systems",
    description: "Installation of electrical, plumbing, and HVAC systems.",
    imageUrl: "https://example.com/cloudflare-image-path/archibald_phase5_aerial_20240715.jpg",
    milestoneCompleted: false
  },
  // Later phases...
]
\`\`\`

### 3. Test Your Changes Locally

Before deploying, test your changes locally:

1. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

2. Check that:
   - The new phase appears in the timeline
   - The images load correctly
   - The current phase indicator is accurate
   - Navigation between phases works properly

### 4. Deploy Your Updates

Once you're satisfied with the changes, deploy them:

\`\`\`bash
npm run deploy
\`\`\`

This will build and publish your updated site to GitHub Pages.

## Important Considerations

### Image Best Practices

- **Consistent Perspective**: Try to capture drone images from the same angle/height each time
- **File Size**: Keep images under 1MB for faster loading
- **Resolution**: Aim for 2000-3000px width for good detail when zooming
- **Backup**: Keep original high-resolution images safely stored

### Timeline Maintenance

- **Accuracy**: Ensure dates are accurate and in chronological order
- **Descriptions**: Be specific and detailed about what work was completed
- **Milestones**: Only mark phases as completed when they are truly finished
- **Future Phases**: You can update descriptions of upcoming phases as plans become more concrete

### When Plans Change

If the construction schedule or plans change significantly:

1. **Update Future Phases**: Modify the titles, descriptions, and dates of upcoming phases
2. **Add Notes**: You can add notes about changes to the description
3. **Consider Adding**: For major changes, consider adding a special entry noting the change

### Regular Maintenance

Set a schedule for regular updates to keep the tracker current:

1. **Monthly Reviews**: Set a reminder to review and update at least monthly
2. **After Major Events**: Update immediately after significant construction milestones
3. **Final Documentation**: Create a complete set of final photos for the last phase

By following these guidelines, you'll keep your Construction Progress Tracker current and valuable for all stakeholders throughout the duration of the project.
```

# documentation\Project_Outline.md

```md
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
```

# documentation\screenshot.md

```md
# Creating a Screenshot for the README

The README references a screenshot image at `public/screenshot.png`. You'll need to create this file to make the README look complete.

## Instructions

1. After you've deployed your application and added actual drone imagery, take a screenshot of the application in action.

2. Create a `public` folder in your project root if it doesn't already exist.

3. Save your screenshot as `screenshot.png` in the `public` folder.

4. The screenshot should ideally show:
   - The main drone image view
   - The timeline component
   - The map view
   - Any interactive elements that showcase the application's capabilities

## Temporary Solution

Until you have actual drone images, you can create a temporary placeholder:

1. Run the application locally with the sample data
2. Take a screenshot of the current state
3. Save it as `screenshot.png` in the `public` folder

This will provide a visual reference in your README while you're setting up the actual project data.

## Screenshot Guidelines

- **Resolution**: Aim for at least 1280x720 pixels
- **Format**: PNG format for better quality
- **Content**: Try to capture the most important features of the application
- **Aspect Ratio**: Landscape orientation works best for the README

Remember to update the screenshot once you have real drone imagery and project data in place.

```

# eslint.config.js

```js
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);

```

# index.html

```html
<!-- index.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="24J Archibald Street Development - Construction Progress Tracker with drone imagery visualization" />
    <title>24J Archibald Street - Construction Progress</title>
    <!-- Add Google Fonts for better typography -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

# package.json

```json
{
  "name": "24j-archibald-construction-tracker",
  "private": true,
  "version": "0.1.0",
  "homepage": "https://RogueDrones.github.io/24J_Archibald_Street",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "@mapbox/togeojson": "^0.16.2",
    "leaflet": "^1.9.4",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-leaflet": "^4.2.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/leaflet": "^1.9.16",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "gh-pages": "^6.3.0",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}

```

# postcss.config.js

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

```

# public\24j_Archibald_Street_Perimeter.kml

```kml
<?xml version="1.0" encoding="utf-8" ?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document id="root_doc">
<Schema name="24jarchibaldstreet_perimeter" id="24jarchibaldstreet_perimeter">
	<SimpleField name="id" type="float"></SimpleField>
</Schema>
<Folder><name>24jarchibaldstreet_perimeter</name>
  <Placemark>
	<Style><LineStyle><color>ff0000ff</color></LineStyle><PolyStyle><fill>0</fill></PolyStyle></Style>
      <MultiGeometry><Polygon><outerBoundaryIs><LinearRing><coordinates>170.532629135589,-45.8881518190569 170.532624760542,-45.8881716156704 170.532455974852,-45.8883155820638 170.532750926928,-45.8884877141061 170.532917721842,-45.8883492005092 170.532917721842,-45.8883492005092 170.533226921871,-45.888531104849 170.533244172735,-45.8885139418589 170.53262857974,-45.8881516761848 170.532629135589,-45.8881518190569</coordinates></LinearRing></outerBoundaryIs></Polygon></MultiGeometry>
  </Placemark>
</Folder>
</Document></kml>

```

# public\images\DJI_0590.JPG

This is a binary file of the type: Image

# public\images\DJI_0592.JPG

This is a binary file of the type: Image

# public\images\DJI_0598.JPG

This is a binary file of the type: Image

# public\images\DJI_0600.JPG

This is a binary file of the type: Image

# public\images\image_fx_ 5.jpg

This is a binary file of the type: Image

# public\images\image_fx_ 6.jpg

This is a binary file of the type: Image

# public\images\image_fx_ 7.jpg

This is a binary file of the type: Image

# public\images\image_fx_ 8.jpg

This is a binary file of the type: Image

# public\images\image_fx_ 9.jpg

This is a binary file of the type: Image

# README.md

```md
# 24J Archibald Street Construction Tracker

A React-based web application for visualizing construction progress at 24J Archibald Street through drone imagery and timeline tracking.

![Project Screenshot](public/screenshot.png)

## Features

- Interactive timeline of construction phases
- High-quality drone imagery visualization with zoom, pan, and rotate capabilities
- OpenStreetMap integration for property location display
- Mobile-responsive design for access on any device
- Progress tracking with completion indicators
- Fullscreen image viewing for detailed inspection

## Technology Stack

- React 18+
- TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Lucide React for icons
- OpenStreetMap for location visualization

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git (for version control)

### Installation

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/yourusername/24j-archibald-tracker.git
   cd 24j-archibald-tracker
   \`\`\`

2. Install dependencies:

   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Start the development server:

   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open your browser and navigate to:
   \`\`\`
   http://localhost:5173
   \`\`\`

## Project Structure

\`\`\`
├── public/              # Static assets
├── src/                 # Source code
│   ├── components/      # React components
│   │   ├── ImageViewer.tsx
│   │   ├── ProjectMap.tsx
│   │   └── Timeline.tsx
│   ├── data/            # Project data
│   │   └── projectData.ts
│   ├── App.tsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.tsx         # Application entry point
├── .cspell.json         # Spell checker configuration
├── .gitignore           # Git ignore file
├── index.html           # HTML entry point
├── package.json         # Package configuration
├── postcss.config.js    # PostCSS configuration
├── README.md            # Project documentation
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
\`\`\`

## Deployment

This project is configured for easy deployment to GitHub Pages. See the [deployment guide](DEPLOYMENT.md) for detailed instructions.

## Adding New Construction Phases

As construction progresses, new phases can be added to the tracker. See the [phase update guide](PHASE_UPDATES.md) for a step-by-step process.

## Customization

### Project Data

To customize the project information, edit the `src/data/projectData.ts` file with your specific details:

\`\`\`typescript
export const projectData = {
  projectName: "Your Project Name",
  description: "Project description...",
  // ... other project details
};
\`\`\`

### Styling

The application uses Tailwind CSS for styling. Customizations can be made in:

- `tailwind.config.js` - For theme customization
- `src/index.css` - For global CSS rules

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Maps powered by [OpenStreetMap](https://www.openstreetmap.org/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

## Contact

For questions or support, please contact the project maintainer at your.email@example.com.

```

# requirements.txt

```txt
# requirements.txt
# Node.js dependencies are managed through package.json
# This file is for any Python dependencies that might be needed for auxiliary scripts

# No Python dependencies required for this project
```

# src\App.tsx

```tsx
// src/App.tsx

import { useState } from 'react';
import { Calendar, Home } from 'lucide-react';
import ProjectMap from './components/ProjectMap';
import Timeline from './components/Timeline';
import ImageViewer from './components/ImageViewer';
import { projectData } from './data/projectData';

function App() {
  const [selectedDate, setSelectedDate] = useState(projectData.timeline[0].date);
  
  const currentTimelineIndex = projectData.timeline.findIndex(
    item => item.date === selectedDate
  );
  
  const currentTimelineItem = projectData.timeline[currentTimelineIndex];
  const completedPhases = projectData.timeline.filter(item => item.milestoneCompleted).length;
  const progressPercentage = Math.round((completedPhases / projectData.timeline.length) * 100);
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-blue-800/90 text-white p-4 shadow-md relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Home className="h-6 w-6" />
            <h1 className="text-xl md:text-2xl font-bold">{projectData.projectName}</h1>
          </div>
        </div>
      </header>

      {/* Hero Section with Map Background */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <ProjectMap coordinates={projectData.coordinates} location={projectData.location} />
        </div>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
          <div className="text-center max-w-4xl mx-auto p-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{projectData.projectName}</h2>
            <p className="text-xl md:text-2xl mb-6">{projectData.description}</p>
            <div className="inline-flex items-center bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold">
              <Calendar className="h-5 w-5 mr-2" />
              <span>Progress: {progressPercentage}% Complete</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4 md:p-6 flex flex-col lg:flex-row gap-6">
        {/* Left Column - Content */}
        <div className="lg:w-2/3 flex flex-col space-y-6">
          {/* Project Info Panel - Now permanently visible */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">About This Project</h2>
            <p className="text-gray-700 mb-3">{projectData.description}</p>
            
            {/* Project Overview Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="font-medium text-gray-900">Location</h3>
                <p className="text-gray-600">{projectData.location}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Project Area</h3>
                <p className="text-gray-600">{projectData.area}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Start Date</h3>
                <p className="text-gray-600">{projectData.startDate}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Estimated Completion</h3>
                <p className="text-gray-600">{projectData.estimatedCompletion}</p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-2">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-medium text-gray-900">Overall Progress</h3>
                <span className="text-sm font-medium text-blue-700">{progressPercentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {completedPhases} of {projectData.timeline.length} phases completed
              </p>
            </div>
          </div>
          
          {/* Current Image View */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{currentTimelineItem.title}</h2>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span className="font-medium">{selectedDate}</span>
              </div>
            </div>
            <div className="relative">
              <ImageViewer 
                images={currentTimelineItem.images}
              />
            </div>
          </div>
        </div>
        
        {/* Right Column - Timeline */}
        <div className="lg:w-1/3">
          <div className="bg-white p-4 rounded-lg shadow-md sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Construction Timeline</h2>
            <Timeline 
              timelineData={projectData.timeline} 
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
            />
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>{projectData.projectName} © {new Date().getFullYear()} - Rogue Drones</p>
      </footer>
    </div>
  );
}

export default App;
```

# src\components\ImageViewer.tsx

```tsx
// src/components/ImageViewer.tsx

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageViewerProps {
  images: string[];
  caption?: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ images, caption }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Reset currentIndex when the images prop changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!showModal) return;
      
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        setShowModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showModal, images.length]);

  const displayImage = images && images.length > 0 ? images[currentIndex] : '';

  return (
    <>
      {/* Main image container */}
      <div className="relative w-full aspect-video">
        {/* Left Arrow */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        {/* Right Arrow */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}

        {/* Main image display */}
        <img
          src={displayImage}
          alt="Construction site aerial view"
          className="object-contain w-full h-full cursor-pointer"
          onClick={() => setShowModal(true)} // Open modal on click
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 300 200'%3E%3Crect fill='%23f0f0f0' width='300' height='200'/%3E%3Ctext fill='%23cccccc' font-family='sans-serif' font-size='24' text-anchor='middle' x='150' y='100'%3ENo image available%3C/text%3E%3C/svg%3E";
          }}
        />

        {/* “Click to Enlarge” indicator */}
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
          Click to enlarge
        </div>

        {/* Caption along the bottom */}
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm">
            {caption}
          </div>
        )}
      </div>

      {/* --- Modal for Full-Size View --- */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          {/* Container for image and navigation controls */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-[90vw] max-h-[90vh]"
          >
            {/* Navigation arrows in modal */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full z-20 transition-colors"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full z-20 transition-colors"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}

            <img
              src={displayImage}
              alt="Full size view"
              className="max-w-full max-h-[90vh] object-contain"
            />

            {/* Close button */}
            <button
              className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors"
              onClick={() => setShowModal(false)}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageViewer;

```

# src\components\ProjectMap.tsx

```tsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, useMap } from 'react-leaflet';
import toGeoJSON from '@mapbox/togeojson';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface ProjectMapProps {
  location: string;
  coordinates: { lat: number; lng: number };
}

// Create a custom marker icon
const customIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Component to handle the zoom animation
function ZoomAnimation({ coordinates }: { coordinates: { lat: number; lng: number } }) {
  const map = useMap();
  
  useEffect(() => {
    // Start with a wider view
    map.setView([coordinates.lat, coordinates.lng], 12, { animate: false });
    
    // After a short delay, zoom in smoothly
    setTimeout(() => {
      map.flyTo([coordinates.lat, coordinates.lng], 17, {
        duration: 2.5, // Animation duration in seconds
        easeLinearity: 0.25
      });
    }, 500);
  }, [map, coordinates]);

  return null;
}

const ProjectMap: React.FC<ProjectMapProps> = ({ coordinates }) => {
  const [geoJson, setGeoJson] = useState<GeoJSON.GeoJsonObject | null>(null);

  useEffect(() => {
    fetch('/24j_Archibald_Street_Perimeter.kml')
      .then((response) => response.text())
      .then((kmlText) => {
        const parser = new DOMParser();
        const kmlDom = parser.parseFromString(kmlText, 'text/xml');
        const converted = toGeoJSON.kml(kmlDom);
        setGeoJson(converted);
      })
      .catch((error) => {
        console.error('Error loading KML:', error);
      });
  }, []);

  return (
    <MapContainer 
      center={[coordinates.lat, coordinates.lng]} 
      zoom={12} // Start with a wider view
      style={{ height: '100%', width: '100%' }}
      zoomControl={false}
      attributionControl={false}
      dragging={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
    >
      <ZoomAnimation coordinates={coordinates} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {geoJson && <GeoJSON data={geoJson} style={() => ({ color: '#FF0000', weight: 3 })} />}
      <Marker 
        position={[coordinates.lat, coordinates.lng]} 
        icon={customIcon}
      />
    </MapContainer>
  );
};

export default ProjectMap;

```

# src\components\Timeline.tsx

```tsx
// src/components/Timeline.tsx

import React, { useRef, useEffect } from 'react';
import { Calendar, CheckCircle, Clock } from 'lucide-react';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  images: string[];
  milestoneCompleted?: boolean;
}

interface TimelineProps {
  timelineData: TimelineItem[];
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

const Timeline: React.FC<TimelineProps> = ({ timelineData, selectedDate, onSelectDate }) => {
  const selectedItemRef = useRef<HTMLDivElement>(null);

  // 1) Identify the "current" item as the first that is NOT completed.
  //    If all items are completed, this will be -1 (no current item).
  const effectiveCurrentPhaseIndex = timelineData.findIndex(
    (item) => !item.milestoneCompleted
  );

  // 2) Count completed, current, and upcoming for the summary at the top.
  const completedCount = timelineData.filter((item) => item.milestoneCompleted).length;
  const currentCount = effectiveCurrentPhaseIndex >= 0 ? 1 : 0;
  const upcomingCount = timelineData.length - completedCount - currentCount;

  // Scroll to the selected item when it changes
  useEffect(() => {
    if (selectedItemRef.current) {
      selectedItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [selectedDate]);

  // A helper function to get the status of each timeline item
  function getItemStatus(item: TimelineItem, index: number) {
    if (item.milestoneCompleted) return 'completed';
    if (index === effectiveCurrentPhaseIndex) return 'current';
    return 'upcoming';
  }

  return (
    <div>
      {/* --- Phase Summary --- */}
      <div className="mb-4 pb-4 border-b border-gray-200">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-gray-600">Project Phases</span>
          <span className="text-sm text-gray-600">{timelineData.length} total</span>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-2">
          {/* Completed */}
          <div className="flex flex-col items-center p-2 bg-green-50 rounded-md">
            <CheckCircle className="h-5 w-5 text-green-500 mb-1" />
            <span className="text-xs font-medium text-green-700">Completed</span>
            <span className="text-lg font-bold text-green-800">
              {completedCount}
            </span>
          </div>
          {/* Current */}
          <div className="flex flex-col items-center p-2 bg-blue-50 rounded-md">
            <Clock className="h-5 w-5 text-blue-500 mb-1" />
            <span className="text-xs font-medium text-blue-700">Current</span>
            <span className="text-lg font-bold text-blue-800">
              {currentCount}
            </span>
          </div>
          {/* Upcoming */}
          <div className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
            <Clock className="h-5 w-5 text-gray-400 mb-1" />
            <span className="text-xs font-medium text-gray-600">Upcoming</span>
            <span className="text-lg font-bold text-gray-700">
              {upcomingCount}
            </span>
          </div>
        </div>
      </div>

      {/* --- Timeline Items --- */}
      <div className="overflow-y-auto max-h-[600px] pr-2 timeline-container">
        <div className="relative">
          {/* Vertical line in the background */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>

          {timelineData.map((item, index) => {
            const isSelected = item.date === selectedDate;
            const status = getItemStatus(item, index);

            // Dot color
            let dotClasses = 'bg-gray-300 border-gray-200';
            if (status === 'completed') {
              dotClasses = 'bg-green-500 border-green-200';
            } else if (status === 'current') {
              dotClasses = 'bg-blue-500 border-blue-200 animate-pulse';
            }

            // Card border
            let cardBorder = 'border-gray-200';
            if (isSelected) {
              cardBorder = 'border-blue-400 shadow-md';
            } else if (status === 'completed') {
              cardBorder = 'border-green-100 shadow-sm';
            } else if (status === 'current') {
              cardBorder = 'border-blue-100 shadow-sm';
            }

            // Status label
            let statusLabel = '○ Upcoming';
            let statusLabelColor = 'text-gray-500';
            if (status === 'completed') {
              statusLabel = '✓ Completed';
              statusLabelColor = 'text-green-600';
            } else if (status === 'current') {
              statusLabel = '● Current';
              statusLabelColor = 'text-blue-600';
            }

            return (
              <div
                key={item.date}
                ref={isSelected ? selectedItemRef : null}
                className={`relative pl-10 pb-6 cursor-pointer transition-all duration-200 ${
                  isSelected ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                }`}
                onClick={() => onSelectDate(item.date)}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-2 top-1.5 w-5 h-5 rounded-full z-10 border-2 ${dotClasses}`}
                />

                {/* Content card */}
                <div
                  className={`bg-white rounded-lg p-3 border ${cardBorder}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3
                      className={`font-medium ${
                        isSelected
                          ? 'text-blue-700'
                          : status === 'completed'
                          ? 'text-green-700'
                          : status === 'current'
                          ? 'text-blue-600'
                          : 'text-gray-600'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Status indicator */}
                  <div className="text-xs font-medium mt-2">
                    <span className={statusLabelColor}>{statusLabel}</span>
                  </div>

                  {/* Preview thumbnail */}
                  <div className="mt-2 h-16 overflow-hidden rounded-md relative">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.style.background = '#f0f0f0';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                      }}
                    />
                    {/* If you still want a “Concept” badge for upcoming phases */}
                    {status === 'upcoming' && (
                      <div className="absolute top-1 right-1 bg-yellow-500 text-white px-1 py-0.5 rounded text-[8px]">
                        Concept
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          <div className="pl-10 pt-2">
            <div className="text-xs text-gray-500 italic">
              Note: This timeline represents the projected construction schedule.
              Future dates and milestones are estimates for demonstration
              purposes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

```

# src\data\projectData.ts

```ts
// src/data/projectData.ts

// Define types for better type safety
export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  images: string[];
  milestoneCompleted: boolean;
}

export interface ProjectDataType {
  projectName: string;
  description: string;
  location: string;
  area: string;
  startDate: string;
  estimatedCompletion: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  timeline: TimelineItem[];
}

export const projectData: ProjectDataType = {
  projectName: "24J Archibald Street",
  description: "24J Archibald Street is a modern residential construction project. This website offers an interactive timeline and drone-captured aerial imagery, allowing stakeholders to follow each phase of the build.",
  location: "24J Archibald Street, Waverley, Dunedin 9013, New Zealand",
  area: "0.0739 ha, 739m²",
  startDate: "February, 2024",
  estimatedCompletion: "December, 2024",
  coordinates: {
    lat: -45.888317, // Coordinates for 24J Archibald Street, Waverley, Dunedin
    lng: 170.532803 // Coordinates for 24J Archibald Street, Waverley, Dunedin
  },
  
  // Timeline of construction progress
  timeline: [
    {
      date: "Feb 27, 2025",
      title: "Site Preparation",
      description: "Initial site clearing and preparation. Removal of vegetation. Site survey and staking completed.",
      images: [
        "images/DJI_0590.JPG",
        "images/DJI_0592.JPG",
        "images/DJI_0598.JPG",
        "images/DJI_0600.JPG"
      ],
      milestoneCompleted: true
    },
    {
      date: "Apr 20, 2025",
      title: "Foundation Work",
      description: "Excavation completed and foundation work began. Footings poured and foundation walls constructed.",
      images: ["images/image_fx_ 5.jpg"],
      milestoneCompleted: false
    },
    {
      date: "May 25, 2025",
      title: "Framing",
      description: "Structural framing of the main building. First floor walls erected and roof trusses installed.",
      images: ["images/image_fx_ 6.jpg"],
      milestoneCompleted: false
    },
    {
      date: "Jun 30, 2025",
      title: "Exterior Construction",
      description: "Exterior sheathing and roofing. Windows and exterior door installation began.",
      images: ["images/image_fx_ 7.jpg"],
      milestoneCompleted: false
    },
    {
      date: "Jul 28, 2025",
      title: "Mechanical Systems",
      description: "Installation of electrical, plumbing, and HVAC systems. Rough-in work completed throughout the structure.",
      images: ["images/image_fx_ 7.jpg"],
      milestoneCompleted: false
    },
    {
      date: "Sep 15, 2025",
      title: "Interior Finishing",
      description: "Drywall installation and interior finishing work. Cabinetry, fixtures, and appliance installation.",
      images: ["images/image_fx_ 7.jpg"],
      milestoneCompleted: false
    },
    {
      date: "Oct 20, 2025",
      title: "Landscaping",
      description: "Exterior grading, landscaping, and hardscaping. Installation of walkways, driveway, and outdoor features.",
      images: ["images/image_fx_ 8.jpg"],
      milestoneCompleted: false
    },
    {
      date: "Dec 10, 2025",
      title: "Final Inspection",
      description: "Final inspections and completion of all remaining work. Property ready for occupancy.",
      images: ["images/image_fx_ 9.jpg"],
      milestoneCompleted: false
    }
  ]
};
```

# src\index.css

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary-color: #1e40af;  /* blue-800 */
  --secondary-color: #3b82f6; /* blue-500 */
  --accent-color: #93c5fd;    /* blue-300 */
  --text-color: #1f2937;      /* gray-800 */
  --background-color: #f9fafb; /* gray-50 */
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: var(--text-color);
  background-color: var(--background-color);
}

/* Custom scrollbar for timeline */
.timeline-container::-webkit-scrollbar {
  width: 6px;
}

.timeline-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.timeline-container::-webkit-scrollbar-thumb {
  background: #c5d5e6;
  border-radius: 10px;
}

.timeline-container::-webkit-scrollbar-thumb:hover {
  background: #a3b8cc;
}

/* Animation for info panel */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}

/* Animation for current phase pulse */
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
  100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
}

.animate-pulse {
  animation: pulse 2s infinite;
}

/* Improved image transitions */
img {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Enhanced buttons */
button:focus {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .container {
    padding-left: 12px;
    padding-right: 12px;
  }
}

/* Print styles for reports */
@media print {
  header, footer, button {
    display: none;
  }
  
  body {
    background-color: white;
  }
  
  main {
    width: 100%;
    display: block;
  }
  
  .bg-white {
    box-shadow: none;
    border: 1px solid #eee;
  }
}
```

# src\main.tsx

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

```

# src\types\togeojson.d.ts

```ts
declare module '@mapbox/togeojson';

```

# src\utils\kmlHandler.ts

```ts
// src/utils/kmlHandler.ts

/**
 * Utility functions for handling KML data for the property boundary
 */

// Define the interface for coordinate points
export interface CoordinatePoint {
  lng: number;
  lat: number;
}

/**
 * Parse KML coordinate string into an array of coordinate points
 * KML format has coordinates as "lng,lat lng,lat" (longitude first, then latitude)
 */
export const parseKMLCoordinates = (coordinateString: string): CoordinatePoint[] => {
  const coordinates: CoordinatePoint[] = [];
  
  // Split the coordinate string by whitespace
  const coordinatePairs = coordinateString.trim().split(/\s+/);
  
  // Process each coordinate pair
  coordinatePairs.forEach(pair => {
    const [lng, lat] = pair.split(',').map(Number);
    
    // Ensure both values are valid numbers
    if (!isNaN(lng) && !isNaN(lat)) {
      coordinates.push({ lng, lat });
    }
  });
  
  return coordinates;
}

/**
 * Extract boundary coordinates from a KML document content
 */
export const extractBoundaryFromKML = (kmlContent: string): CoordinatePoint[] => {
  try {
    // Extract the coordinates section from the KML
    const coordinatesMatch = kmlContent.match(/<coordinates>([^<]+)<\/coordinates>/);
    
    if (coordinatesMatch && coordinatesMatch[1]) {
      return parseKMLCoordinates(coordinatesMatch[1]);
    }
    
    // Return empty array if no coordinates found
    return [];
  } catch (error) {
    console.error('Error parsing KML:', error);
    return [];
  }
}

/**
 * Load and parse a KML file to extract boundary coordinates
 */
export const loadKMLFile = async (filePath: string): Promise<CoordinatePoint[]> => {
  try {
    // Fetch the KML file
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to load KML file: ${response.statusText}`);
    }
    
    const kmlContent = await response.text();
    return extractBoundaryFromKML(kmlContent);
  } catch (error) {
    console.error('Error loading KML file:', error);
    return [];
  }
}

/**
 * Hard-coded boundary coordinates for 24J Archibald Street from the provided KML
 * This can be used as a fallback if loading the KML file fails
 */
export const getHardcodedBoundary = (): CoordinatePoint[] => {
  return [
    { lng: 170.532629135589, lat: -45.8881518190569 },
    { lng: 170.532624760542, lat: -45.8881716156704 },
    { lng: 170.532455974852, lat: -45.8883155820638 },
    { lng: 170.532750926928, lat: -45.8884877141061 },
    { lng: 170.532917721842, lat: -45.8883492005092 },
    { lng: 170.532917721842, lat: -45.8883492005092 },
    { lng: 170.533226921871, lat: -45.888531104849 },
    { lng: 170.533244172735, lat: -45.8885139418589 },
    { lng: 170.53262857974, lat: -45.8881516761848 },
    { lng: 170.532629135589, lat: -45.8881518190569 }
  ];
}
```

# src\vite-env.d.ts

```ts
/// <reference types="vite/client" />

```

# tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

```

# tsconfig.app.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}

```

# tsconfig.json

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

```

# tsconfig.node.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}

```

# vite.config.ts

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/24J_Archibald_Street/', 
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

```


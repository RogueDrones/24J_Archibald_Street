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

```
I need to update the construction visualization web app from Bolt.new. Please help me customize the projectData.ts file to match my specific project at 24J Archibald Street. I need fields for:
- Project name: "24J Archibald Street Development"
- Location information 
- Timeline structure for construction phases
- Placeholder for Cloudflare image URLs

Please provide a complete revised version of projectData.ts that I can directly implement.
```

## For Map Integration

```
I want to integrate a basic map showing the 24J Archibald Street location in my React app. Can you update the ProjectMap.tsx component to use a free map service like OpenStreetMap or a simple embedded Google Maps view? I have these coordinates for the property: [ADD YOUR COORDINATES]. The map should be simple, just showing the property location with a marker.
```

## For Timeline Enhancement

```
The current Timeline.tsx component in my construction visualization app works well, but I'd like to enhance it with:
1. Better visual styling for completed vs. upcoming phases
2. A clearer indication of the current phase
3. Possibly adding filtering (optional)

Can you provide an updated Timeline.tsx that incorporates these improvements while maintaining the existing functionality?
```

## For Image Viewer Optimization

```
I'm using drone images in my construction visualization app and need to optimize the ImageViewer.tsx component for large aerial photos. Can you enhance it with:
1. Better zoom controls suitable for detailed inspection
2. Potentially a side-by-side comparison feature to compare different phases
3. Improved mobile responsiveness for these large images

Please provide an updated version of ImageViewer.tsx with these enhancements.
```

## For Deployment Setup

```
I'm ready to deploy my React construction visualization app to GitHub Pages. Can you provide me with:
1. The exact commands to build and deploy this app
2. Any configuration changes needed in package.json or elsewhere
3. Instructions for setting up GitHub Actions to automate deployment
4. Tips for ensuring my Cloudflare-hosted images display correctly
```

## For Adding New Construction Phases Later

```
I'll need to update this app with new construction phases as the project progresses. Can you create a simple guide for:
1. How to add new timeline entries to projectData.ts
2. Best practices for adding new images
3. Any code that needs updating when adding a new phase
4. How to ensure the timeline displays correctly after updates
```

# Implementation Strategy

1. Start by updating the `projectData.ts` file with your specific project details
2. Then focus on the map component, since that's a key area you want to improve
3. Enhance the image viewer for drone shots
4. Update the timeline with your actual phases
5. Test thoroughly before deployment
6. Set up GitHub Pages deployment

This approach allows you to build incrementally and test each component as you go, making it easier to identify and fix issues.

Would you like me to help with any specific component implementation first?
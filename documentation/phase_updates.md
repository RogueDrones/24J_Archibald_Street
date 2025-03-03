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

```typescript
{
  date: "April 5, 2024",
  title: "Framing",
  description: "Structural framing of the main building. First floor walls erected and roof trusses installed.",
  imageUrl: "https://example.com/cloudflare-image-path/archibald_phase3_aerial_20240405.jpg",
  milestoneCompleted: true  // Change from false to true when completed
},
```

#### B. Add a New Phase

To add a new phase, add a new object to the `timeline` array:

```typescript
{
  date: "June 12, 2024",  // Use the actual date when the phase started or images were captured
  title: "New Phase Title",  // Concise title of the construction phase
  description: "Detailed description of the work completed in this phase. Be specific about what construction activities are visible in the drone imagery.",
  imageUrl: "https://example.com/cloudflare-image-path/archibald_phase5_aerial_20240612.jpg",  // URL to the new drone image
  milestoneCompleted: false  // Start as false, change to true when completed
},
```

Always add new phases in chronological order by date.

#### C. Example: Adding a Mid-Construction Update

Here's an example of adding a new phase between existing phases:

```typescript
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
```

### 3. Test Your Changes Locally

Before deploying, test your changes locally:

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Check that:
   - The new phase appears in the timeline
   - The images load correctly
   - The current phase indicator is accurate
   - Navigation between phases works properly

### 4. Deploy Your Updates

Once you're satisfied with the changes, deploy them:

```bash
npm run deploy
```

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
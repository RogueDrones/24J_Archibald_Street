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

   ```bash
   git clone https://github.com/yourusername/24j-archibald-tracker.git
   cd 24j-archibald-tracker
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Project Structure

```
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
```

## Deployment

This project is configured for easy deployment to GitHub Pages. See the [deployment guide](DEPLOYMENT.md) for detailed instructions.

## Adding New Construction Phases

As construction progresses, new phases can be added to the tracker. See the [phase update guide](PHASE_UPDATES.md) for a step-by-step process.

## Customization

### Project Data

To customize the project information, edit the `src/data/projectData.ts` file with your specific details:

```typescript
export const projectData = {
  projectName: "Your Project Name",
  description: "Project description...",
  // ... other project details
};
```

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

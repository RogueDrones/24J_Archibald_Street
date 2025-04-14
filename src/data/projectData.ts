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
  projectName: "24J Archibald Street Development",
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
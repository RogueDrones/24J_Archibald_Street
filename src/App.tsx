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
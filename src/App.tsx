// src/App.tsx

import { useState } from 'react';
import { Calendar, Info, Home } from 'lucide-react';
import ProjectMap from './components/ProjectMap';
import Timeline from './components/Timeline';
import ImageViewer from './components/ImageViewer';
import { projectData } from './data/projectData';

function App() {
  const [selectedDate, setSelectedDate] = useState(projectData.timeline[0].date);
  const [showInfo, setShowInfo] = useState(false);
  
  // Find the current timeline index
  const currentTimelineIndex = projectData.timeline.findIndex(
    item => item.date === selectedDate
  );
  
  const currentTimelineItem = projectData.timeline[currentTimelineIndex];
  
  // Calculate project progress percentage
  const completedPhases = projectData.timeline.filter(item => item.milestoneCompleted).length;
  const progressPercentage = Math.round((completedPhases / projectData.timeline.length) * 100);
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-blue-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Home className="h-6 w-6" />
            <h1 className="text-xl md:text-2xl font-bold">{projectData.projectName}</h1>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => setShowInfo(!showInfo)}
              className="flex items-center space-x-1 bg-blue-700 hover:bg-blue-900 px-3 py-1 rounded-md transition-colors"
            >
              <Info className="h-4 w-4" />
              <span>Project Info</span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4 md:p-6 flex flex-col lg:flex-row gap-6">
        {/* Left Column - Map and Image */}
        <div className="lg:w-2/3 flex flex-col space-y-6">
          {/* Project Info Panel */}
          {showInfo && (
            <div className="bg-white p-4 rounded-lg shadow-md animate-fadeIn">
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
          )}
          
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
                caption={`${currentTimelineItem.title}: ${currentTimelineItem.description}`} 
              />
            </div>
          </div>
          
          {/* Project Map */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Project Location</h2>
            <ProjectMap coordinates={projectData.coordinates} location={projectData.location} />
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
        <p>© {new Date().getFullYear()} {projectData.projectName} - Drone Imagery Construction Tracker</p>
      </footer>
    </div>
  );
}

export default App;
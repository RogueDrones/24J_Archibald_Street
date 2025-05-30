// src/App.tsx - Clean hero with just title over map

import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import ProjectMap from './components/ProjectMap';
import Timeline from './components/Timeline';
import ImageViewer from './components/ImageViewer';
import { projectData } from './data/projectData';

function App() {
  const [selectedDate, setSelectedDate] = useState(projectData.timeline[0].date);
  
  // Force scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const currentTimelineIndex = projectData.timeline.findIndex(
    item => item.date === selectedDate
  );
  
  const currentTimelineItem = projectData.timeline[currentTimelineIndex];
  const completedPhases = projectData.timeline.filter(item => item.milestoneCompleted).length;
  const progressPercentage = Math.round((completedPhases / projectData.timeline.length) * 100);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Just title over map */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Map */}
        <div className="absolute inset-0 z-10">
          <ProjectMap coordinates={projectData.coordinates} location={projectData.location} />
        </div>
        
        {/* Simple dark overlay for title readability */}
        <div className="absolute inset-0 z-20 bg-black/30"></div>
        
        {/* Title positioned at top - UPDATED for better mobile centering */}
        <div className="absolute top-20 left-0 right-0 z-30 flex items-center justify-center pt-12 px-4">
          <h1 className="hero-title">
            {projectData.projectName}
          </h1>
        </div>
      </section>
      
      {/* Main Content - Overlapping the hero section */}
      <main className="container mx-auto p-6 -mt-8 relative z-40">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Content */}
          <div className="lg:w-2/3 space-y-8">
            {/* Project Info Panel */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">About This Project</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{projectData.description}</p>
              
              {/* Project Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">{projectData.location}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Project Area</h3>
                  <p className="text-gray-600">{projectData.area}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Start Date</h3>
                  <p className="text-gray-600">{projectData.startDate}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Estimated Completion</h3>
                  <p className="text-gray-600">{projectData.estimatedCompletion}</p>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-900">Overall Progress</h3>
                  <span className="text-lg font-bold text-blue-600">{progressPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full transition-all duration-700 ease-out" 
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500">
                  {completedPhases} of {projectData.timeline.length} phases completed
                </p>
              </div>
            </div>
            
            {/* Current Image View */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{currentTimelineItem.title}</h2>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">{selectedDate}</span>
                </div>
              </div>
              <ImageViewer images={currentTimelineItem.images} />
            </div>
          </div>
          
          {/* Right Column - Timeline */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-xl shadow-lg sticky top-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Construction Timeline</h2>
              <Timeline 
                timelineData={projectData.timeline} 
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
              />
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-gray-300">
            {projectData.projectName} © {new Date().getFullYear()} - Rogue Drones
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
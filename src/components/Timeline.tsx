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

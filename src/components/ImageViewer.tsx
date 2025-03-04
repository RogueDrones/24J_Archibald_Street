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
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center"
          onClick={() => setShowModal(false)} // Click away closes the modal
        >
          {/* Stop clicks on the image from propagating to the backdrop */}
          <div onClick={(e) => e.stopPropagation()} className="relative">
            <img
              src={displayImage}
              alt="Full size view"
              className="max-w-full max-h-[90vh]"
            />
            <button
              className="absolute top-2 right-2 bg-black/60 hover:bg-black text-white p-2 rounded-full"
              onClick={() => setShowModal(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageViewer;

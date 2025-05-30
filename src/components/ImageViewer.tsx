// src/components/ImageViewer.tsx - Optimized Version

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Loader2 } from 'lucide-react';

interface ImageViewerProps {
  images: string[];
  caption?: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ images, caption }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [loadingStates, setLoadingStates] = useState<boolean[]>([]);
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());

  // Reset when images change
  useEffect(() => {
    setCurrentIndex(0);
    setLoadingStates(new Array(images.length).fill(true));
    setPreloadedImages(new Set());
  }, [images]);

  // Preload adjacent images for faster navigation
  const preloadImage = useCallback((src: string) => {
    if (!preloadedImages.has(src)) {
      const img = new Image();
      img.onload = () => {
        setPreloadedImages(prev => new Set([...prev, src]));
      };
      img.src = src;
    }
  }, [preloadedImages]);

  // Preload current, next, and previous images
  useEffect(() => {
    if (images.length > 0) {
      // Current image
      preloadImage(images[currentIndex]);
      
      // Next image
      const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      preloadImage(images[nextIndex]);
      
      // Previous image
      const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      preloadImage(images[prevIndex]);
    }
  }, [currentIndex, images, preloadImage]);

  const handleImageLoad = (index: number) => {
    setLoadingStates(prev => {
      const newStates = [...prev];
      newStates[index] = false;
      return newStates;
    });
  };

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

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
  }, [showModal, handleNext, handlePrev]);

  const displayImage = images && images.length > 0 ? images[currentIndex] : '';
  const isLoading = loadingStates[currentIndex];

  return (
    <>
      {/* Main image container */}
      <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
        {/* Loading spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
            <span className="ml-2 text-gray-500">Loading image...</span>
          </div>
        )}

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Main image display with optimizations */}
        <img
          src={displayImage}
          alt={`Construction site aerial view ${currentIndex + 1}`}
          className={`object-contain w-full h-full cursor-pointer transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy" // Native lazy loading
          decoding="async" // Async image decoding
          onClick={() => setShowModal(true)}
          onLoad={() => handleImageLoad(currentIndex)}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 300 200'%3E%3Crect fill='%23f0f0f0' width='300' height='200'/%3E%3Ctext fill='%23cccccc' font-family='sans-serif' font-size='18' text-anchor='middle' x='150' y='100'%3EImage unavailable%3C/text%3E%3C/svg%3E";
            handleImageLoad(currentIndex);
          }}
        />

        {/* Click to enlarge indicator */}
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
          Click to enlarge
        </div>

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
            {currentIndex + 1} / {images.length}
          </div>
        )}

        {/* Caption */}
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm">
            {caption}
          </div>
        )}
      </div>

      {/* Modal for Full-Size View */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-[95vw] max-h-[95vh]"
          >
            {/* Modal navigation arrows */}
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

            {/* Modal loading state */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="h-12 w-12 animate-spin text-white" />
              </div>
            )}

            <img
              src={displayImage}
              alt="Full size view"
              className={`max-w-full max-h-[95vh] object-contain transition-opacity duration-300 ${
                isLoading ? 'opacity-50' : 'opacity-100'
              }`}
              loading="eager" // Load immediately in modal
            />

            {/* Close button */}
            <button
              className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors"
              onClick={() => setShowModal(false)}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal image counter */}
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
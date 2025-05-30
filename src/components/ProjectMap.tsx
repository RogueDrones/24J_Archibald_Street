// src/components/ProjectMap.tsx - KML fades in after zoom completes

import React, { useEffect, useState, useCallback } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, useMap } from 'react-leaflet';
import toGeoJSON from '@mapbox/togeojson';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface ProjectMapProps {
  location: string;
  coordinates: { lat: number; lng: number };
}

// Create a custom marker icon
const customIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Component to handle smooth zoom animation and KML fade-in timing
function SmoothZoomAnimation({ 
  coordinates, 
  onZoomComplete 
}: { 
  coordinates: { lat: number; lng: number };
  onZoomComplete: () => void;
}) {
  const map = useMap();
  const [hasZoomed, setHasZoomed] = useState(false);
  
  useEffect(() => {
    // Prevent multiple zoom animations
    if (hasZoomed) return;
    
    // Start with a moderate wide view
    map.setView([coordinates.lat, coordinates.lng], 14, { animate: false });
    
    // Smooth zoom in
    const timeoutId = setTimeout(() => {
      map.flyTo([coordinates.lat, coordinates.lng], 17, {
        duration: 4.0,
        easeLinearity: 0.04,
        noMoveStart: false
      });
      
      setHasZoomed(true); // Mark as zoomed
      
      // Call onZoomComplete after zoom animation finishes + small delay
      setTimeout(() => {
        onZoomComplete();
      }, 3500 + 500); // 3.5s zoom + 0.5s delay
      
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [map, coordinates, onZoomComplete, hasZoomed]);

  return null;
}

const ProjectMap: React.FC<ProjectMapProps> = ({ coordinates }) => {
  const [geoJson, setGeoJson] = useState<GeoJSON.GeoJsonObject | null>(null);
  const [showKML, setShowKML] = useState(false);
  const [kmlOpacity, setKmlOpacity] = useState(0);

  // Load KML data immediately but don't show it yet
  useEffect(() => {
    fetch('./24j_Archibald_Street_Perimeter.kml')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`KML fetch failed: ${response.status} ${response.statusText}`);
        }
        return response.text();
      })
      .then((kmlText) => {
        const parser = new DOMParser();
        const kmlDom = parser.parseFromString(kmlText, 'text/xml');
        const converted = toGeoJSON.kml(kmlDom);
        setGeoJson(converted);
      })
      .catch((error) => {
        console.error('Error loading KML:', error);
      });
  }, []);

  // Handle zoom completion - trigger KML fade-in (memoized to prevent loops)
  const handleZoomComplete = useCallback(() => {
    // Only proceed if not already showing KML
    if (showKML) return;
    
    setShowKML(true);
    
    // Smooth fade-in animation
    let opacity = 0;
    const fadeInterval = setInterval(() => {
      opacity += 0.02; // Increase opacity gradually
      setKmlOpacity(opacity);
      
      if (opacity >= 1) {
        clearInterval(fadeInterval);
        setKmlOpacity(1);
      }
    }, 30); // Update every 30ms for smooth animation
  }, [showKML]);

  // KML styling - clean and visible
  const geoJsonStyle = {
    color: '#FF4444',
    weight: 2,
    opacity: kmlOpacity, // Animated opacity
    fillColor: '#FF4444',
    fillOpacity: kmlOpacity * 0.15, // Fade fill opacity too
  };

  return (
    <MapContainer 
      center={[coordinates.lat, coordinates.lng]} 
      zoom={14}
      style={{ height: '100%', width: '100%' }}
      zoomControl={false}
      attributionControl={false}
      dragging={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      fadeAnimation={true}
      zoomAnimation={true}
      markerZoomAnimation={true}
    >
      <SmoothZoomAnimation 
        coordinates={coordinates} 
        onZoomComplete={handleZoomComplete}
      />
      
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
        keepBuffer={2}
      />
      
      {/* KML boundary - only shows after zoom complete, with fade-in */}
      {showKML && geoJson && (
        <GeoJSON 
          data={geoJson} 
          style={() => geoJsonStyle}
        />
      )}
      
      {/* Marker - shows immediately */}
      <Marker 
        position={[coordinates.lat, coordinates.lng]} 
        icon={customIcon}
      />
    </MapContainer>
  );
};

export default ProjectMap;
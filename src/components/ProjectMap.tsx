import React, { useEffect, useState } from 'react';
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

// Component to handle the zoom animation
function ZoomAnimation({ coordinates }: { coordinates: { lat: number; lng: number } }) {
  const map = useMap();
  
  useEffect(() => {
    // Start with a wider view
    map.setView([coordinates.lat, coordinates.lng], 12, { animate: false });
    
    // After a short delay, zoom in smoothly
    setTimeout(() => {
      map.flyTo([coordinates.lat, coordinates.lng], 17, {
        duration: 2.5, // Animation duration in seconds
        easeLinearity: 0.25
      });
    }, 500);
  }, [map, coordinates]);

  return null;
}

const ProjectMap: React.FC<ProjectMapProps> = ({ coordinates }) => {
  const [geoJson, setGeoJson] = useState<GeoJSON.GeoJsonObject | null>(null);

  useEffect(() => {
    fetch('/24j_Archibald_Street_Perimeter.kml')
      .then((response) => response.text())
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

  return (
    <MapContainer 
      center={[coordinates.lat, coordinates.lng]} 
      zoom={12} // Start with a wider view
      style={{ height: '100%', width: '100%' }}
      zoomControl={false}
      attributionControl={false}
      dragging={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
    >
      <ZoomAnimation coordinates={coordinates} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {geoJson && <GeoJSON data={geoJson} style={() => ({ color: '#FF0000', weight: 3 })} />}
      <Marker 
        position={[coordinates.lat, coordinates.lng]} 
        icon={customIcon}
      />
    </MapContainer>
  );
};

export default ProjectMap;

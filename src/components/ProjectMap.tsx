import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import toGeoJSON from '@mapbox/togeojson';
import 'leaflet/dist/leaflet.css';

interface ProjectMapProps {
  location: string;
  coordinates: { lat: number; lng: number };
  zoom?: number;
}

const ProjectMap: React.FC<ProjectMapProps> = ({ coordinates, zoom = 16 }) => {
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
      zoom={zoom} 
      style={{ height: '100%', width: '100%' }}
      zoomControl={false}
      attributionControl={false}
      dragging={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {geoJson && <GeoJSON data={geoJson} style={() => ({ color: '#FF0000', weight: 3 })} />}
    </MapContainer>
  );
};

export default ProjectMap;

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import toGeoJSON from '@mapbox/togeojson';
import 'leaflet/dist/leaflet.css';
import { MapPin, ExternalLink } from 'lucide-react';

interface ProjectMapProps {
  location: string;
  coordinates: { lat: number; lng: number };
  zoom?: number;
}

const ProjectMap: React.FC<ProjectMapProps> = ({ location, coordinates, zoom = 16 }) => {
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

  const fullMapUrl = `https://www.openstreetmap.org/?mlat=${coordinates.lat}&mlon=${coordinates.lng}#map=16/${coordinates.lat}/${coordinates.lng}`;

  return (
    <>
      <MapContainer center={[coordinates.lat, coordinates.lng]} zoom={zoom} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {geoJson && <GeoJSON data={geoJson} style={() => ({ color: '#FF0000', weight: 3 })} />}
      </MapContainer>
      <div className="bg-blue-50 border border-blue-200 rounded-md p-3 text-sm text-blue-800 mt-4">
        <div className="flex justify-between items-start">
          <p className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>
              <strong>24J Archibald Street Development</strong>
              <br />
              Location: {location}
              <br />
              Coordinates: {coordinates.lat.toFixed(6)}, {coordinates.lng.toFixed(6)}
            </span>
          </p>
          <a
            href={fullMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors ml-2 text-xs"
          >
            <span className="mr-1">View Larger Map</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectMap;

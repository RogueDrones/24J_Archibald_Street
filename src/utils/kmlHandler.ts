// src/utils/kmlHandler.ts

/**
 * Utility functions for handling KML data for the property boundary
 */

// Define the interface for coordinate points
export interface CoordinatePoint {
  lng: number;
  lat: number;
}

/**
 * Parse KML coordinate string into an array of coordinate points
 * KML format has coordinates as "lng,lat lng,lat" (longitude first, then latitude)
 */
export const parseKMLCoordinates = (coordinateString: string): CoordinatePoint[] => {
  const coordinates: CoordinatePoint[] = [];
  
  // Split the coordinate string by whitespace
  const coordinatePairs = coordinateString.trim().split(/\s+/);
  
  // Process each coordinate pair
  coordinatePairs.forEach(pair => {
    const [lng, lat] = pair.split(',').map(Number);
    
    // Ensure both values are valid numbers
    if (!isNaN(lng) && !isNaN(lat)) {
      coordinates.push({ lng, lat });
    }
  });
  
  return coordinates;
}

/**
 * Extract boundary coordinates from a KML document content
 */
export const extractBoundaryFromKML = (kmlContent: string): CoordinatePoint[] => {
  try {
    // Extract the coordinates section from the KML
    const coordinatesMatch = kmlContent.match(/<coordinates>([^<]+)<\/coordinates>/);
    
    if (coordinatesMatch && coordinatesMatch[1]) {
      return parseKMLCoordinates(coordinatesMatch[1]);
    }
    
    // Return empty array if no coordinates found
    return [];
  } catch (error) {
    console.error('Error parsing KML:', error);
    return [];
  }
}

/**
 * Load and parse a KML file to extract boundary coordinates
 */
export const loadKMLFile = async (filePath: string): Promise<CoordinatePoint[]> => {
  try {
    // Fetch the KML file
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to load KML file: ${response.statusText}`);
    }
    
    const kmlContent = await response.text();
    return extractBoundaryFromKML(kmlContent);
  } catch (error) {
    console.error('Error loading KML file:', error);
    return [];
  }
}

/**
 * Hard-coded boundary coordinates for 24J Archibald Street from the provided KML
 * This can be used as a fallback if loading the KML file fails
 */
export const getHardcodedBoundary = (): CoordinatePoint[] => {
  return [
    { lng: 170.532629135589, lat: -45.8881518190569 },
    { lng: 170.532624760542, lat: -45.8881716156704 },
    { lng: 170.532455974852, lat: -45.8883155820638 },
    { lng: 170.532750926928, lat: -45.8884877141061 },
    { lng: 170.532917721842, lat: -45.8883492005092 },
    { lng: 170.532917721842, lat: -45.8883492005092 },
    { lng: 170.533226921871, lat: -45.888531104849 },
    { lng: 170.533244172735, lat: -45.8885139418589 },
    { lng: 170.53262857974, lat: -45.8881516761848 },
    { lng: 170.532629135589, lat: -45.8881518190569 }
  ];
}
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from './imgs/kinlablogo.jpg';

const Map = ({ latitude, longitude }) => {

    const customMarkerIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [41, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      });

  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize map
    mapRef.current = L.map('map', {
      center: [latitude, longitude],
      zoom: 19,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data © OpenStreetMap contributors',
        }),
      ],
    });

    const marker = L.marker([latitude, longitude], { icon: customMarkerIcon }).addTo(mapRef.current);

    // Add popup to the marker
    marker.bindPopup('KINLAB Bihac').openPopup();

    return () => {
      // Clean up map when component unmounts
      mapRef.current.remove();
    };
  }, [latitude, longitude]);

  return <div id="map" style={{ height: '400px' }} />;
};

export default Map;

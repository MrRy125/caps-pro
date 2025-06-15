// src/components/PolygonMap.jsx
'use client';

import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

export default function PolygonMap() {
  const [geoData, setGeoData] = useState(null);

  // fetch GeoJSON once the component mounts
  useEffect(() => {
    fetch('/geo/Untitled project (2).geojson')       // ⬅️ place file in public/geo/
      .then((res) => res.json())
      .then(setGeoData)
      .catch(console.error);
  }, []);

  return (
    <MapContainer
      center={[8.641915, 124.749784]}    // -- adjust to your area
      zoom={15}
      style={{ height: '1000px', width: '100%' }}
      scrollWheelZoom={true}
      dragging={true} // ✅ This ensures the map is draggable
      doubleClickZoom={true} // optional: zoom with double click
      zoomControl={true} // optional: show zoom buttons
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* draw polygons once loaded */}
      {geoData && (
        <GeoJSON
          data={geoData}
          style={() => ({
            color: '#38bdf8',
            weight: 2,
            fillColor: '#22d3ee',
            fillOpacity: 0.4,
          })}
          onEachFeature={(feat, layer) => {
            const n = feat.properties?.name || 'Unnamed';
            layer.bindPopup(`<strong>${n}</strong>`);
          }}
        />
      )}
    </MapContainer>
  );
}

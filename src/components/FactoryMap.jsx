import React from "react";
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";

export default function FactoryMap({ factories }) {
  // Center the map roughly in the US (adjust as needed)
  const center = [39.5, -98.35];

  // Function to choose color based on factory health
  const getColor = (f) => {
    if (f.uptime < 95 || f.defects > 4) return "red";
    if (f.energy > 200) return "orange";
    return "green";
  };

  return (
    <div className="h-96 w-full rounded-md shadow-md mb-6">
      <MapContainer center={center} zoom={4} scrollWheelZoom={true} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {factories.map(f => (
          <CircleMarker
            key={f.id}
            center={[f.lat, f.lng]}
            radius={12}
            color={getColor(f)}
            fillOpacity={0.6}
          >
            <Popup>
              <strong>{f.name}</strong><br />
              Uptime: {f.uptime.toFixed(1)}%<br />
              Defects: {f.defects}<br />
              Energy: {f.energy} kWh
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}

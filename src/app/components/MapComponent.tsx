import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LatLngTuple } from "leaflet"; // Import tipe LatLngTuple

// Kustomisasi ikon marker
const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Definisikan lokasi dengan tipe eksplisit
const locations: { name: string; position: LatLngTuple }[] = [
  { name: "Lampung", position: [-5.45, 105.26] },
  { name: "Banten", position: [-6.11, 106.15] },
  { name: "Kalimantan Timur", position: [0.5, 117.15] },
  { name: "Sulawesi Selatan", position: [-5.14, 119.26] },
  { name: "Ciamis", position: [-7.33, 108.35] },
  { name: "Karawang", position: [-6.32, 107.18] },
  { name: "Purwakarta", position: [-6.55, 107.26] },
  { name: "Bogor", position: [-6.59, 106.65] },
  { name: "Cirebon", position: [-6.71, 108.55] },
];

const MapComponent = () => {
  return (
    <div className="relative w-full">
      <div className="aspect-[16/9] md:aspect-[21/9]">
        <MapContainer center={[-2.5489, 118.0149]} zoom={5} className="w-full h-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((location, index) => (
            <Marker key={index} position={location.position} icon={customIcon}>
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;

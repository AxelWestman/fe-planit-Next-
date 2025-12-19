"use client";

import dynamic from "next/dynamic";
import { useAuthStore } from "@/app/Stores/auth.store";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

import type { MapContainerProps, TileLayerProps } from "react-leaflet";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
) as React.FC<MapContainerProps>;

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
) as React.FC<TileLayerProps>;

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
) as any;

const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
) as any;

export default function TravelMap() {
  const { itinerary } = useAuthStore();
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (!itinerary?.destination) return;

    const fetchCoordinates = async () => {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          itinerary.destination!
        )}`
      );
      const data = await res.json();

      if (data?.length) {
        setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
      }
    };

    fetchCoordinates();
  }, [itinerary?.destination]);

  if (!itinerary?.destination)
    return (
      <div className="bg-white rounded-2xl shadow-sm p-6 text-center text-gray-500">
        No hay destino para mostrar
      </div>
    );

  if (!position)
    return (
      <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
        Cargando mapa…
      </div>
    );

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden h-[420px]">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>{itinerary.destination}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}


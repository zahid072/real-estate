import React from "react";
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { BiArea } from "react-icons/bi";

const DirectionMap = ({ property }) => {
  console.log(property);
  if (!property.id) {
    return;
  }
  const { image, segment_name, area, latitude, longitude } = property;
  return (
    <div className="h-[600px]">
      <MapContainer
        className="h-[600px] rounded"
        center={[latitude, longitude]}
        zoom={11}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            <img src={image} className="rounded-full size-14 mx-auto" alt="" />
            <h1 className="mt-2 text-center text-xl font-semibold ">
              {segment_name}
            </h1>
            <div className="flex items-center gap-2 ">
              <BiArea className="text-emerald-400 text-2xl" /> {area}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default DirectionMap;

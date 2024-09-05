"use client";
import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Embed the SVG content directly
const getIconSVG = () => {
  return `
    <span className="shadow-lg">
      <svg fill="#0B0924" width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path></svg>
    </span>
  `;
};

// Configure Leaflet to use divIcon for custom icons
const createCustomIcon = () => {
  return L.divIcon({
    className: "custom-icon",
    html: getIconSVG(),
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });
};

const MapComponent = () => {
  useEffect(() => {
    // Initialize the map with attribution control disabled
    const map = L.map("map", {
      center: [51.505, -0.09],
      zoom: 13,
      zoomControl: false, // Disable zoom control
      attributionControl: false, // Disable the attribution control
    });

    // Add Tile Layer without attribution
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "", // Empty string to remove attribution
    }).addTo(map);

    // Add Marker with custom icon
    const marker = L.marker([51.505, -0.09], {
      icon: createCustomIcon(),
    }).addTo(map);
    marker.bindPopup("Custom pin marker.<br>With React Icon!");

    // Clean up on unmount
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className="h-full w-full z-[5]"></div>;
};

export default MapComponent;

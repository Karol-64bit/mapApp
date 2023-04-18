import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import poland from './poland-provinces.json'

const geoUrl = poland;


const markers = [
  {
    markerOffset: 15,
    name: "Dupa 1",
    coordinates: [21.598425098159748, 50.28595149151749],
  },
  {
    markerOffset: 15,
    name: "Dupa 2",
    coordinates: [20.598425098159748, 52.28595149151749],
  },
  {
    markerOffset: 15,
    name: "Dupa 3",
    coordinates: [18.598425098159748, 51.28595149151749],
  },
];


console.log(poland)
const Map = () => {
  return (
    <ComposableMap
      width={400}
      height={220}
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-15.0, -52.2, 0],
        scale: 2000,
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#9998A3"
              stroke="#EAEAEC"
            />
          ))
        }
      </Geographies>
      
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fontSize: 8, fill: "black" }}
          >
            {name}
          </text>
        </Marker>
      ))}

    </ComposableMap>
  );
};

export default Map;

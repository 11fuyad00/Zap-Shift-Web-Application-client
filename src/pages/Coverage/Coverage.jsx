import React, { useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenter = useLoaderData();
  const mapref = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  // console.log(serviceCenter);

  const handleSearch = e => {
    const location = e.target.value.toLowerCase();
    setSearchTerm(location);

    if (location.length > 0) {
      const exactMatch = serviceCenter.find(
        c => c.district?.toLowerCase() === location
      );

      const match =
        exactMatch ||
        serviceCenter.find(c => c.district?.toLowerCase().includes(location));

      if (match) {
        const coord = [match.latitude, match.longitude];
        console.log('Found:', match.district, coord);

        mapref.current.flyTo(coord, 14);
      }
    }
  };

  return (
    <div className="w-7xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center my-10">
        We are available in 64 districts
      </h2>

      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search district..."
          className="w-full md:w-1/3 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="border w-full h-[800px] rounded-md overflow-hidden shadow-md">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[800px]"
          ref={mapref}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenter.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br />
                Service Area: {center.covered_area?.join(', ')}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;

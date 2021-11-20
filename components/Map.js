import { useState } from "react";
import Image from "next/image";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import { LocationMarkerIcon } from "@heroicons/react/solid";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  /**
   *  Tarnsform the search results object into the progress bar
   * {latitude:52.516272, longitude: 13.377722}
   * object
   */

  //   why we can not use forEach, istead of this using map, Because forEach can not return a value while map return a value.

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  console.log(coordinates);

  // const center = getCenter(coordinates);
  const { latitude, longitude } = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude,
    longitude,
    zoom: 11,
  });

  console.log(selectedLocation);
  console.log(searchResults);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/codefighter/ckse65y701nyn17mzzr5ywchr"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map(({ lat, long, title, img, price, star, location }) => (
        <div key={long}>
          <Marker
            longitude={long}
            latitude={lat}
            // pin dops perfectly by using offset

            offsetLeft={-20}
            offsetTop={-10}
          >
            {/* <p
              role="img"
              onClick={() => setSelectedLocation({ lat, long })}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
             
            </p> */}
            <LocationMarkerIcon
              onClick={() => setSelectedLocation({ lat, long })}
              aria-label="push-pin"
              className="h-6 text-[#CF2828]  animate-bounce cursor-pointer point "
            />
          </Marker>

          {/* This popup that should show if we click on a Marker */}

          {selectedLocation.long === long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={lat}
              longitude={long}
              className="w-[150px] h-[150px] z-50  rounded-xl "
            >
              <Image src={img} height="170px" width="150px" objectFit="cover" />
              <br />
              {title}
              <br />
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;

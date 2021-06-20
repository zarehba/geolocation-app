import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const USER_LOCATION_ENDPOINT = `http://api.ipstack.com/check?access_key=${process.env.REACT_APP_GEOLOCATION_API_KEY}`;
// this endpoint works too slowly for getting user's IP at start but allows looking up URLs
const GET_LOCATION_ENDPOINT = `http://ip-api.com/json/`;
// cleanse URL for the endpoint above cause it does not accept "//""
const cleanseUrlForEndpoint = (urlStr) =>
  urlStr.indexOf('//') > 0 ? urlStr.substr(urlStr.indexOf('//') + 2) : urlStr;

export default function useLocation(ipOrUrl) {
  const [locations, setLocations] = useState([]);
  const lastQuery = useRef(null);

  // initially get user's IP and location
  useEffect(() => {
    if (ipOrUrl !== "User's location" || ipOrUrl === locations[0]?.search)
      return;

    lastQuery.current = ipOrUrl; // to limit requests to endpoint for the same query

    axios
      .get(USER_LOCATION_ENDPOINT)
      .then(function (response) {
        const resLocation = {
          query: response.data.ip,
          country: response.data.country_name,
          regionName: response.data.region_name,
          city: response.data.city,
          lat: parseFloat(response.data.latitude.toFixed(7)),
          lon: parseFloat(response.data.longitude.toFixed(7)),
        };
        setLocations((locations) => [resLocation, ...locations]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [setLocations]);

  // on searching IP/URL provided, get this IP/URL's location
  useEffect(() => {
    if (
      !ipOrUrl ||
      ipOrUrl === "User's location" ||
      ipOrUrl === lastQuery.current ||
      ipOrUrl === locations[0].search
    )
      return;

    axios
      .get(GET_LOCATION_ENDPOINT + cleanseUrlForEndpoint(ipOrUrl))
      .then(function (response) {
        setLocations((locations) => [
          { search: ipOrUrl, ...response.data },
          ...locations,
        ]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [ipOrUrl, locations, setLocations]);

  return locations;
}
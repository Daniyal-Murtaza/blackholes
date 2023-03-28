import React, { useState, useEffect } from "react";

function WeatherAPI() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.wheretheiss.at/v1/satellites/25544"
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div style={{color: 'white'}}>
      <h2>{data.name}</h2>
      <p>Latitude: {data.latitude}</p>
      <p>Longitude: {data.longitude}</p>
      <p>Altitude: {data.altitude}</p>
      <p>Velocity: {data.velocity}</p>
      <p>Visibility: {data.visibility}</p>
      <p>Footprint: {data.footprint}</p>
      <p>Timestamp: {data.timestamp}</p>
      <p>Daynum: {data.daynum}</p>
      <p>Solar Lat: {data.solar_lat}</p>
      <p>Solar Lon: {data.solar_lon}</p>
      <p>Units: {data.units}</p>
    </div>
  );
}

export default WeatherAPI;

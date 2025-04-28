import React, { useEffect, useState } from 'react';
import { useWeather } from '../hooks/useWeather';
import { useAirPollution } from '../hooks/useAirPollution';

const WeatherInfo = () => {
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  }, []);
  
  const { data: weatherData, isLoading: weatherLoading } = useWeather(coords?.lat ?? 0, coords?.lon ?? 0);
  const { data: airPollutionData, isLoading: airPollutionLoading } = useAirPollution(coords?.lat ?? 0, coords?.lon ?? 0);

  if (weatherLoading || airPollutionLoading) return <div>Loading...</div>;

  if (!weatherData || !airPollutionData) return <div>Failed to fetch data.</div>;

  return (
    <div>
      <h2>Current Weather in {weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Air Quality Index: {airPollutionData.list[0].main.aqi}</p>
      <p>PM10: {airPollutionData.list[0].components.pm10} µg/m³</p>
      <p>PM2.5: {airPollutionData.list[0].components.pm2_5} µg/m³</p>
    </div>
  );
};

export default WeatherInfo;

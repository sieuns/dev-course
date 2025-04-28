import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/air_pollution";

export const fetchAirPollution = async (lat: number, lon: number) => {
  const { data } = await axios.get(BASE_URL, {
    params: {
      lat,
      lon,
      appid: API_KEY,
    },
  });
  return data;
};

// PM10 기준 (µg/m³):
// 0~30 µg/m³: 좋음

// 31~80 µg/m³: 보통

// 81~150 µg/m³: 나쁨

// 151 µg/m³ 이상: 매우 나쁨

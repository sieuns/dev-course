import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = "http://api.openweathermap.org/geo/1.0/direct";

export const fetchGeoLocation = async (city: string) => {
  const { data } = await axios.get(BASE_URL, {
    params: {
      q: city,
      limit: 1,
      appid: API_KEY,
    },
  });
  return data[0];
};

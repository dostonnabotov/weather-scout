import axios from "axios";
import config from "../config.js";

const getWeatherByCity = async (city, units) => {
  const response = await axios.get(config.secrets.weather.api, {
    params: {
      q: city,
      appid: config.secrets.weather.key,
      units: units,
    },
  });
  return response.data;
};

export { getWeatherByCity };

import axios from "axios";
import config from "../config";

const getWeatherByCity = async (city) => {
  const response = await axios.get(config.secrets.weather.api, {
    params: {
      q: city,
      appid: config.secrets.weather.key,
      units: config.defaultUnits,
    },
  });
  return response.data;
};

export { getWeatherByCity };

import axios from "axios";
import config from "../config.js";

const getWeatherByCity = async (city, units) => {
  const response = await axios.get(config.secrets.weather.api, {
    params: {
      q: city,
      units: units,
      appid: config.secrets.weather.key,
    },
  });

  return response.data;
};

const getForecastByCity = async (city, units) => {
  const { lat, lon } = await getCoordinatesByCity(city);

  const response = await axios.get(config.secrets.forecast.api, {
    params: {
      lat: lat,
      lon: lon,
      units: units,
      // cnt: 1,
      appid: config.secrets.forecast.key,
    },
  });

  return response.data;
};

const getCoordinatesByCity = async (city) => {
  const response = await axios.get(config.secrets.weather.api, {
    params: {
      q: city,
      limit: 1,
      appid: config.secrets.weather.key,
    },
  });

  const { coord } = response.data;

  return coord;
};

const getTempSymbol = (units) => {
  return units === "metric" ? "°C" : "°F";
};

export { getWeatherByCity, getForecastByCity, getTempSymbol };

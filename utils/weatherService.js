import axios from "axios";

const getWeatherByCity = async (city, weatherApiKey) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: weatherApiKey,
        units: "metric",
      },
    }
  );
  return response.data;
};

export { getWeatherByCity };

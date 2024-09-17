import axios from "axios";

const weatherApiKey = process.env.WEATHER_API_KEY;

const getWeatherByCity = async (city, apiKey) => {
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

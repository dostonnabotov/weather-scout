import dotenv from "dotenv";
dotenv.config();

import TelegramBot from "node-telegram-bot-api";
import axios from "axios";

const token = process.env.TELEGRAM_BOT_TOKEN;
const weatherApiKey = process.env.WEATHER_API_KEY;
const ipGeoApiKey = process.env.IP_GEO_API_KEY;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/weather(?:\s(.+))?/, async (msg, match) => {
  const chatId = msg.chat.id;
  const location = match[1];

  try {
    const weather = location
      ? await getWeatherByCity(location)
      : await getWeatherByIP();

    const message = formatWeatherMessage(weather);
    bot.sendMessage(chatId, message);
  } catch (error) {
    bot.sendMessage(
      chatId,
      "Sorry, I could not retrieve the weather. Please check the location."
    );
  }
});

async function getWeatherByCity(city) {
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
}

async function getWeatherByIP() {
  try {
    const geoResponse = await axios.get(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${ipGeoApiKey}`
    );

    const { city } = geoResponse.data;

    const weatherResponse = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          appid: weatherApiKey,
          units: "metric",
        },
      }
    );
    return weatherResponse.data;
  } catch (error) {
    console.error("Error getting weather by IP:", error);
    throw new Error("Could not get weather by IP");
  }
}

function formatWeatherMessage(weather) {
  return `🌤️ Weather in ${weather.name}, ${weather.sys.country}:
   - 🌡️ Temperature: ${weather.main.temp}°C
   - ☁️ Condition: ${weather.weather[0].description}
   - 💧 Humidity: ${weather.main.humidity}%
   - 🌬️ Wind Speed: ${weather.wind.speed} m/s`;
}

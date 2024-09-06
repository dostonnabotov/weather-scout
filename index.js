import dotenv from "dotenv";
dotenv.config();

import TelegramBot from "node-telegram-bot-api";
import axios from "axios";

const token = process.env.TELEGRAM_BOT_TOKEN;
const weatherApiKey = process.env.WEATHER_API_KEY;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/weather (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const location = match[1];

  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: location,
          appid: weatherApiKey,
          units: "metric",
        },
      }
    );

    const weather = response.data;
    const message = `🌤️ Weather in ${weather.name}, ${weather.sys.country}:
   - 🌡️ Temperature: ${weather.main.temp}°C
   - ☁️ Condition: ${weather.weather[0].description}
   - 💧 Humidity: ${weather.main.humidity}%
   - 🌬️ Wind Speed: ${weather.wind.speed} m/s`;

    bot.sendMessage(chatId, message);
  } catch (error) {
    bot.sendMessage(
      chatId,
      "Sorry, I could not retrieve the weather. Please check the location."
    );
  }
});

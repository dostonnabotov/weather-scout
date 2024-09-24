import dotenv from "dotenv";
dotenv.config();

const config = {
  botName: "Weather Scout",
  botVersion: "v1.4.0",
  botVersion_short: "v1.4",
  author: "Technophile",
  githubUrl: "https://github.com/dostonnabotov/weather-scout",

  // Default settings
  defaultUnits: "metric",
  defaultLanguage: "en",

  // Supported languages
  supportedLanguages: {
    en: "English",
    ru: "Russian", // in the future
    uz: "Uzbek", // in the future
  },

  // Command Descriptions
  commands: {
    about: "/about - Information about this bot.",
    help: "/help - Show this help message.",
    weather: "/weather [city] - Get the current weather.",
    forecast: "/forecast - Get the weather forecast.",
    setLocation: "/set_location - Set your default location.",
    setUnits: "/set_units [metric/imperial] - Set temperature units.", // in the future
  },

  // Secrets
  secrets: {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    weather: {
      api: "https://api.openweathermap.org/data/2.5/weather",
      key: process.env.WEATHER_API_KEY,
    },
    forecast: {
      api: "https://api.openweathermap.org/data/2.5/forecast",
      key: process.env.WEATHER_API_KEY,
    },
  },
};

export default config;

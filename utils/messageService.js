import config from "../config.js";
import enMessages from "../locales/en.js";
import uzMessages from "../locales/uz.js";
import ruMessages from "../locales/ru.js";
import { getTempSymbol } from "./weatherService.js";

const getMessagesForUser = (language) => {
  switch (language) {
    case "uz":
      return uzMessages;
    case "ru":
      return ruMessages;
    case "en":
    default:
      return enMessages;
  }
};

export { getMessagesForUser };

const generateCommands = () => {
  let commands = "";

  Object.keys(config.commands).forEach((commandKey) => {
    commands += `  - ${config.commands[commandKey]}\n`;
  });

  return commands;
};

const helpMessage = `
Here are the available commands:
${generateCommands()}
`;

const forecastMessage = (forecast, units) => {
  let tempSymbol = getTempSymbol(units);

  let message = `🌤️ 7-Day Weather Forecast for ${forecast.city.name} ${
    forecast.city?.country || ""
  }:\n`;

  // API returns 3-4 forecast info for each day,
  // so we need to filter the unnecessary and keep only one of them
  const addedDates = new Set();

  forecast.list.forEach((day, index) => {
    const date = new Date(day.dt * 1000).toLocaleDateString();

    if (!addedDates.has(date)) {
      addedDates.add(date);

      message += `\n📅 Day ${index + 1} - ${date}\n`;
      message += `- 🌡️ Temp: ${day.main.temp}${tempSymbol} \n`;
      message += `- ☁️ Condition: ${day.weather[0].description}\n`;
    }
  });

  return message;
};

export { helpMessage, forecastMessage };

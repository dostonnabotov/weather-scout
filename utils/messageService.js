import config from "../config.js";

const generateCommands = () => {
  let commands = "";

  Object.keys(config.commands).forEach((commandKey) => {
    commands += `  - ${config.commands[commandKey]}\n`;
  });

  return commands;
};

const startMessage = `
🌤️ ${config.botName} ${config.botVersion_short}

Welcome! Get up-to-date with the latest weather news in your city or anywhere in the world.

- Developed and maintained by ${config.author}
- Use /help to see available commands.
`;

const aboutMessage = `
🌤️ ${config.botName} ${config.botVersion_short}

Get up-to-date with the latest weather news in your city or anywhere in the world.

- Developed and maintained by ${config.author}
- Contribute on GitHub: ${config.githubUrl}
- Use /help to see available commands.
`;

const helpMessage = `
Here are the available commands:
${generateCommands()}
`;

const weatherMessage = (weather, units) => {
  let temp = units === "metric" ? "°C" : "°F";

  return `🌤️ Weather in ${weather.name} ${weather.sys?.country || ""}:
  - 🌡️ Temperature: ${weather.main.temp} ${temp}
  - ☁️ Condition: ${weather.weather[0].description}
  - 💧 Humidity: ${weather.main.humidity}%
  - 🌬️ Wind Speed: ${weather.wind.speed} m/s`;
};

const forecastMessage = (forecast, units) => {
  let temp = units === "metric" ? "°C" : "°F";

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
      message += `- 🌡️ Temp: ${day.main.temp}${temp} \n`;
      message += `- ☁️ Condition: ${day.weather[0].description}\n`;
    }
  });

  return message;
};

export {
  startMessage,
  aboutMessage,
  helpMessage,
  weatherMessage,
  forecastMessage,
};

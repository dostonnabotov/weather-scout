const startMessage = `
🌤️ Weather Scout v1.2

Welcome! Get up-to-date with the latest weather news in your city or anywhere in the world.

- Developed and maintained by Technophile
- Use /help to see available commands.
`;

const aboutMessage = `
🌤️ Weather Scout v1.2

Get up-to-date with the latest weather news in your city or anywhere in the world.

- Developed and maintained by Technophile
- Contribute on GitHub: https://github.com/dostonnabotov/weather-scout
- Use /help to see available commands.
`;

const helpMessage = `
Here are the available commands:
  - /about - Learn more about this bot and its features.
  - /help - Get a list of available commands and their descriptions.
  - /weather [city] - Get the current weather.
  - /set_location - Set your default location.
`;

const weatherMessage = (weather) => {
  return `🌤️ Weather in ${weather.name}, ${weather.sys.country}:
  - 🌡️ Temperature: ${weather.main.temp}°C
  - ☁️ Condition: ${weather.weather[0].description}
  - 💧 Humidity: ${weather.main.humidity}%
  - 🌬️ Wind Speed: ${weather.wind.speed} m/s`;
};

export { startMessage, aboutMessage, helpMessage, weatherMessage };

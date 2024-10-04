import config from "../config.js";

const messages = {
  startMessage: `
🌤️ ${config.botName} ${config.botVersion_short}

Welcome! Get up-to-date with the latest weather news in your city or anywhere in the world.

- Developed and maintained by ${config.author}.
- Use /help to see available commands.
`,
  aboutMessage: `
🌤️ ${config.botName} ${config.botVersion_short}

Get up-to-date with the latest weather news in your city or anywhere in the world.

- Developed and maintained by ${config.author}.
- Contribute on GitHub: ${config.githubUrl}
- Use /help to see available commands.
`,
  weatherMessage: (weather, tempSymbol) => `
🌤️ Weather in ${weather.name} ${weather.sys?.country || ""}:
  - 🌡️ Temperature: ${weather.main.temp}${tempSymbol}
  - ☁️ Condition: ${weather.weather[0].description}
  - 💧 Humidity: ${weather.main.humidity}%
  - 🌬️ Wind Speed: ${weather.wind.speed} m/s
`,
};

export default messages;

const messages = {
  startMessage: `
🌤️ ${config.botName} ${config.botVersion_short}

Добро пожаловать! Будьте в курсе последних новостей о погоде в вашем городе или в любой точке мира.

- Разработан и поддерживается ${config.author}.
- Используйте /help, чтобы просмотреть доступные команды.
`,
  aboutMessage: `
🌤️ ${config.botName} ${config.botVersion_short}

Будьте в курсе последних новостей о погоде в вашем городе или в любой точке мира.

- Разработано и поддерживается ${config.author}.
- Внесите свой вклад на GitHub: ${config.githubUrl}
- Используйте /help, чтобы просмотреть доступные команды.
`,
  weatherMessage: (weather, tempSymbol) => `
🌤️ Погода в ${weather.name} ${weather.sys?.country || ""}:
  - 🌡️ ️Температура: ${weather.main.temp}${tempSymbol}
  - 💧 Влажность: ${weather.main.humidity}%
  - 🌬️ Скорость ветра: ${weather.wind.speed} м/с.
`,
};

export default messages;

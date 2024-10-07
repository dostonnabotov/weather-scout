import config from "../config.js";

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
  language: {
    choice: "Выберите язык бота:",
    update: "Язык обновлен на русский!",
  },
  unit: {
    choice: "Выберите единицу измерения температуры:",
    update: {
      metric: "Единицы измерения обновлены до метрических!",
      imperial: "Единицы измерения обновлены до имперских!",
    },
  },
  location: {
    not_set:
      "Вы еще не указали местоположение. Используйте /set_location, чтобы установить его.",
    new: "Пожалуйста, введите новое местоположение:",
    update: "Местоположение обновлено:",
  },
  errors: {
    weather:
      "К сожалению, мне не удалось восстановить погоду. Пожалуйста, проверьте местоположение.",
    forecast:
      "К сожалению, мне не удалось получить прогноз. Пожалуйста, проверьте местоположение.",
  },
};

export default messages;

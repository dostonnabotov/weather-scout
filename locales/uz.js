const messages = {
  startMessage: `
🌤️ ${config.botName} ${config.botVersion_short}

Xush kelibsiz! O'z shahringiz yoki dunyoning istalgan nuqtasidagi so'nggi ob-havo yangiliklaridan xabardor bo'ling.

- ${config.author} tomonidan ishlab chiqilgan.
- Mavjud buyruqlarni ko'rish uchun /help dan foydalaning.
`,
  aboutMessage: `
🌤️ ${config.botName} ${config.botVersion_short}

O'z shahringiz yoki dunyoning istalgan nuqtasidagi so'nggi ob-havo yangiliklaridan xabardor bo'ling.

- ${config.author} tomonidan ishlab chiqilgan.
- GitHub’ga hissa qo‘shing: ${config.githubUrl}
- Mavjud buyruqlarni ko'rish uchun /help dan foydalaning.
`,
  weatherMessage: (weather, tempSymbol) => `
🌤️ ${weather.name} ${weather.sys?.country || ""} ob-havosi:
  - 🌡️ Harorat: ${weather.main.temp}${tempSymbol}
  - 💧 Namlik: ${weather.main.humidity}%
  - 🌬️ Shamol tezligi: ${weather.wind.speed} m/s
`,
};

export default messages;

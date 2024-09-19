const aboutMessage = `
🌤️ Weather Scout v1.2

Get up-to-date with the latest weather news in your city or anywhere in the world.

- Developed and maintained by Technophile
- Contribute on GitHub: https://github.com/dostonnabotov/weather-scout
- Use /help to see available commands.
`;

export const aboutCommand = (bot) => {
  bot.onText(/\/about/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, aboutMessage);
  });
};

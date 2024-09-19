const startMessage = `
🌤️ Weather Scout v1.2

Welcome! Get up-to-date with the latest weather news in your city or anywhere in the world.

- Developed and maintained by Technophile
- Use /help to see available commands.
`;

export const startCommand = (bot) => {
  bot.onText(/\/about/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, startMessage);
  });
};

const aboutMessage = `
🌤️ Weather Scout v1.1

Get up-to-date with the latest weather news in your city or anywhere in the world.

- Developed and maintained by Technophile
- Use /help to see available commands.
`;

export const aboutCommand = (bot) => {
  bot.onText(/\/about/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, aboutMessage);
  });
};

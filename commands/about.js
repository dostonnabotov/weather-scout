export const aboutCommand = (bot) => {
  bot.onText(/\/about/, (msg) => {
    const chatId = msg.chat.id;
    const aboutMessage = `
      🌤️ Weather Scout v1.0
      Developed by Technophile
      Use /help to see available commands.
    `;
    bot.sendMessage(chatId, aboutMessage);
  });
};

export const helpCommand = (bot) => {
  bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;

    const helpMessage = `
    Here are the available commands:
    - /weather [city] - Get the current weather.
    - /set_location - Set your default location.
    - /help - 
  `;

    bot.sendMessage(chatId, helpMessage);
  });
};

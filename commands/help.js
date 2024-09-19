const helpMessage = `
Here are the available commands:
  - /about - Learn more about this bot and its features.
  - /help - Get a list of available commands and their descriptions.
  - /weather [city] - Get the current weather.
  - /set_location - Set your default location.
`;

export const helpCommand = (bot) => {
  bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, helpMessage);
  });
};

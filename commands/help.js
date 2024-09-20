import { helpMessage } from "../utils/messageService";

export const helpCommand = (bot) => {
  bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, helpMessage);
  });
};

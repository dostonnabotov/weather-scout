import { startMessage } from "../utils/messageService";

export const startCommand = (bot) => {
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, startMessage);
  });
};

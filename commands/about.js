import { aboutMessage } from "../utils/messageService";

export const aboutCommand = (bot) => {
  bot.onText(/\/about/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, aboutMessage);
  });
};

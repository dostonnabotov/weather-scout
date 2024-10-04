import { getMessagesForUser } from "../utils/messageService.js";
import { getUserLanguage } from "../utils/userService.js";

export const startCommand = (bot) => {
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    let language = getUserLanguage(chatId);
    const messages = getMessagesForUser(language);

    bot.sendMessage(chatId, messages.startMessage);
  });
};

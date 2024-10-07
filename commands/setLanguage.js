import { getUserLanguage } from "../utils/userService.js";
import { getMessagesForUser } from "../utils/messageService.js";

export const setLanguageCommand = (bot) => {
  bot.onText(/\/set_language/, (msg) => {
    const chatId = msg.chat.id;
    let language = getUserLanguage(chatId);
    const messages = getMessagesForUser(language);

    const options = {
      reply_markup: {
        inline_keyboard: [
          [{ text: "English", callback_data: "set_language_en" }],
          [{ text: "Uzbek", callback_data: "set_language_uz" }],
          [{ text: "Russian", callback_data: "set_language_ru" }],
        ],
      },
    };

    bot.sendMessage(chatId, messages.language.choice, options);
  });
};

// import { getMessagesForUser } from "../utils/messageService.js";
// import { getUserLanguage } from "../utils/userService.js";

export const startCommand = (bot) => {
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    // let language = getUserLanguage(chatId);
    // const messages = getMessagesForUser(language);

    const options = {
      reply_markup: {
        inline_keyboard: [
          [{ text: "English", callback_data: "set_language_en" }],
          [{ text: "Uzbek", callback_data: "set_language_uz" }],
          [{ text: "Russian", callback_data: "set_language_ru" }],
        ],
      },
    };

    bot.sendMessage(chatId, "Choose the bot language:", options);
  });
};

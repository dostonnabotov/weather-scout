import { setUserLanguage } from "../utils/userService.js";

export const setLanguageCommand = (bot) => {
  bot.onText(/\/set_language/, (msg) => {
    const chatId = msg.chat.id;

    const options = {
      reply_markup: {
        inline_keyboard: [
          [{ text: "English", callback_data: "set_language_en" }],
          [{ text: "Uzbek", callback_data: "set_language_uz" }],
          [{ text: "Russian", callback_data: "set_language_ru" }],
        ],
      },
    };

    bot.sendMessage(chatId, "Choose your language:", options);
  });

  bot.on("callback_query", (callbackQuery) => {
    const message = callbackQuery.message;
    const chatId = message.chat.id;
    const data = callbackQuery.data;

    switch (data) {
      case "set_language_ru":
        setUserLanguage(chatId, "ru");
        bot.sendMessage(chatId, "Language updated to Russian!");
        break;
      case "set_language_uz":
        setUserLanguage(chatId, "uz");
        bot.sendMessage(chatId, "Language updated to Uzbek!");
        break;
      case "set_language_en":
      default:
        setUserLanguage(chatId, "en");
        bot.sendMessage(chatId, "Language updated to English!");
        break;
    }

    bot.answerCallbackQuery(callbackQuery.id);
  });
};

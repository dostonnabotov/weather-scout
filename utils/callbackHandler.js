import {
  getUserLanguage,
  setUserLanguage,
  setUserUnits,
} from "../utils/userService.js";
import { getMessagesForUser } from "../utils/messageService.js";

const handleCallbackQuery = (bot, callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;

  const callbacks = {
    set_language_ru: () => updateLanguage(bot, chatId, "ru"),
    set_language_uz: () => updateLanguage(bot, chatId, "uz"),
    set_language_en: () => updateLanguage(bot, chatId, "en"),
    set_units_metric: () => updateUnits(bot, chatId, "metric"),
    set_units_imperial: () => updateUnits(bot, chatId, "imperial"),
  };

  if (callbacks[data]) {
    callbacks[data]();
  } else {
    bot.sendMessage(chatId, "Invalid action.");
  }

  bot.answerCallbackQuery(callbackQuery.id);
};

const updateLanguage = (bot, chatId, languageCode) => {
  setUserLanguage(chatId, languageCode);
  let language = getUserLanguage(chatId);
  let messages = getMessagesForUser(language);
  bot.sendMessage(chatId, messages.language.update);
};

const updateUnits = (bot, chatId, unitSystem) => {
  setUserUnits(chatId, unitSystem);
  let language = getUserLanguage(chatId);
  let messages = getMessagesForUser(language);
  bot.sendMessage(chatId, messages.unit.update[unitSystem]);
};

export default handleCallbackQuery;

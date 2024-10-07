import {
  getUserLocation,
  getUserLanguage,
  getUserUnits,
} from "../utils/userService.js";
import { getForecastByCity } from "../utils/weatherService.js";
import {
  forecastMessage,
  getMessagesForUser,
} from "../utils/messageService.js";

export const forecastCommand = (bot) => {
  bot.onText(/\/forecast/, async (msg) => {
    const chatId = msg.chat.id;
    let language = getUserLanguage(chatId);
    const messages = getMessagesForUser(language);
    let location = getUserLocation(chatId);

    if (!location) {
      bot.sendMessage(chatId, messages.location.not_set);
      return;
    }

    try {
      let units = getUserUnits(chatId);
      const forecast = await getForecastByCity(location, units);

      const message = forecastMessage(forecast, units);
      bot.sendMessage(chatId, message);
    } catch (error) {
      bot.sendMessage(chatId, messages.errors.forecast);
    }
  });
};

import { getMessagesForUser } from "../utils/messageService.js";
import {
  getUserLanguage,
  getUserLocation,
  getUserUnits,
} from "../utils/userService.js";
import { getTempSymbol, getWeatherByCity } from "../utils/weatherService.js";

export const weatherCommand = (bot) => {
  bot.onText(/\/weather(?:\s(.+))?/, async (msg, match) => {
    const chatId = msg.chat.id;
    const city = match[1];
    let language = getUserLanguage(chatId);
    const messages = getMessagesForUser(language);
    let location;

    if (city) {
      location = city;
    } else {
      location = getUserLocation(chatId);
      if (!location) {
        bot.sendMessage(chatId, messages.location.not_set);
        return;
      }
    }

    try {
      let units = getUserUnits(chatId);
      let language = getUserLanguage(chatId);
      let tempSymbol = getTempSymbol(units);

      const weather = await getWeatherByCity(location, units);
      const messages = getMessagesForUser(language);
      const message = messages.weatherMessage(weather, tempSymbol);

      bot.sendMessage(chatId, message);
    } catch (error) {
      bot.sendMessage(chatId, messages.errors.weather);
    }
  });
};

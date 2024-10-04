import {
  getUserLanguage,
  getUserLocation,
  getUserUnits,
} from "../utils/userService.js";
import { getTempSymbol, getWeatherByCity } from "../utils/weatherService.js";
import { weatherMessage } from "../utils/messageService.js";

export const weatherCommand = (bot) => {
  bot.onText(/\/weather(?:\s(.+))?/, async (msg, match) => {
    const chatId = msg.chat.id;
    const city = match[1];
    let location;

    if (city) {
      location = city;
    } else {
      location = getUserLocation(chatId);
      if (!location) {
        bot.sendMessage(
          chatId,
          "You haven't set a location yet. Use /set_location to set it."
        );
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
      bot.sendMessage(
        chatId,
        "Sorry, I could not retrieve the weather. Please check the location."
      );
    }
  });
};

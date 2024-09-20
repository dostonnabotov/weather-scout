import { getUserLocation } from "../utils/locationService.js";
import { getWeatherByCity } from "../utils/weatherService.js";
import { weatherMessage } from "../utils/messageService.js";

export const weatherCommand = (bot, weatherApiKey) => {
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
      const weather = await getWeatherByCity(location, weatherApiKey);

      const message = weatherMessage(weather);
      bot.sendMessage(chatId, message);
    } catch (error) {
      bot.sendMessage(
        chatId,
        "Sorry, I could not retrieve the weather. Please check the location."
      );
    }
  });
};

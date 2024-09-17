import { getUserLocation } from "../utils/locationService";
import { formatWeatherMessage } from "../utils/formatService";
import { getWeatherByCity } from "../utils/weatherService";

export const weatherCommand = (bot) => {
  bot.onText(/\/weather(?:\s(.+))?/, async (msg, match) => {
    const chatId = msg.chat.id;
    const location = match[1];

    if (city) {
      location = city;
    } else {
      location = getUserLocation(chatId); // Get the stored location
      if (!location) {
        bot.sendMessage(
          chatId,
          "You haven't set a location yet. Use /set_location to set it."
        );
        return;
      }
    }

    try {
      const weather = await getWeatherByCity(location);

      const message = formatWeatherMessage(weather);
      bot.sendMessage(chatId, message);
    } catch (error) {
      bot.sendMessage(
        chatId,
        "Sorry, I could not retrieve the weather. Please check the location."
      );
    }
  });
};

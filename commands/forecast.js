import { getUserLocation, getUserUnits } from "../utils/userService.js";
import { getForecastByCity } from "../utils/weatherService.js";
import { forecastMessage } from "../utils/messageService.js";

export const forecastCommand = (bot) => {
  bot.onText(/\/forecast/, async (msg) => {
    const chatId = msg.chat.id;
    let location = getUserLocation(chatId);

    if (!location) {
      bot.sendMessage(
        chatId,
        "You haven't set a location yet. Use /set_location to set it."
      );
      return;
    }

    try {
      let units = getUserUnits(chatId);
      const forecast = await getForecastByCity(location, units);

      const message = forecastMessage(forecast, units);
      bot.sendMessage(chatId, message);
    } catch (error) {
      bot.sendMessage(
        chatId,
        "Sorry, I could not retrieve the forecast. Please check the location."
      );
    }
  });
};

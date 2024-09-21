import { setUserLocation } from "../utils/userService.js";

export const setLocationCommand = (bot) => {
  bot.onText(/\/set_location/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, "Please enter the new location:");

    bot.once("message", (msg) => {
      const location = msg.text;
      setUserLocation(chatId, location);
      bot.sendMessage(chatId, `Location updated to ${location}!`);
    });
  });
};

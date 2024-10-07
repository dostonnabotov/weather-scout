import { getUserLanguage, setUserLocation } from "../utils/userService.js";
import { getMessagesForUser } from "../utils/messageService.js";

export const setLocationCommand = (bot) => {
  bot.onText(/\/set_location/, (msg) => {
    const chatId = msg.chat.id;
    let language = getUserLanguage(chatId);
    const messages = getMessagesForUser(language);

    bot.sendMessage(chatId, messages.location.new);

    bot.once("message", (msg) => {
      const location = msg.text;
      setUserLocation(chatId, location);
      bot.sendMessage(chatId, `${messages.location.update} ${location}!`);
    });
  });
};

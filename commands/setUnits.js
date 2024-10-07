import { getUserLanguage } from "../utils/userService.js";
import { getMessagesForUser } from "../utils/messageService.js";

export const setUnitsCommands = (bot) => {
  bot.onText(/\/set_units/, (msg) => {
    const chatId = msg.chat.id;
    let language = getUserLanguage(chatId);
    const messages = getMessagesForUser(language);

    const options = {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Metric - °C", callback_data: "set_units_metric" },
            { text: "Imperial - °F", callback_data: "set_units_imperial" },
          ],
        ],
      },
    };

    bot.sendMessage(chatId, messages.unit.choice, options);
  });
};

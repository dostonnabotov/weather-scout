import { setUserUnits } from "../utils/userService.js";

export const setUnitsCommands = (bot) => {
  bot.onText(/\/set_units/, (msg) => {
    const chatId = msg.chat.id;

    const options = {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Metric", callback_data: "set_units_metric" },
            { text: "Imperial", callback_data: "set_units_imperial" },
          ],
        ],
      },
    };

    bot.sendMessage(chatId, "Choose the units:", options);
  });

  bot.on("callback_query", (callbackQuery) => {
    const message = callbackQuery.message;
    const chatId = message.chat.id;
    const data = callbackQuery.data;

    if (data === "set_units_metric") {
      bot.sendMessage(chatId, "Units updated to metric!");
      setUserUnits(chatId, "metric");
    } else if (data === "set_units_imperial") {
      bot.sendMessage(chatId, "Units updated to imperial!");
      setUserUnits(chatId, "imperial");
    }

    bot.answerCallbackQuery(callbackQuery.id);
  });
};

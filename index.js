"use strict";

import TelegramBot from "node-telegram-bot-api";
import config from "./config.js";

import { startCommand } from "./commands/start.js";
import { aboutCommand } from "./commands/about.js";
import { helpCommand } from "./commands/help.js";
import { weatherCommand } from "./commands/weather.js";
import { forecastCommand } from "./commands/forecast.js";
import { setLocationCommand } from "./commands/setLocation.js";
import { setUnitsCommands } from "./commands/setUnits.js";
import { setLanguageCommand } from "./commands/setLanguage.js";
import handleCallbackQuery from "./utils/callbackHandler.js";

const bot = new TelegramBot(config.secrets.telegramBotToken, { polling: true });

startCommand(bot);
aboutCommand(bot);
helpCommand(bot);
weatherCommand(bot);
forecastCommand(bot);
setLocationCommand(bot);
setUnitsCommands(bot);
setLanguageCommand(bot);

bot.on("callback_query", (callbackQuery) => {
  // const messageId = callbackQuery.message.message_id;
  handleCallbackQuery(bot, callbackQuery);

  // bot
  //   .deleteMessage(chatId, messageId)
  //   .catch((error) => console.log("Error deleting message:", error));
});

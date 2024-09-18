import dotenv from "dotenv";
dotenv.config();

import TelegramBot from "node-telegram-bot-api";

import { weatherCommand } from "./commands/weather.js";
import { setLocationCommand } from "./commands/setLocation.js";
import { aboutCommand } from "./commands/about.js";
import { helpCommand } from "./commands/help.js";

const token = process.env.TELEGRAM_BOT_TOKEN;
const weatherApiKey = process.env.WEATHER_API_KEY;

const bot = new TelegramBot(token, { polling: true });

weatherCommand(bot, weatherApiKey);
setLocationCommand(bot);
aboutCommand(bot);
helpCommand(bot);

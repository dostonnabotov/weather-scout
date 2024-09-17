import dotenv from "dotenv";
dotenv.config();

import TelegramBot from "node-telegram-bot-api";

import { weatherCommand } from "./commands/weather";
import { setLocationCommand } from "./commands/setLocation";

const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

weatherCommand(bot);
setLocationCommand(bot);

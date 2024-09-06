import dotenv from "dotenv";
dotenv.config();

import TelegramBot from "node-telegram-bot-api";
import axios from "axios";

const token = process.env.TELEGRAM_BOT_TOKEN;
const weatherApiKey = process.env.WEATHER_API_KEY;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/weather (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const location = match[1];
});

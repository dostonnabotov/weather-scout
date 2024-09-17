export const formatWeatherMessage = (weather) => {
  return `🌤️ Weather in ${weather.name}, ${weather.sys.country}:
   - 🌡️ Temperature: ${weather.main.temp}°C
   - ☁️ Condition: ${weather.weather[0].description}
   - 💧 Humidity: ${weather.main.humidity}%
   - 🌬️ Wind Speed: ${weather.wind.speed} m/s`;
};

import config from "../config.js";
const userPreferences = {};

// Deals with user units
export const setUserUnits = (userId, units) => {
  userPreferences[userId] = {
    ...userPreferences[userId],
    units,
  };
};

export const getUserUnits = (userId) => {
  return userPreferences[userId]?.units || config.defaultUnits;
};

// Deals with user location
export const setUserLocation = (userId, location) => {
  userPreferences[userId] = {
    ...userPreferences[userId],
    location,
  };
};

export const getUserLocation = (userId) => {
  return userPreferences[userId]?.location || "";
};

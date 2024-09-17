const userLocations = {}; // In-memory for now, should use a database in production.

const setUserLocation = (userId, location) => {
  userLocations[userId] = location;
};

const getUserLocation = (userId) => {
  return userLocations[userId];
};

export { setUserLocation, getUserLocation };

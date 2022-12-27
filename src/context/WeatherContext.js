import { createContext, useContext, useState } from "react";
import cities from "../data/cities.json"

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);

  const [city, setCity] = useState(cities.find(item => item.id === 39));

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const value = {
    city,
    setCity,
    cities,
    days,
    weather,
    setWeather,
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  )
}

const useWeather = () => useContext(WeatherContext);

export {WeatherProvider, useWeather}
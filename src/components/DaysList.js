import axios from "axios"

import { useEffect } from "react";
import { useWeather } from "../context/WeatherContext"

function DaysList() {
  const { days, weather, setWeather, city } = useWeather();

  // useEffect(() => {
  //   const API = "cef6a51450db9bf0ce10805f7a7da2ed";
  //   const getData = async () => {
  //     const URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude={part}&appid=${API}`;
  //     await axios(URL).then(res => setWeather(res.data))
  //   };
  //   getData();
  // }, [city, setWeather]);

  useEffect(() => {
    const API = "ff599af0562049b497aad3431c3c32a8";
    const getData = async () => {
      const URL = `https://api.weatherbit.io/v2.0/current?lat=${city.latitude}&lon=${city.longitude}&include=minutely&marine=t&lang=tr&key=${API}`;
      await axios(URL).then(res => setWeather(res.data))
    };
    getData();
  }, [city, setWeather]);

  return (
    <div>
      {weather.map((item, i) => {
        return (
          <div key={i}>
            <div>
              {days[new Date(item.dt * 1000).getDay()
              ]}
            </div>
            <div>
              <span>
                {Math.round(item.temp["max"] - 273.15)} & deg;
              </span>
              <span>
                {Math.round(item.temp["min"] - 273.15)} & deg;
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DaysList;
import { useWeather } from "../context/WeatherContext";

function Dropdown() {
  const { city, setCity, cities } = useWeather();

  const changeCity = (e) => {
    cities.filter((item) => {
      if (item.name === e.target.value) {
        setCity(item);
      }
    })
  }

  return (
    <div>
      <select
        name="cities"
        id="cities"
        value={city.name}
        onChange={changeCity}
      >
        {cities.map((item, i) => {
          return (
            <option value={item.name} key={i}>
              {item.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Dropdown;
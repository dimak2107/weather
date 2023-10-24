import { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { getDirectGeocoding, City } from "../../api";
import React from "react";

const Data = {
  location: "Ufa",
  date: "oct 14, 2023",
  day: "SAT",
  time: "14:11",
  temperature: "+6 °C",
  conditions: "Rain",
};

// 1 K = -272,15 °C

const Weather = () => {
  const [city, setCity] = useState<City>({
    name: "Ufa",
    lat: 57.9514026,
    lon: 68.7585844,
  });
  const [query, setQuery] = useState<string>("Ufa");
  const [weatherData, setWeatherData] = useState({});

  getDirectGeocoding(query);

  return (
    <div className="app__weather">
      <div className="app__weather-topbar">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button>Show weather</button>
      </div>
      <div className="app__weather-main">
        <div className="app__weather-main_info">
          <div className="app__weather-main_info-location">{city.name}</div>
          <div className="app__weather-main_info-date">{Data.date}</div>
          <div className="app__weather-main_info-time">{Data.time}</div>
        </div>

        <div className="app__weather-main_data">
          <img alt="image of weather" className="app__weather-main_data-img" />
          <div className="app__weather-main_data-temperature">
            {/* {weatherData.temperature > 0
              ? `+${weatherData.temperature} °C`
              : `${weatherData.temperature} °C`} */}
          </div>
          <div className="app__weather-main_data-conditions">
            {/* {weatherData.weather} */}
          </div>
        </div>
      </div>
      <div className="app__weather-footer">Have a nice day!</div>
    </div>
  );
};

export default Weather;

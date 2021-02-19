import React, { useState } from "react";
import keys from "./keys";
import "../../Styles/Weather.css"

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

function Weather() {
  const dateBuild = () => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  };

  const [weather, setWeather] = useState({});

  const search = () => {
    fetch(`${api.base}weather?q=amman&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 18
            ? "App hot"
            : "App cold"
          : "App"
      }
    >
      <main>
        <button className="button__weather " onClick={search}>
          How is the weather today?
        </button>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-container">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date"> {dateBuild(new Date())}</div>
            </div>
            <div className="weather-container">
              <div className="temperature">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default Weather;

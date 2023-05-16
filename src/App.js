import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastList from './components/ForecastList';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  const handleSearch = async (city) => {
    const appid = "b04613eb9ec58534a52b0c0780445af0";
    const exclude = "minutely,hourly,alerts";
    const units = "metric";
  
    try {
      const geoResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${appid}`);
      const { lat, lon } = geoResponse.data[0];
  
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&units=${units}&appid=${appid}`);
      const data = weatherResponse.data;
  
      console.log(data)

      setWeatherData({
        city: city,
        temperature: data.current.temp,
        weather: data.current.weather[0].main,
        humidity: data.current.humidity,
        wind_speed: data.current.wind_speed,
        uvi: data.current.uvi,
      });
  
      const forecast = data.daily.slice(0, 5).map(day => ({
        day: new Date(day.dt * 1000).toLocaleString("en-US", { weekday: "long" }),
        temperature: day.temp.day,
        weather: day.weather[0].main,
      }));
  
      setForecastData(forecast);
  
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  }
  

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      <div className="card-container">
        {weatherData && <WeatherCard weatherData={weatherData} />}
        {forecastData.length > 0 && <ForecastList forecastData={forecastData} />}
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import axios from "axios";
import './Weather.css';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const apiKey = 'a9cc166b20ac0fbd6862caf6afd6afe5'; // Replace with your actual API key

  const getWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      setWeatherData(response.data);
    } catch (error) {
      setWeatherData(null);
      setError('City not found! Please enter a valid city.');
    }
  };

  useEffect(() => {
    if (city !== '') {
      getWeather();
    }
  }, [city]);

  return (
    <div className="container">
      <h1>Weather App</h1>
      <input className="input" type='text' placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} />
      <br/>
      
      
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°K</p>
          <p>Weather: {weatherData.weather[0].description}</p>
         
        </div>
      )}
    </div>
  );
};

export default WeatherApp;

// {error && <p style={{ color: 'red' }}>{error}</p>}
// <button className="btn" onClick={getWeather}>Get Weather</button>
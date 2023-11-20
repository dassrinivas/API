import React, { useState } from 'react';
import './Weather API/Weather';
import WeatherApp from './Weather API/Weather';
import '../src/News API/App';
import NewsApi from './News API/News';
import './App.css';

function App() {
  const [showWeather, setShowWeather] = useState(false);
  const [showNews, setShowNews] = useState(false);

  const handleWeatherClick = () => {
    setShowWeather(true);
  };

  const handleNewsClick = () => {
    setShowNews(true);
  };

  return (
    <div className='App'>
    <center>
      <button className='btn' placeholder='Weather' onClick={handleWeatherClick}>
        WeatherApp
      </button>
      {showWeather && <WeatherApp />}
      <hr/>
      <button className='btn1' placeholder='News' onClick={handleNewsClick} >News </button>
      {showNews && <NewsApi/>}
      </center>
    </div>
  );
}

export default App;

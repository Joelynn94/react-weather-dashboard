import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Container } from '@material-ui/core';
import 'fontsource-roboto';

import './App.css';
import Search from './components/Search'
import Weather from './components/Weather'

function App() {

  const [results, setResults] = useState({
    cityName: '',
    country: '',
    weatherDetails: []
  })
  const [query, setQuery] = useState('')

  useEffect(() => {
    fetchWeather()
  }, [query])

  const fetchWeather = async () => {
    // const URL = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${query}&cnt=7&appid=${process.env.REACT_APP_API_KEY}`
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${process.env.REACT_APP_API_KEY}`
  
    const response = await axios.get(URL, {
      params: {
        units: 'imperial',
      }
    })

    console.log({
      cityName: response.data.city.name,
      country: response.data.city.country,
      weatherDetails: response.data.list
    })
    setResults({
      cityName: response.data.city.name,
      country: response.data.city.country,
      weatherDetails: response.data.list
    })
  }


  return (
    <main>
      <Container>
        <Search getQuerySearch={(search) => setQuery(search)}/>
        <Weather cityName={results.cityName} country={results.country} weather={results.weatherDetails} />
      </Container>
    </main>
  );
}

export default App;

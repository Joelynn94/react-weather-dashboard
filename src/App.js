import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Grid } from '@material-ui/core';
import 'fontsource-roboto';

import './App.css';
import Search from './components/Search'
import Forecast from './components/Forecast'
import TodaysHighlights from './components/TodayHighlights'
import CurrentWeather from './components/CurrentWeather';

function App() {

  const [results, setResults] = useState({
    cityName: '',
    country: '',
    weatherDetails: []
  })
  const [query, setQuery] = useState('')

  const fetchWeather = async (query) => {
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${process.env.REACT_APP_API_KEY}`
  
    const response = await axios.get(URL, {
      params: {
        units: 'imperial',
      }
    })
    setResults({
      cityName: response.data.city.name,
      country: response.data.city.country,
      weatherDetails: response.data.list
    })
  }

  useEffect(() => {
    fetchWeather(query)
  }, [query])

  return (
    <main>
      <Container>
        <Grid container space={2}>
          <Grid item xs={12} md={3} lg={4}>
            <Search getQuerySearch={(search) => setQuery(search)} />
            <CurrentWeather cityName={results.cityName} country={results.country} weather={results.weatherDetails} />
          </Grid>
          <Grid item xs={12} md={9} lg={8}>
            <TodaysHighlights weather={results.weatherDetails} />
            <Forecast cityName={results.cityName} country={results.country} weather={results.weatherDetails} />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default App;

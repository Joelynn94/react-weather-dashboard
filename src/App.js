import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Grid } from '@material-ui/core';
import 'fontsource-roboto';

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

  useEffect(() => {
    const fetchWeather = async () => {
      try {
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
        
      } catch (error) {
        console.log(error)
      }
    }
    fetchWeather()
  }, [query])
  
  return (
    <main>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} lg={4}>
            <Search getQuerySearch={(search) => setQuery(search)} key={results.weatherDetails.dt}/>
            <CurrentWeather cityName={results.cityName} country={results.country} weather={results.weatherDetails} key={results.weatherDetails.dt}/>
          </Grid>
          <Grid item xs={12} md={9} lg={8}>
            <TodaysHighlights weather={results.weatherDetails} key={results.weatherDetails.dt}/>
            <Forecast cityName={results.cityName} country={results.country} weather={results.weatherDetails} key={results.weatherDetails.dt}/>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default App;

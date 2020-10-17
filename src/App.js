import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './App.css';
import Search from './components/Search'
import Weather from './components/Weather'

function App() {

  const [results, setReults] = useState({})
  const [query, setQuery] = useState('')

  useEffect(() => {
    fetchWeather()
  }, [query])

  const fetchWeather = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${process.env.REACT_APP_API_KEY}`
  
    const response = await axios.get(URL, {
      params: {
        q: query,
        units: 'imperial',
        appid: process.env.REACT_APP_API_KEY
      }
    })
  
    console.log(response.data)
    setReults(response)
  }


  return (
    <div>
      <Search getQuerySearch={(search) => setQuery(search)}/>
      <Weather city={results}/>
    </div>
  );
}

export default App;

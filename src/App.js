import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './App.css';
import Search from './components/Search'
import Weather from './components/Weather'

function App() {

  const [results, setReults] = useState({
    cityName: '',
    country: '',
    items: []
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
  
    const objToArray = [...Object.entries(response.data.list)]
    console.log(typeof objToArray, objToArray)

    console.log({
      cityName: response.data.city.name,
      country: response.data.city.country,
      items: response.data.list
    })
    setReults({
      cityName: response.data.city.name,
      country: response.data.city.country,
      items: response.data.list
    })

  }


  return (
    <div>
      <Search getQuerySearch={(search) => setQuery(search)}/>
      <Weather cityName={results.cityName} country={results.country} result={results} />
    </div>
  );
}

export default App;

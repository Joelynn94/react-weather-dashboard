import React from 'react'
import { Container, Grid, Button, Typography } from '@material-ui/core';

import ForecastCard from './ForecastCard'

function Weather({cityName, country, weather}) {

  const dateBuilder = (d) => {
    const dt = new Date(d)
    const year = dt.getFullYear()
    const month = dt.getMonth()
    const date = dt.getDate()
    const day = dt.getDay()
    const time = dt.getTime()

    return `${day} ${date} ${month} ${year} ${time}`
  }  

  return (
    <section>
      <h1>Forecast</h1>
      <Grid container spacing={2}> 
        {weather.map((weatherItem) => (
          weatherItem.weather.map((item, index) => (
            <Grid item xs={12} md={6} lg={4}> 
              <ForecastCard 
                img={process.env.PUBLIC_URL + `/weather-icons/${item.icon}.png`} 
                description={`${item.description}`}
                temp={`${Math.round(weatherItem.main.temp)}\u00b0F`}
                date={weatherItem.dt}
                city={cityName}
                country={country}
                key={index}
              />
            </Grid>
          ))
        ))}
      </Grid> 
    </section>
  )
}

export default Weather

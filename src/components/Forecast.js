import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import ForecastCard from './ForecastCard'

const useStyles = makeStyles({
  '@global': {
    '.heading': {
      marginTop: '3rem',
      marginBottom: '1rem'
    },
  }
});

function Weather({cityName, country, weather}) {
  useStyles()

  return (
    <section>
      {(weather.length > 0)
      ? (<Typography variant="h2" className='heading'>
          Forecast
      </Typography>
        ) : ('')
      }
      <Grid container spacing={2}> 
        {weather.map((weatherItem) => (
          weatherItem.weather.map((item, index) => (
            <Grid item xs={12} md={6} lg={4}> 
              <ForecastCard 
                img={process.env.PUBLIC_URL + `/weather-icons/${item.icon}.png`} 
                desc={`${item.description}`}
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

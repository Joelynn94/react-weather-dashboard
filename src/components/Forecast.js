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

function Weather({cityName, country, weather, key}) {
  useStyles()

  const getDate = (dateText) => {
    let options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric', 
      hour12: false
    };
    const date = new Date(dateText)
    return new Intl.DateTimeFormat('en-US', options).format(date)
  }

  return (
    <section>
      {(weather.length > 0)
      ? (<Typography variant="h2" className='heading'>
          Forecast
      </Typography>
        ) : ('')
      }
      <Grid container spacing={2}> 
        {weather.map((weatherItem, index) => (
          weatherItem.weather.map((item, index2) => (
            <Grid item xs={12} md={6} lg={4} key={index}> 
              <ForecastCard 
                img={process.env.PUBLIC_URL + `/weather-icons/${item.icon}.png`} 
                desc={`${item.description}`}
                temp={`${Math.round(weatherItem.main.temp)}\u00b0F`}
                date={getDate(weatherItem.dt_txt)}
                city={cityName}
                country={country}
                key={index2}
              />
            </Grid>
          ))
        ))}
      </Grid> 
    </section>
  )
}

export default Weather

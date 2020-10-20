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

  const formatDateAndTime = (dateText) => {
    let options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric', 
      hour12: true
    };
    const date = new Date(dateText)

    return new Intl.DateTimeFormat('en-US', options).format(date)

    // const dateString = dateText
    //   // makes a new array at the string comma and space
    //   .split(' ')
    //   // removes the second array element (the time)
    //   .splice(0, 1)
    //   // joining the new string
    //   .join('')
    // const timeString = dateText
    //   // makes a new array at the string space
    //   .split(' ')
    //   // removes the first array element (the date)
    //   .splice(1, 1)
    //   // joining the new string
    //   .join('')
    // // split the time string by the colon
    // let [hours, minutes] = timeString.split(':')
    // // checking if the hours are greater than 12
    // let amOrPm = hours > 12 ? 'pm' : 'am'
    // // divide the hours 
    // hours = hours % 12 || 12
    
    // return `${dateString}, ${hours}:${minutes}${amOrPm}`
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
        {weather.map((weatherItem) => (
          weatherItem.weather.map((item, index) => (
            <Grid item xs={12} md={6} lg={4}> 
              <ForecastCard 
                img={process.env.PUBLIC_URL + `/weather-icons/${item.icon}.png`} 
                desc={`${item.description}`}
                temp={`${Math.round(weatherItem.main.temp)}\u00b0F`}
                date={formatDateAndTime(weatherItem.dt_txt)}
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

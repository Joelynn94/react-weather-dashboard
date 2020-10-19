import React from 'react'
import CurrentWeatherCard from './CurrentWeatherCard'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  '@global': {
    '.current-weather': {
      marginTop: '3rem',
      width: '80%'
    },
  }
});

function CurrentWeather({ cityName, country, weather }) {
  useStyles()

  return (
    <section className='current-weather'>
      {(weather.length > 0)
        ? ( <CurrentWeatherCard 
          img={process.env.PUBLIC_URL + `/weather-icons/${weather[0].weather[0].icon}.png`} 
          desc={`${weather[0].weather[0].description}`}
          temp={`${Math.round(weather[0].main.temp)}\u00b0F`}
          date={weather[0].dt}
          city={cityName}
          country={country}
        />
        ) : ('')
      }
    </section>
  )
}

export default CurrentWeather

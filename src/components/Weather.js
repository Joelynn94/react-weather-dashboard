import React from 'react'
import { Container, Button, Typography } from '@material-ui/core';

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
    <Container>
      {weather.map((weatherItem) => (
        <section>
          {weatherItem.weather.map((item) => {
            return <div>
              <img src={process.env.PUBLIC_URL + `/weather-icons/${item.icon}.png`} alt={item.description}/>
              <Typography variant='body1'>
                {`${item.description}`}
              </Typography>
            </div>
          })}

          <Typography variant='h2'>
            {`${Math.round(weatherItem.main.temp)}\u00b0F`}
          </Typography>
          <Typography variant='h3'>
            {weatherItem.dt}
          </Typography>
          <Typography variant='h4'>
            {`${cityName}, ${country}`}
          </Typography>
        </section>
      ))}
    </Container>
  )
}

export default Weather

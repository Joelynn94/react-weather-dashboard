import React from 'react'
import { Container, Button } from '@material-ui/core';

function Weather({cityName, country, weather}) {

  const arrayResults = weather
  console.log(typeof arrayResults, arrayResults)

  return (
    <Container maxWidth="sm">
      <h2>{cityName}</h2>
      <h5>{country}</h5>
      <Button variant="contained" color="primary">Hello World</Button>
      {weather.map((obj) => (
        <div>
          <h3>{obj.dt_txt}</h3>
          <p>{`Temp ${obj.main.temp}`}</p>

          {obj.weather.map((desc) => {
            return <div>
              <p>{`Description ${desc.description}`}</p>
              <img src={process.env.PUBLIC_URL + `/weather-icons/${desc.icon}.png`} alt={desc.description}/>
            </div>
          })}

        </div>
      ))}

    </Container>
  )
}

export default Weather

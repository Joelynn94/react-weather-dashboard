import React from 'react'

function Weather({cityName, country, weather}) {

  const arrayResults = weather
  console.log(typeof arrayResults, arrayResults)

  return (
    <div>
      <h2>{cityName}</h2>
      <h5>{country}</h5>
      {weather.map((obj) => (
        <p>{obj.main.temp}</p>
      ))}

    </div>
  )
}

export default Weather

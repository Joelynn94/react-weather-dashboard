import React from 'react'

function Weather({cityName, country, result}) {

  const arrayResults = result.items
  console.log(typeof arrayResults, arrayResults)

  return (
    <div>
      <h2>{cityName}</h2>
      <h5>{country}</h5>

    </div>
  )
}

export default Weather

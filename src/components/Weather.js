import React from 'react'

function Weather({city}) {
  return (
    <div>
      <h2>{city.name}</h2>
      <h5>Country</h5>
    </div>
  )
}

export default Weather

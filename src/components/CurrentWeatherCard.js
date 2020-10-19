import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'

function CurrentWeatherCard({img, desc, temp, date, city, country}) {
  return (
    <>
      <Card variant='outlined'>
        <CardContent>
          <CardMedia 
            component="img"
            alt={desc}
            image={img}
            title={desc}
          />
          <Typography variant="h5">
            {desc}
          </Typography>
          <Typography variant="h2">
            {temp}
          </Typography>
          <Typography variant="h4">
            {date}
          </Typography>
          <Typography variant='h5'>
            {`${city}, ${country}`}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default CurrentWeatherCard

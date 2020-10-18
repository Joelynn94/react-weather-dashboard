import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'

function ForecastCard({img, description, temp, date, city, country}) {
  return (
    <>
      <Card variant='outlined'>
        <CardContent>
          <CardMedia 
            component="img"
            alt={description}
            image={img}
            title={description}
          />
          <Typography variant="h2">
            {temp}
          </Typography>
          <Typography variant="h3">
            {date}
          </Typography>
          <Typography variant='h4'>
            {`${city}, ${country}`}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default ForecastCard

import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

function HighlightCard({title, stat}) {
  return (
    <>
      <Card variant='outlined'>
        <CardContent>
          <Typography variant="h5">
            {title}
          </Typography>
          <Typography variant="h3">
            {stat}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default HighlightCard

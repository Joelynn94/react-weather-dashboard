import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import HighlightCard from './HighlightCard'

const useStyles = makeStyles({
  '@global': {
    '.highlights': {
      marginTop: '2rem'
    },
  }
});

function TodayHighlights({ weather }) {
  useStyles()

  return (
    <section className='highlights'>
      {(weather.length > 0)
        ? ( <Typography variant="h2" className='heading'>
              Today's Highlights
            </Typography>
        ) : ( <Typography variant="h2" className='heading'>
                No data to show... please try searching for a city
              </Typography>)
      }
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          {(weather.length > 0)
            ? (<HighlightCard title='Humidity' stat={`${weather[0].main.humidity}%`}/>
            ) : ('')
          }
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          {(weather.length > 0)
            ? (<HighlightCard title='Wind Speed' stat={`${weather[0].wind.speed}mph`}/>
            ) : ('')
          }
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          {(weather.length > 0)
            ? (<HighlightCard title='Visibility' stat={`${weather[0].visibility}ft`}/>
            ) : ('')
          }
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          {(weather.length > 0)
            ? (<HighlightCard title='Feels Like' stat={`${weather[0].main.feels_like}\u00b0F`}/>
            ) : ('')
          }
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          {(weather.length > 0)
            ? (<HighlightCard title='Low' stat={`${weather[0].main.temp_min}\u00b0F`}/>
            ) : ('')
          }
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          {(weather.length > 0)
            ? (<HighlightCard title='High' stat={`${weather[0].main.temp_max}\u00b0F`}/>
            ) : ('')
          }
        </Grid>
      </Grid>
    </section>
  )
}

export default TodayHighlights

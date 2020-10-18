import React, {useState} from 'react'
import { Button, FormControl, InputLabel, Input, InputAdornment } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  '@global': {
    '.search-button': {
      marginTop: '1rem'
    },
  }
});

function Search({ getQuerySearch }) {
  useStyles();

  const [search, setSearch] = useState('')

  const searchInput = (input) => {
    setSearch(input)
  }

  const formSubmit = (e) => {
    e.preventDefault()
    getQuerySearch(search)
    setSearch('')
  }

  return (
    <section>
      <FormControl>
        <InputLabel 
          htmlFor="input-with-icon-adornment"
        >
          Search for a city
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          value={search}
          onChange={(e) => searchInput(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          }
        />
        {(search === '') 
        ? (<Button 
            variant="contained" 
            color="primary"
            className="search-button" 
            type="submit" 
            onClick={formSubmit}
            disabled
         >
          Search
          </Button>
        ) : ( <Button 
              variant="contained" 
              color="primary"
              className="search-button" 
              type="submit" 
              onClick={formSubmit}
              disableElevation
              >  
                Search
              </Button>
        )}
      </FormControl>
    </section>
  )
}

export default Search

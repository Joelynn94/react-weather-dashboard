import React, {useState} from 'react'
import { Button, FormControl, InputLabel, Input, InputAdornment } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  '@global': {
    '.search-section': {
      marginTop: '5rem'
    },
    '.search-form': {
      width: '100%'
    },
    '.search-button': {
      marginTop: '1rem'
    },
  }
});

function Search({ getQuerySearch }) {
  useStyles();

  const [search, setSearch] = useState('')

  const handleSearchInput = (e) => {
    setSearch(e)
  }

  const handleKeyPress = (e) => {
    e.preventDefault()
    if(e.key === 'Enter') {
      getQuerySearch(search)
      setSearch('')
    }
  }

  const formSubmit = (e) => {
    e.preventDefault()
    getQuerySearch(search)
    setSearch('')
  }

  return (
    <section className="search-section">
      <FormControl className='search-form'>
        <InputLabel 
          htmlFor="input-with-icon-adornment"
        >
          Search for a city
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          value={search}
          onChange={(e) => handleSearchInput(e.target.value)}
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
            onSubmit={handleKeyPress}
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
              onSubmit={handleKeyPress}
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

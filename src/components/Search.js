import React, {useState} from 'react'

function Search({ getQuerySearch }) {
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
      <form>
        <input 
          type="text"
          className="search-input"
          placeholder="Search a city"
          autoFocus
          value={search}
          onChange={(e) => searchInput(e.target.value)}
        />
        <button className="search-button" type="submit" onClick={formSubmit}>
          Search
        </button>
      </form>
    </section>
  )
}

export default Search

import React from 'react'
import './search.css'

const Search = ({ setSearchText }) => {
  return(
    <div className='search-container'>
      <input placeholder='Search name or username' type="search" onChange={e => setSearchText(e.target.value.toLowerCase())} />
    </div>
  )
}

export default Search
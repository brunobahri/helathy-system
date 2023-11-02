import React from 'react'
import '../styles/HomePage.css'

const SearchBar: React.FC = () => {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Procurar por..." />
      <button>Pesquisar</button>
    </div>
  )
}

export default SearchBar

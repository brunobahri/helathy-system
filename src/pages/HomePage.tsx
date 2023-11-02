import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import '../styles/HomePage.css'

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <div className="hero-section">
        <h1>
          A maior rede credenciada do Paraná, cuidando de você e sua família
        </h1>
        <SearchBar />
      </div>
    </div>
  )
}

export default HomePage
1

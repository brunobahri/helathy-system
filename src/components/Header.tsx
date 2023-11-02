import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">Seu Logo</div>
      <nav className="nav">
        <Link to="/signup" className="nav-link">
          Cadastro
        </Link>
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/map" className="nav-link">
          Mapa
        </Link>
      </nav>
    </header>
  )
}

export default Header

import React from 'react'
import '../styles/LoginPage.css'

const LoginPage: React.FC = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default LoginPage

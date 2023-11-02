import React from 'react'
import '../styles/SignupPage.css'

const SignupPage: React.FC = () => {
  return (
    <div className="signup-container">
      <h2>Cadastro</h2>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

export default SignupPage

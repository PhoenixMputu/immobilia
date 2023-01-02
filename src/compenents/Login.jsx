import React from 'react'
import { Link, redirect } from 'react-router-dom';

const Login = () => {
    const currentUser = localStorage.getItem('userData');
    if (currentUser) {
        return redirect('/')
    }
  return (
    <div className='container__login'>
        <form>
            <h1>Connexion</h1>
            <div className='group-input'>
                <label>Email</label>
                <input type="email" required/>
            </div>
            <div className='group-input'>
                <label>Mot de passe</label>
                <input type="passwoord" required/>
            </div>
            <div className='container__links'>
                <Link to="/forget">Mot de passe oublié</Link>
                <Link to="/register">Créer un compte</Link>
            </div>
            <input type="submit" className='btn-primary' value="Se connecter" />
        </form>
    </div>
  )
}

export default Login
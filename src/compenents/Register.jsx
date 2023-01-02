import React from 'react'
import { Link, redirect } from 'react-router-dom'

const Register = () => {
  return (
    <div className='container__login'>
        <form>
            <h1>Inscription</h1>
            <div className='group-input'>
                <label>Nom</label>
                <input type="email" required/>
            </div>
            <div className='group-input'>
                <label>Prénom</label>
                <input type="email" required/>
            </div>
            <div className='group-input'>
                <label>Email</label>
                <input type="email" required/>
            </div>
            <div className='group-input'>
                <label>Mot de passe</label>
                <input type="passwoord" required/>
            </div>
            <div className='group-input'>
                <label>Confirmation</label>
                <input type="passwoord" required/>
            </div>
            <input type="submit" className='btn-primary mt' value="S'inscrire" />
            <div className='container__links'>
                <Link to="/login">J'ai déjà un compte ?</Link>
            </div>
        </form>
    </div>
  )
}

export default Register
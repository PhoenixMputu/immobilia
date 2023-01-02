import React, {useState} from 'react'
import { Link, redirect } from 'react-router-dom'

const Register = () => {
    const [data, setData] = useState({
        name: '',
        firstname: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setData((prevState) => ({...prevState, [name]: value}));
    }
  return (
    <div className='container__login'>
        <form>
            <h1>Inscription</h1>
            <div className='group-input'>
                <label>Nom</label>
                <input type="email" onChange={handleChange} required/>
            </div>
            <div className='group-input'>
                <label>Prénom</label>
                <input type="email" onChange={handleChange} required/>
            </div>
            <div className='group-input'>
                <label>Email</label>
                <input type="email" onChange={handleChange} required/>
            </div>
            <div className='group-input'>
                <label>Mot de passe</label>
                <input type="passwoord" onChange={handleChange} required/>
            </div>
            <div className='group-input'>
                <label>Confirmation</label>
                <input type="passwoord" onChange={handleChange} required/>
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
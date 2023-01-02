import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link, redirect } from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const currentUser = localStorage.getItem('userData');
    if (currentUser) {
        return redirect('/')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setData((prevState) => ({...prevState, [name]: value}));
        console.log(data);
    }
    
  return (
    <div className='container__login'>
        <form onSubmit={handleSubmit}>
            <h1>Connexion</h1>
            <div className='group-input'>
                <label>Email</label>
                <input type="email" name='email' required/>
            </div>
            <div className='group-input'>
                <label>Mot de passe</label>
                <input type="passwoord" name='password' required/>
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
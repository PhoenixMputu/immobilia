import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link, redirect } from 'react-router-dom'

const Register = () => {
    const [data, setData] = useState({
        name: '',
        firstName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.name.length < 3) {
            return toast.error('Le nom doit avoir au moins 3 caractères', {
                position: toast.POSITION.TOP_RIGHT
            })
        }
        
        if (data.firstName.length < 3) {
            return toast.error('Le prénom doit avoir au moins 3 caractères', {
                position: toast.POSITION.TOP_RIGHT
            })
        }
        
        if (data.password === data.confirmPassword) {
            return toast.error('Les mots de passe ne sont pas identique', {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    }
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setData((prevState) => ({...prevState, [name]: value}));
        console.log(data);
    }

  return (
    <div className='container__login'>
        <form onSubmit={handleSubmit}>
            <h1>Inscription</h1>
            <div className='group-input'>
                <label>Nom</label>
                <input type="text" name='name' onChange={handleChange} required/>
            </div>
            <div className='group-input'>
                <label>Prénom</label>
                <input type="text" name='firstName' onChange={handleChange} required/>
            </div>
            <div className='group-input'>
                <label>Email</label>
                <input type="email" name='email' onChange={handleChange} required/>
            </div>
            <div className='group-input'>
                <label>Mot de passe</label>
                <input type="passwoord" name='password' onChange={handleChange} required/>
            </div>
            <div className='group-input'>
                <label>Confirmation</label>
                <input type="passwoord" name='confirmPassword' onChange={handleChange} required/>
            </div>
            <input type="submit" className='btn-primary mt' value="S'inscrire" />
            <div className='container__links'>
                <Link to="/login">J'ai déjà un compte ?</Link>
            </div>
        </form>
        <ToastContainer />
    </div>
  )
}

export default Register
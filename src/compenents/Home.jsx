import React from 'react'
import { redirect } from 'react-router-dom';

const Home = () => {
    const currentUser = localStorage.getItem('userData');
    console.log(currentUser);
    if (!currentUser) {
        return redirect('http://localhost:3000/login')
    }
  return (
    <div>Home Page</div>
  )
}

export default Home
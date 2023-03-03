import React from 'react'
import Header from './Header'
import Card from './Card'

const Home = () => {
  return (
    <>
      <Header/>
      <main id="main_home">
        <section className='identity'>
          <h2>Mon identité</h2>
          <p>Nom : Tshimbadi</p>
          <p>Prénom : Mputu</p>
          <p>Sexe : M</p>
          <p>Email : victory23tshimbadi@gmail.com</p>
          <p>Téléphone : 0811533644</p>
        </section>
        <section className="container_card">
          <Card title="Appartement" number={1500} legend="1500 appartement"/>
          <Card title="Appartement" number={1500} legend="1500 appartement"/>
          <Card title="Appartement" number={1500} legend="1500 appartement"/>
        </section>
        <form className="payment">
          <h2>Payer votre loyer</h2>
          <input type="number" placeholder='2 Mois' name="month" id="month" />
          <input type="submit" className='btn-primary' value="Payer par M-pesa" />
        </form>
      </main>
    </>
  )
}

export default Home
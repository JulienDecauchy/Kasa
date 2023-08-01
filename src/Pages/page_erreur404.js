import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from "react-router-dom";
import img404 from '../assets/img/404.png'

function Erreur404() {
  return (
    <>
      <Header />
        <main>
          <div className='wrapper_div404'>
            <div>
              <img 
                src={img404}
                alt="Image erreur 404"
              />
              <h1>Oups! La page que vous demandez n'existe pas.</h1>
            </div>
            <div className='div_link404'>
              <Link to="/" class="list">
                Retourner sur la page d’accueil
              </Link>
            </div>
          </div>
        </main>
      <Footer />
    </>
  )
}

export default Erreur404
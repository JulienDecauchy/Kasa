import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import background_img from"../assets/img/img_accueil01.png"

function Accueil() {
  return (
    <>
      <Header />
        <main>
          <section>
            <div className='div_background-img'>
              <p>Chez vous, partout et ailleurs</p>
              <img 
                src={background_img}
                alt="Image panoramique d'un paysage"
              />
            </div>
          </section>
          <section>
            <div className='div_background-cards'>
              <div>Test</div>
            </div>
          </section>
        </main>
      <Footer />
    </>
  )
}

export default Accueil
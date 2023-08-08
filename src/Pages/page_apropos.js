import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import background_img from '../assets/img/img_apropos01.png'
import Apropos_collapse from '../Components/apropos_collapse'

function Apropos() {
  return (
    <>
      <Header />
        <main>
          <section>
            <div className='div_background-img'>
              <img 
                src={background_img}
                alt="Image panoramique d'un paysage"
              />
            </div>
          </section>
          <section id='apropos_Collapse-section'>
            <div className='div_aproposCollapse'>
              <Apropos_collapse />
            </div>
          </section>
        </main>
      <Footer />
    </>
  )
}

export default Apropos
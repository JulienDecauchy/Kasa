import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import logement from '../logements.json'

function Logement() {
  return (
    <>
      <Header />
        <main>
          <section>
            <div>
              <img 
                src={logement.pictures}
                alt="Image de logement"
              />
            </div>
          </section>
          <section>
            <div>
              <div>
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
              </div>
              <div>{logement.host}</div>
            </div>
            <div>
              <div>{logement.tags}</div>
              <div>{logement.rating}</div>
            </div>
            <div>
              <div>{logement.description}</div>
              <div>{logement.equipments}</div>
            </div>
          </section>
        </main>
      <Footer />
    </>
  )
}

export default Logement
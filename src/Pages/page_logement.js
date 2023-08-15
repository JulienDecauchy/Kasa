import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import jsonLogement from '../logements.json'
import { useParams } from 'react-router-dom'

function Logement() {
  const { id } = useParams();
  const jsonFilter = jsonLogement.filter(img => img.id === id)

  const showLogementsPictures = jsonFilter.map((img, index) => (
    <div key={img.id}>
      <img
        src={img.pictures[index]}
        alt="Image de logement"
      />
    </div>
  ))

  return (
    <>
      <Header />
        <main>
          <section>
            <div>
                { showLogementsPictures }
            </div>
          </section>
          <section>
            <div>
              <div>
                <h1>{jsonLogement.title}</h1>
                <p>{jsonLogement.location}</p>
              </div>
              <div>{jsonLogement.host}</div>
            </div>
            <div>
              <div>{jsonLogement.tags}</div>
              <div>{jsonLogement.rating}</div>
            </div>
            <div>
              <div>{jsonLogement.description}</div>
              <div>{jsonLogement.equipments}</div>
            </div>
          </section>
        </main>
      <Footer />
    </>
  )
}

export default Logement
import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import jsonLogement from '../logements.json'
import { useParams } from 'react-router-dom'
import LogementsDescriptionCollapse from '../Components/logements_description_collapse'
import LogementsÉquipementsCollapse from '../Components/logements_equipements_collapse'
import Rate from '../Components/logements_rate'

function Logement() {
  const { id } = useParams();
  const jsonFilter = jsonLogement.filter(filter => filter.id === id)

  const [index, setIndex] = useState(0);
  const [number, setNumber] = useState(1);
  const jsonCarrousel = jsonFilter.map(picture => (picture.pictures))

  console.log(jsonFilter.map(picture => (picture.pictures)))
  console.log(jsonCarrousel.length)
  console.log(index)

  function handleNextClick() {
    if (index > jsonCarrousel.length) {
      setIndex(jsonCarrousel.length = 0)
      setNumber(1)
    } else {
      setIndex(index + 1);
      setNumber(number + 1);
    }
  }

  function handlePreviousClick() {
    if (index < jsonCarrousel.length) {
      setIndex(jsonCarrousel.length - 1)
      setNumber(jsonCarrousel.lenght - 1)
    } else {
      setIndex(index - 1);
      setNumber(number - 1);
    }
  }

  const showPicturesSection = jsonFilter.map(img => (
    <div key={img.id} className='carrouselDiv'>
      <div className='arrowDiv'>
        <div onClick={handlePreviousClick} className='arrowLeft'>
          <i className="fa-solid fa-chevron-left" alt="flèche gauche"></i>
        </div>
        <div onClick={handleNextClick} className='arrowRight'>
          <i className="fa-solid fa-chevron-right" alt="flèche droite"></i>
        </div>
      </div>
      <img
        src={img.pictures[index]}
        alt="Image de logement"
      />
      <div className='arrayNumber'>
        <p>{number}/{img.pictures.length}</p>
      </div>
    </div>
  ))

  const showInfoSection = jsonFilter.map(info => (
    <div key={info.id} className='InfoDiv'>
      <div className='infoTitleHostDiv'>
        <div className='infoTitleDiv'>
          <h1>{info.title}</h1>
          <p>{info.location}</p>
        </div>
        <div className='infoHostDiv'>
          <img 
            src={info.host.picture}
            alt='Image hôte'
          />
          <p>{info.host.name}</p>
          </div>
        </div>
      <div>
        <div>{info.tags}</div>
        <div>
          <Rate score={info.rating}/>
        </div>
      </div>
      <div>
        <LogementsDescriptionCollapse />
        <LogementsÉquipementsCollapse />
      </div>
    </div>
  ))

  return (
    <>
      <Header />
        <main id='LogementMainDiv'>
          <section>
            <div>
              { showPicturesSection }
            </div>
          </section>
          <section>
              { showInfoSection }
          </section>
        </main>
      <Footer />
    </>
  )
}

export default Logement
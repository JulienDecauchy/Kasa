import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import jsonLogement from '../logements.json'
import { useNavigate, useParams } from 'react-router-dom'
import LogementsDescriptionCollapse from '../Components/logements_description_collapse'
import LogementsÉquipementsCollapse from '../Components/logements_equipements_collapse'
import Rate from '../Components/logements_rate'

function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const jsonFilter = jsonLogement.filter(filter => filter.id === id)
  const errorFilter = jsonFilter.map(con => con.id)
  console.log(errorFilter)
  console.log(id)

  /**marche pas = ! !!!!return!!!! ! + length */
  useEffect(() => {
    jsonFilter.map(con => {
      if (id !== con.id) {
          navigate("*")
      }
      return
    })
	}, [ id, navigate ]);

  let [index, setIndex] = useState(0);
  let [number, setNumber] = useState(1);

  function handleNextClick() {
    jsonFilter.map(img => {
      if (index === img.pictures.length -1) {
        setIndex(index = 0)
        setNumber(number = 1)
      } else {
        setIndex(index + 1)
        setNumber(number + 1)
      }
    })
  }

  function handlePreviousClick() {
    jsonFilter.map(img => {
      if (index === 0) {
        setIndex(index = img.pictures.length -1)
        setNumber(number = img.pictures.length)
      } else {
        setIndex(index - 1);
        setNumber(number - 1);
      }
    })
  }

  //*Affichage des flèches/nombres seulement si +1 images*//
  let showArrow = [];
  let showNumber = [];
    jsonFilter.map(img => {
      if (img.pictures.length > 1) {
        showArrow = (
          <div className='arrowDiv'>
            <div onClick={handlePreviousClick} className='arrowLeft'>
              <i className="fa-solid fa-chevron-left" alt="flèche gauche"></i>
            </div>
            <div onClick={handleNextClick} className='arrowRight'>
              <i className="fa-solid fa-chevron-right" alt="flèche droite"></i>
            </div>
          </div>
        )
        showNumber = (
          <div className='arrayNumber'>
            <p>{number}/{img.pictures.length}</p>
          </div>
        )
      } else {
        showArrow = (
          <div></div>
        )
        showNumber = (
          <div></div>
        )
      }
    })

  const showPicturesSection = jsonFilter.map(img => (
    <div key={img.id} className='carrouselDiv'>
        { showArrow }
      <img
        src={img.pictures[index]}
        alt="Image de logement"
      />
      { showNumber }
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
      <div className='info_tag-rate-div'>
        <div className='info-tag'>
          {info.tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
        <Rate score={info.rating}/>
      </div>
      <div className='Logements_collapse-Div'>
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
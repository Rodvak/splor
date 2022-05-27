import React from 'react'
import Do from '../Assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg'
import Dt from '../Assets/chad-montano-eeqbbemH9-c-unsplash.jpg'
import Dth from '../Assets/heather-ford-Ug7kk0kThLk-unsplash.jpg'
import Df from '../Assets/lily-banse--YHSwy6uqvk-unsplash.jpg'
import Dfi from '../Assets/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg'

import './DestinationsStyles.css'

const Destinations = () => {
  return (
    <div className='destinations'>
        <div className='container'>
            <h1>Thousands of recipes available in just one click</h1>
            <div className="img-container">
                <img  className='span-3 image-grid-row-2' src={Do} alt="/" />
                <img src={Dt} alt="/" />
                <img src={Dth} alt="/" />
                <img src={Df} alt="/" />
                <img src={Dfi} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Destinations
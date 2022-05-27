import React from 'react'
import {FiSearch} from 'react-icons/fi'
import './HeroStyles.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="content">
            <h1 style={{marginBottom: '1rem'}}>What are you in the mood for?</h1>
            <form action='' className="form">
                <div>
                    <input type="text" />
                </div>
                <div>
                    <button><FiSearch className='icon' /></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero
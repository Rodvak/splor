import React, {useState} from 'react'
// import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImCancelCircle} from 'react-icons/im'
import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

  return (
    <div className={nav ? 'navbar navbar-bg': 'navbar'}>
        <div className="logo">
            <h2>PROVECHO</h2>
        </div>
        <ul className="nav-menu">
            {/* <li>Home</li>
            <li>Restaurants</li> */}
        </ul>
        <div className="nav-icons">
            {/* <BiSearch className='icon' style={{marginRight: '1rem'}}/> */}
            <BsPerson className='icon'/>
        </div>
        <div className="hamburger" onClick={handleNav}>
            {!nav? (<GiHamburgerMenu className='icon' />) : (<ImCancelCircle className='icon' />) }
        </div>

        <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
            <ul className="mobile-nav">
            <li>Home</li>
            <li>Restaurants</li>
            </ul>
            <div className="mobile-menu-bottom">
                <div className="menu-icons">
                    {/* <button>Submit</button> */}
                    <button>Account</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar

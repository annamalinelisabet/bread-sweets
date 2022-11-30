import React from 'react'
import './Navbar.css'
import { FaBars } from 'react-icons/fa'
import Logo from '../../Images/logo.png'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="container nav-content-wrapper">
            <div className='right-nav-div'>
                <FaBars className='bars'/>
                <img src={Logo} alt="Bread & Sweets Logo" />
            </div>
            <div className="left-nav-div">
                <p className='open-hours'>Öppet idag: 8.00 - 18.00</p>
                <button className='btn btn-order'>Beställ online</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
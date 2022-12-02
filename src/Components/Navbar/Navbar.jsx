import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
import { FaBars } from 'react-icons/fa'
import Logo from '../../Images/logo.png'
import { CgClose } from 'react-icons/cg'
import 'animate.css'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)
  
  const handleClick = () => {
    if(showMenu) {
      setShowMenu(false)
    }
  }

  return (
      <div className='fixed'>
        <div className='Navbar' onClick={handleClick}>
            <div className="container nav-content-wrapper">
                <div className='right-nav-div'>
                    { showMenu 
                      ? <CgClose className='close' onClick={() => setShowMenu(false)}/> 
                      : <FaBars className='bars' onClick={() => setShowMenu(true)}/>
                    }                  
                      <Link to='/'><img src={Logo} alt="Bread & Sweets Logo" className={ showMenu ? 'menu-margin' : ''} /></Link>
                </div>
                <div className={`left-nav-div ${showMenu ? `menu-hours` : ``}`}>
                    <p className='open-hours'>Öppet idag: 8.00 - 18.00</p>
                    <Link to ='/order'><button className='btn btn-order'>Beställ online</button></Link>
                </div>                           
            </div>
        </div>

        {/*------- NAVIGATION MENU ----------*/}
        { showMenu &&
          <div className='NavMenu frame' onClick={() => setShowMenu(false)}>
            <div className="menu-container animate__animated animate__fadeInDown">
              <ul className='nav-links' >
                <li><NavLink to='/' className='link'>Hem</NavLink></li>
                <li><NavLink to='/sortiment' className='link'>sortiment</NavLink></li>
                <li><NavLink to='/order' className='link'>beställ online</NavLink></li>
                <li><NavLink to='/reviews' className='link'>recensioner</NavLink></li>
                <li><NavLink to='/contact' className='link'>kontakta oss</NavLink></li>
              </ul>
            </div>
          </div>        
        }
      </div>

  )
}

export default Navbar
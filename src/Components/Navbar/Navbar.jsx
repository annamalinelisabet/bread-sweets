import { useState, useRef, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../../Images/logo.png'
import 'animate.css'

const Navbar = () => {

  const logoRef = useRef()
  const navRef = useRef()
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    if(showMenu) {
      setShowMenu(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 150) {
        logoRef.current.classList.add('small-logo')
        navRef.current.classList.add('shadow')
      } else {
        logoRef.current.classList.remove('small-logo')
        navRef.current.classList.remove('shadow')
      }
    });   
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 5) {
        setShowMenu(false)
      } 
    });   
  }, [])
  
  return (
      <div className='fixed'>
        <div ref={navRef} className='Navbar' onClick={handleClick}>
            <div className="container nav-content-wrapper">
                <div className='right-nav-div'>
                      <div className={`burger ${showMenu ? `open` : ``}`}onClick={() => setShowMenu(state => !state)}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <Link to='/'><img src={Logo} alt="Bread & Sweets Logo" ref={logoRef} className={ showMenu ? 'menu-margin' : ''} /></Link>
                </div>
                <div className={`left-nav-div ${showMenu ? `menu-hours` : ``}`}>
                    <p className='open-hours'>Öppet idag: 8.00 - 18.00</p>
                    <a href="https://order.thelocoapp.com/restaurants/2lUtPS0dfQ?menuType=TakeAway" target="_blank" rel="noopener noreferrer"><button className='btn btn-order'>Beställ online</button></a>
                </div>                           
            </div>
        </div>

        {/*------- NAVIGATION MENU ----------*/}
        {
          showMenu &&
          <div className='NavMenu frame' onClick={() => setShowMenu(false)}>
            <div className="menu-container">
              <ul className='nav-links animate__animated animate__fadeInDown'>
                <li><NavLink to='/' className='link'><p>Hem</p></NavLink></li>
                <li><NavLink to='/assortment' className='link'><p>sortiment</p></NavLink></li>
                <li><NavLink to='/order' className='link'><p>beställ</p></NavLink></li>
                <li><NavLink to='/reviews' className='link'><p>Recension</p></NavLink></li>
                <li><NavLink to='/contact' className='link'><p>kontakt</p></NavLink></li>
              </ul>
            </div>
          </div>        
        }
      </div>

  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../../Images/logo.png'
import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='img-wrapper'>
        <img src={logo} alt="" />
      </div>

      <div className='container'>

        <div className='link-wrapper'>
          <div className='dflex nav-wrap'>

            <div className='nav-link'>
              <Link to="/assortment">
                <h4>Sortiment</h4>
              </Link>
            </div>

              <div className='vertical'></div>

            <div className='nav-link'>
              <Link to="/order">
                <h4>Beställ</h4>
              </Link>
            </div>

              <div className='vertical'></div>
            
              <div className='nav-link'>
                <Link to="/reviews">
                  <h4>Omdöme</h4>
                </Link>
              </div>

            <div className='vertical hide'></div>

              <div className='nav-link hide'>
                <Link to="/about">
                  <h4>Jennie</h4>
                </Link>
              </div>

          </div>
        </div>

          <div className='info-wrapper'>
            <div className='dflex wrap'>

              <div className='link contact'>
                <h3 className='link-title'>Kontakt</h3>
                <p>021 - 800122</p>
                <p className='email-txt'>info@breadandsweets.se</p>
                <AiOutlineMail className='email' />
              </div>


              <div className='link open-hours'>
                  <div className='dflex time'>
                    <div className='vertical-lg left hide'></div>
                    <h3 className='link-title'>Öppettider</h3>
                      <div>
                        <p className='open-title hide'>Tisdagar - fredag</p>
                        <p className='open-title show'>Tis - fre</p>
                        <p>08:00 - 18:00</p>
                      </div>
                    </div>

                    <div className='dflex time'>
                      <p className='open-title'>Helg</p>
                      <p>08:00 - 16:00</p>
                    </div>
                  <div className='vertical-lg right hide'></div>
              </div>

              <div className='link find'>
                <h3 className='link-title'>Hitta hit</h3>
                <p className='hide'>Bread & sweets by Jennie</p>
                <p>Öster Mälarstrands Allé 18</p>
                <p>723 57 Västerås</p>
              </div>



            </div>
          </div>

        <div className='social-links'>
          <AiOutlineInstagram className='icon'/>
          <FaFacebookSquare className='icon fb'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
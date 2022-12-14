import './Online.css'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaCoffee } from 'react-icons/fa'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Online = () => {
    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div className='Online'>
        <div className='wrapper container' data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
            <div className='cup-wrappper'>
                <div className='dflex'>
                    <div className='line line1'></div>
                    <div className='line line2'></div>
                    <div className='line line3'></div>
                </div>
                <FaCoffee className='cup' />
            </div>
            <h1>Din tur att bjuda kollegorna på fika?</h1>
            <p>Beställ bullar, bakelser eller något annat gott direkt via din telefon eller dator.</p>
            <Link to='/order'>
                <button className='btn btn-online animate__animated animate__pulse'>Beställ online</button>
            </Link>
        </div>
    </div>
  )
}

export default Online
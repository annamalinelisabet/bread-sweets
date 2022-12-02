import './Online.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { FiCoffee } from 'react-icons/fi'
import { FaCoffee } from 'react-icons/fa'
import 'animate.css';


const Online = () => {
  return (
    <div className='Online'>
        <div className='wrapper container'>
            <div className='cup-wrappper'>
                <div className='dflex'>
                    <div className='line line1'></div>
                    <div className='line line2'></div>
                    <div className='line line3'></div>
                </div>
                <FaCoffee className='cup' />
            </div>
            <h1>Din tur att bjuda kollegorna på fika?</h1>
            <p>Beställ bullar, bakelser eller något annt gott direkt via din telefon eller dator.</p>
            <Link>
                <button className='btn btn-online animate__animated animate__pulse'>Beställ online</button>
            </Link>
        </div>
    </div>
  )
}

export default Online
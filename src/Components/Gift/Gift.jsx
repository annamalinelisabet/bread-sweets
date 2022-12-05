import React from 'react'
import { Link } from 'react-router-dom'
import './Gift.css'
import pralines from '../../Images/pralines.jpeg'

const Gift = () => {
  return (
    <div className='Gift'>
        <div className='wrapper container'>
            <div className='text-wrapper container'>
                <h1>Uppskattad present</h1>
                <div className='small-wrapper'>
                    <p>Beställ våra omtyckta praliner i presentförpackning. Kan köpas i förpackningar om 6, 12 eller 18 st.</p>
                </div>
                <Link to="/" className='link-wrapper'>
                    <h3 className='link'>Se vårt pralinutbud</h3>
                </Link>
            </div>
            <Link to="/">
                <div className='img-wrapper'>
                    <img src={pralines} alt="pralines" className='img'/>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Gift
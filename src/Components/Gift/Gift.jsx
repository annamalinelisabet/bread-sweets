import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Gift.css'
import pralines from '../../Images/pralines.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gift = () => {
    useEffect(() => {
        AOS.init();
    }, [])


  return (
    <div className='Gift'>
        <div className='wrapper container'>
            <div className='text-wrapper container' data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                <h1>Uppskattad present</h1>
                <div className='small-wrapper'>
                    <p>Beställ våra omtyckta praliner i presentförpackning. Kan köpas i förpackningar om 6, 12 eller 18 st.</p>
                </div>
                <Link to="/assortment" className='link-wrapper'>
                    <h3 className='link'>Se vårt pralinutbud</h3>
                </Link>
            </div>
            <Link to="/assortment">
                <div className='img-wrapper'  data-aos="fade-left" data-aos-duration="2000"  data-aos-once="true">
                    <img src={pralines} alt="pralines" className='img'/>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Gift
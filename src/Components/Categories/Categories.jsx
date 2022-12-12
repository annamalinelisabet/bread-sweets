import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'
import { CiWheat } from 'react-icons/ci'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Categories = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    
  return (
    <div className='Categories container'>
        <div className='wheats' data-aos="fade-up" data-aos-duration="1000"  data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-sine" data-aos-once="true">
            <CiWheat className='wheat'/>
            <CiWheat className='wheat hideAndShow'/>
            <CiWheat className='wheat hideAndShow'/>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className='categories-wrapper'>
                <Link to="/assortment" state={{ from: 'cakesRef'}}>
                    <div className='category cake'>
                            <div className='main-btn dflex center'>
                                <h2>Tårtor</h2>
                            </div>
                    </div>
                </Link>
                <Link to="/assortment" state={{ from: 'breadRef'}}>
                    <div className='category bread'>
                            <div className='main-btn dflex center'>
                                <h2>Bröd</h2>
                            </div>
                    </div>
                </Link>
                <Link to="/assortment" state={{ from: 'bunsRef'}}>
                    <div className='category pastry'>
                            <div className='main-btn dflex center'>
                                <h2>Kaffebröd</h2>
                            </div>
                    </div>
                </Link>

            </div>
                <Link to="/assortment" className='sortiment-link' >
                    <div className='dflex center text-wrapper'>
                            <h3>Se hela vårt sortiment</h3>
                    </div>
                </Link>

        </div>

    </div>
  )
}

export default Categories
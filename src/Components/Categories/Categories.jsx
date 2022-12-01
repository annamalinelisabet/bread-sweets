import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'
import { CiWheat } from 'react-icons/ci'
import { BsArrowRight } from 'react-icons/bs'
import 'animate.css';

const Categories = () => {
  return (
    <div className='Categories container'>
        <div className='wheats animate__animated animate__fadeIn'>
            <CiWheat className='wheat'/>
            <CiWheat className='wheat hideAndShow'/>
            <CiWheat className='wheat hideAndShow'/>
        </div>

        <div className='categories-wrapper'>
            <Link to="/">
                <div className='category cake'>
                        <div className='main-btn dflex center'>
                            <h2>Tårtor</h2>
                        </div>
                </div>
            </Link>
            <Link to="/">
                <div className='category bread'>
                        <div className='main-btn dflex center'>
                            <h2>Bröd</h2>
                        </div>
                </div>
            </Link>
            <Link to="/">
                <div className='category pastry'>
                        <div className='main-btn dflex center'>
                            <h2>Kaffebröd</h2>
                        </div>
                </div>
            </Link>
        </div>
            <Link to="/" className='sortiment-link'>
                <div className='dflex center text-wrapper'>
                        <h3>Till hela vårt sortiment</h3>
                        <BsArrowRight className='arrow' />
                </div>
            </Link>
    </div>
  )
}

export default Categories
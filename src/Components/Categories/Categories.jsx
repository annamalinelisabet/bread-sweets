import React from 'react'
import './Categories.css'
import { CiWheat } from 'react-icons/ci'
import { BsArrowRight } from 'react-icons/bs'
import 'animate.css';

const Categories = () => {
  return (
    <div className='Categories'>
        <div className='wheats animate__animated animate__fadeIn'>
            <CiWheat className='wheat'/>
            <CiWheat className='wheat hideAndShow'/>
            <CiWheat className='wheat hideAndShow'/>
        </div>

        <div className='categories-wrapper'>
            <div className='category cake'>
                <button className='btn btn-category'>Tårtor</button>
            </div>
            <div className='category pastry'>
                <button className='btn btn-category'>Kaffebröd</button>
            </div>
            <div className='category bread'>
                <button className='btn btn-category'>Bröd</button>
            </div>
            <div className='dflex'>
                <h3>Till hela vårt sortiment</h3>
                <BsArrowRight className='arrow' />
            </div>
        </div>
    </div>
  )
}

export default Categories
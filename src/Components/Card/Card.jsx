import React from 'react'
import './Card.css'
import { AiFillStar } from 'react-icons/ai'
import { RxCookie } from 'react-icons/rx'
import { FaCookieBite } from 'react-icons/fa'

const Card = () => {
  return (
    <div className='Card'>

        <div className='review'>
          <div className='stars'>
            {/* <AiFillStar className='star'/>
            <AiFillStar className='star'/>
            <AiFillStar className='star'/>
            <AiFillStar className='star'/>
            <AiFillStar className='star'/> */}
            <FaCookieBite className='star'/>
            <FaCookieBite className='star'/>
            <FaCookieBite className='star'/>
            <FaCookieBite className='star'/>
            <FaCookieBite className='star'/>
          </div>
            <p>2022-11-20 av Nathalie Paulsson</p>
            <p>Superfin och såväl god tårta!</p>
        </div>

    </div>
  )
}

export default Card
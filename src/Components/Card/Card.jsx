import React from 'react'
import './Card.css'

const Card = ({ title, price, desc, img }) => {
  return (
    <div className='Card'>
        <div className="img-wrapper">
          <img src={img} alt="Pralin espresso" />
        </div>
        <div className="text-div">
          <div className="top-text">
            <h3 className='title'>{title}</h3>
            <p className='price'>{price} kr</p>
          </div>
          <p className='desc'>{desc}</p>
        </div>
    </div>
  )
}

export default Card
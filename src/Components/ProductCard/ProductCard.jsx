import React from 'react'
import './ProductCard.css'

const ProductCard = ({ title, price, desc, img }) => {
  return (
    <div className='ProductCard'>
        <div className="img-wrapper">
          <img src={img} alt="Pralin espresso" />
        </div>
        <div className="text-div">
          <div className="top-text">
            <h3 className='title'>{title}</h3>
            <p className='desc'>{desc}</p>
          </div>
          <p className='price'>{price} kr</p>
        </div>
    </div>
  )
}

export default ProductCard
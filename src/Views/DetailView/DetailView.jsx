import './DetailView.css'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { ImSpoonKnife } from 'react-icons/im'
// import buns from '../../Images/buns.png'
import ContentCard from '../../Components/ContentCard/ContentCard'
import AllergenCard from '../../Components/AllergenCard/AllergenCard'
import { useParams, useLocation } from 'react-router-dom'
// import products from '../../products.json'

const DetailView = () => {
  const [showAll, setShowAll] = useState(false);

//   const { id } = useParams()
  const location = useLocation()
  const { product } = location.state

//   const [product, setProduct] = useState('')

//   console.log(products)
//   useEffect(() => {
//     setProduct(products.filter(item => item.id === id))
//     console.log(product)
    
// }, [products])

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'instant'});
    }, [])

  return (
    <div className='DetailView frame'>
        <div className='pt-max container pb'>
            <Link to="/assortment">
                <div className='icon-wrap'>
                    <FaArrowLeft className='icon '/>
                </div>
            </Link>
            {
                product &&
                <div className='wrapper'>

                <div className='img-wrapper'>
                    {/* <img src={buns} alt="" /> */}
                    { product.img ? <img src={product.img} alt="food"/> : <ImSpoonKnife className='spork'/> }
                </div>

                <div className='text-wrapper'>

                    <div className='tag'>
                        <p className='tag-txt'>POPULÄR</p>
                    </div>

                    <h1>{product.title}</h1>
                    <p className='pbl-2'>{product.desc}</p>

                    <div className='dflex mt-5 wrap'>
                        <div className='price-wrap'>
                            <p>Från</p>
                            <p className='ml price'>{product.price} kr</p>
                        </div>
                            <button className='btn btn-add'>Lägg till</button>
                    </div>
                </div>

            </div>
            }
                <div className='info-wrapper mt-1'>
                    <div className='btn-group'>
                        <button className={ !showAll ? 'btn-info active' : 'btn-info'} onClick={() => setShowAll(false)}>Innehåll</button>
                        <button className={ !showAll ? 'btn-info' : 'btn-info active'} onClick={() => setShowAll(true)}>Allergener</button>
                        <div className='line'></div>
                    </div>

                    { showAll ? <AllergenCard /> : <ContentCard />}
                </div>
        </div>
    </div>
  )
}

export default DetailView
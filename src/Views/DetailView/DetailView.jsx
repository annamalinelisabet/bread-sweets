import './DetailView.css'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
// import { ImSpoonKnife } from 'react-icons/im'
import buns from '../../Images/buns.png'
import ContentCard from '../../Components/ContentCard/ContentCard'
import AllergenCard from '../../Components/AllergenCard/AllergenCard'
import { useParams } from 'react-router-dom'
import products from '../../products.json'

const DetailView = () => {
  const [showAll, setShowAll] = useState(false);

  const { id } = useParams()

  const [product, setProduct] = useState('')

  console.log(products)
  useEffect(() => {
    setProduct(products.filter(item => item.id === id))
    console.log(product)
    
}, [products])

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
                    <img src={buns} alt="" />
                    {/* <ImSpoonKnife className='spork' /> */}
                    {/* { img ? <img src={buns} alt="food"/> : <ImSpoonKnife className='spork'/> } */}
                </div>

                <div className='text-wrapper'>

                    <div className='tag'>
                        <p className='tag-txt'>POPULÄR</p>
                    </div>

                    <h1>Title</h1>
                    <p className='pbl-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illum vero voluptates, quo tempore magnam amet velit omnis voluptatum ut repellendus iure excepturi numquam aspernatur ipsam deserunt cum accusamus nulla.</p>

                    <div className='dflex mt-5 wrap'>
                        <div className='price-wrap'>
                            <p>Från</p>
                            <p className='ml price'>100 :-</p>
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
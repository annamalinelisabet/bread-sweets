import './DetailView.css'
import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { ImSpoonKnife } from 'react-icons/im'
import ContentCard from '../../Components/ContentCard/ContentCard'
import AllergenCard from '../../Components/AllergenCard/AllergenCard'

const DetailView = () => {
  const [showAll, setShowAll] = useState(false);

  const location = useLocation()
  const { product } = location.state

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'instant'});
    }, [])

    const navigate = useNavigate()

  return (
    <div className='DetailView frame'>
        <div className='pt-max container pb'>
                <div className='icon-wrap' onClick={() => navigate(-1)}>
                    <FaArrowLeft className='icon '/>
                </div>
            {
                product &&
                <div className='wrapper'>

                <div className='img-wrapper'>
                    { product.img ? <img src={product.img} alt="food"/> : <ImSpoonKnife className='spork'/> }
                </div>
                

                <div className='text-wrapper'>

                    <div className='tag'>
                        { product.tag === "popular" && <div className='tag-txt popular'><p>POPULÄR</p></div>}
                        { product.tag === "new" && <div className='tag-txt new'><p>NYHET</p></div>}
                    </div>

                    <h1>{product.title}</h1>
                    <p className='pbl-2'>{product.desc}</p>

                    <div className='dflex mt-5 wrap'>
                        <div className='price-wrap'>
                            <p className='ml price'>{product.price} kr</p>
                        </div>
                            <button className={`btn btn-add ${product.saldo === 'out' ? `out` : ``}` }>{product.saldo === 'out' ? ' tillfälligt slut' : 'lägg till'}</button>
                    </div>
                    {
                        product.info &&
                        <p className='product-info'>{product.info}</p>
                    }
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
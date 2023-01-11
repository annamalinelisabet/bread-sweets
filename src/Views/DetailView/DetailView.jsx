import './DetailView.css'
import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { ImSpoonKnife } from 'react-icons/im'
import ContentCard from '../../Components/ContentCard/ContentCard'
import AllergenCard from '../../Components/AllergenCard/AllergenCard'
import Modal14 from '../../Components/Modal14/Modal14'

const DetailView = () => {
  const [showAll, setShowAll] = useState(false);
  const [price, setPrice] = useState('')

  const [modal14, setModal14] = useState(false)
  const [modal33, setModal33] = useState(false)

  const location = useLocation()
  const { product } = location.state

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'instant'});
    }, [])

    const navigate = useNavigate()

    useEffect(() => {
        if(!product.price) {
            setPrice(product.priceM)
        } else {
            setPrice(product.price)
        }
    })

    const onChange = e => {
        setPrice(e.target.value)
    }

    const handleClick = (id) => {
        if(id === 14){
            setModal14(true)
        }
        if(id === 33){
            setModal33(true)
        }
        if(typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    }

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

                    <div className='flex-grow'>
                        <div className='tag'>
                            { product.tag === "popular" && <div className='tag-txt popular'><p>POPULÄR</p></div>}
                            { product.tag === "new" && <div className='tag-txt new'><p>NYHET</p></div>}
                        </div>

                        <h1>{product.title}</h1>
                        <p className='pbl-2'>{product.desc}</p>

                    </div>
                    { !product.price && 
                        <div className='radio'>
                            <div className='input-div'>
                                <input type="radio" name='price' value={product.priceS} checked={price === product.priceS} onChange={onChange}/>
                                <label htmlFor="price">{product.S} / {product.priceS} kr</label>
                            </div>
                            <div className='input-div'>
                                <input type="radio" name='price' value={product.priceM} checked={price === product.priceM}  onChange={onChange}/>
                                <label htmlFor="price">{product.M} / {product.priceM} kr</label>
                            </div>
                            <div className='input-div'>
                                <input type="radio" name='price' value={product.priceL} checked={price === product.priceL}  onChange={onChange}/>
                                <label htmlFor="price">{product.L} / {product.priceL} kr</label>
                            </div>
                        </div>
                    }
                    <div className='dflex mt-5 wrap'>
                        <div className='price-wrap'>
                            {/* <p className='ml price'>{product.price} kr</p> */}
                        </div>
                            <button onClick={() => handleClick(product.id)} className={`btn btn-add ${product.saldo === 'out' ? `out` : ``}` }>{product.saldo === 'out' ? ' tillfälligt slut |' : 'handla |'} {price} kr</button>
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
        {/* { modal33 && <Modal33 setModal33={setModal33} />} */}
        { modal14 && <Modal14 setModal14={setModal14} />}
    </div>
  )
}

export default DetailView
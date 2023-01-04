import React from 'react'
import { Link } from 'react-router-dom'
import './NewProductCard.css'
// import { RiShoppingBasket2Line } from 'react-icons/ri'
import { BsBagPlus, BsBagPlusFill } from 'react-icons/bs'
import { ImSpoonKnife } from 'react-icons/im'
import { TbMug } from 'react-icons/tb'

const NewProductCard = ({product}) => {

  return (
    <>
        { product.text ? 
            <div className={`NewProductCard p0`}>
                  <div className='img__wrapper'>
                    <img src={product.img_} alt="giftcard" className='img_' />
                    <div className='wrap__'>
                      <h3 className='text_'>{product.text}</h3>
                      <button className='btn btn_gift_card'>Köp här</button>
                    </div>
                  </div>
            </div>
          :

          <Link to={`/detailview/${product.id}`} state={{product: product}}>
            <div className={`NewProductCard ${product.tag === 'popular' ? 'highLight' : ''}`}>
                { product.tag === "popular" && <div className='tag popular'><p>POPULÄR</p></div>}
                { product.tag === "new" && <div className='tag new'><p>NYHET</p></div>}
              <div className="top-div">
                <div className="left-div">
                  <div className='img-div'>                
                    { product.img && <img src={product.img} alt="food"/>}
                    { !product.img && product.category === 8 && <TbMug className='spork' />}
                    { product.category !== 8 && !product.img && <ImSpoonKnife className='spork'/>}
                  </div>
                  { product.saldo === 'low' && <div className="saldo low"><p>Nästan slutsåld</p></div> }
                  { product.saldo === 'out' && <div className="saldo out"><p>Tillfälligt slut</p></div> }
                </div>
                <div className="text-div">
                    <h3 className='title'>{product.title}</h3>
                    { product.price ? <p className='price'>{product.price} kr</p> : <p className='price'>Från {product.priceS} kr</p>}
                </div>
              </div>
                  <div className={`circle ${product.saldo === 'out' ? `out` : ``}` }><BsBagPlusFill className='bag'/></div>
              </div>
          </Link>
        }
    </>
  )
}

export default NewProductCard
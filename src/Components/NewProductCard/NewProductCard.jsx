import React from 'react'
import { Link } from 'react-router-dom'
import './NewProductCard.css'
import {RiShoppingBasket2Line} from 'react-icons/ri'
import {ImSpoonKnife} from 'react-icons/im'

const NewProductCard = ({product}) => {

  return (
      <Link to={'/detailview/' + product.id}>
        <div className='NewProductCard'>
            { product.tag === "popular" && <div className='tag popular'><p>POPULÄR</p></div>}
            { product.tag === "new" && <div className='tag new'><p>NYHET</p></div>}
          <div className="top-div">
            <div className='img-div'>                
              { product.img ? <img src={product.img} alt="food"/> : <ImSpoonKnife className='spork'/> }
            </div>
            <div className="text-div">
                <h3 className='title'>{product.title}</h3>
                <p className='price'>{product.price} kr</p>
            </div>
          </div>
              { product.saldo === 'low' && <div className="saldo low"><p>Nästan slutsåld</p></div> }
              { product.saldo === 'out' && <div className="saldo out"><p>Tillfälligt slut</p></div> }
              <div className={`circle ${product.saldo === 'out' ? `out` : ``}` }><RiShoppingBasket2Line className='bag'/></div>
          </div>
      </Link>
  )
}

export default NewProductCard
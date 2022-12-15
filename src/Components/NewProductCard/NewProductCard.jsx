import React from 'react'
import './NewProductCard.css'
import {RiShoppingBasket2Line} from 'react-icons/ri'
import {ImSpoonKnife} from 'react-icons/im'

const NewProductCard = ({title, saldo, news, popular, price, img}) => {

  

  return (
    <div className='NewProductCard'>
        { popular && <div className='tag popular'><p>POPULÄR</p></div>}
        { news && <div className='tag new'><p>NYHET</p></div>}
        <div className="top-div">
            <div className='img-div'>                
              { img ? <img src={img} alt="food" /> : <ImSpoonKnife className='spork'/> }
            </div>
            <div className="text-div">
                <h3 className='title'>{title}</h3>
                <p className='price'>{price} kr</p>
            </div>
        </div>
        { saldo === 'low' && <div className="saldo low"><p>Nästan slutsåld</p></div> }
        { saldo === 'out' && <div className="saldo out"><p>Tillfälligt slut</p></div> }
        <div className={`circle ${saldo === 'out' ? `out` : ``}`}><RiShoppingBasket2Line className='bag'/></div>
    </div>
  )
}

export default NewProductCard
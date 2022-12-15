import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './OrderView.css'
import App from '../../Images/appflyer.png'
import Google from '../../Images/badge-app-store.svg'
import AppStore from '../../Images/badge-google-play.svg'

const OrderView = () => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'}); 
  }, [])

  return (
    <div className='OrderView frame'>

        <h1 className='top-header'>beställ online</h1>
          <div className="text-div">
            <p className='info'>Här kan du smidigt beställa direkt från vår meny. Betalt och klart när du kommer till butiken!</p>
            <a href="https://order.thelocoapp.com/restaurants/2lUtPS0dfQ?menuType=TakeAway" target="_blank" rel="noopener noreferrer"><button className='btn btn-online'>öppna beställningsvy i nytt fönster</button></a>
            <p className='p'> Vid större beställningar kan vi även leverera inom Västerås utan extra kostnad.</p>
            <p className='small'>Har du en bokningsförfrågan eller andra funderingar, <Link to='/contact'><span className='link'>hör av dig.</span></Link></p>
          </div>
          <div className="line"></div>
          <div className='app'> 
            <img className='app-img' src={App} alt="" />
            <div className="download">
              <h2 className='download-header'>LADDA HEM IDAG</h2>
              <p className='info'>Beställ enkelt våra aktuella produkter direkt från vår app.</p>
              <p className='p'>Observera att bröd och bakelser kan variera beroende på helg och vardagar.</p>
              <div className="banner-div">
                <div className='img-div'>
                  <img src={Google} alt="" />
                </div>
                <div className="img-div">
                  <img src={AppStore} alt="" />
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default OrderView
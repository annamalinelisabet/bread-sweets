import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './OrderView.css'
import Photo from '../../Images/order-buns.jpg'

const OrderView = () => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'}); 
  }, [])

  return (
    <div className='OrderView frame'>
        <div className="img-div">
          <img src={Photo} alt="Cinnamon buns" />
          <div className="img-text">
            <h1>BESTÄLL ONLINE</h1>
          </div>
        </div>
        <div className="text-div container">
          <p>Här kan du beställa direkt från vår meny. Betala enkelt via swish eller kort.</p>
          <p className='p'> Vid större beställningar kan vi leverera inom Västerås utan extra kostnad.</p>
          <button className='btn btn-online'>öppna beställningsvy i nytt fönster</button>
        </div>
        <p className='small container'>Har du en beställningsförfrågan eller andra funderingar, <Link to='/contact'><span className='link'>hör av dig.</span></Link></p>
    </div>
  )
}

export default OrderView
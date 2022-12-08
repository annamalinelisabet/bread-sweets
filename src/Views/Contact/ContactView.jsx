import { useEffect } from 'react'
import './ContactView.css'
import Photo from '../../Images/hero-img.jpg'

const ContactView = () => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'}); 
  }, [])

  return (
    <div className='ContactView frame'>
        <div className="img-div">
            <img src={Photo} alt="Cinnamon buns" />
            <div className="img-text">
              <h1>KONTAKT</h1>
            </div>
        </div>
        <div className="text-div">
            <p>Här ska det vara ett kontaktformulär</p>
            <p>och kanske övriga kontaktuppgifter???</p>
        </div>
    </div>
  )
}

export default ContactView
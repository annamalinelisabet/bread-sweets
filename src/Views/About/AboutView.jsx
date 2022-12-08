import { useEffect } from 'react'
import './AboutView.css'
import Photo from '../../Images/jennie.jpeg'

const AboutView = () => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'}); 
  }, [])

  return (
    <div className='AboutView frame'>
        <div className="img-div">
          <img src={Photo} alt="Cinnamon buns" />
          <div className="img-text">
            <h1>JENNIE</h1>
          </div>
        </div>
        <div className="text-div">
          <p>Här ska det stå saker om jennie</p>
        </div>
    </div>
  )
}

export default AboutView
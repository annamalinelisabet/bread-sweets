import { useEffect } from 'react'
import './AboutView.css'
import Photo from '../../Images/jennie-stor.jpg'
import Jennie from '../../Images/jenniecolor.jpg'

const AboutView = () => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'}); 
  }, [])

  return (
    <div className='AboutView frame'>
        <div className="img-div">
          <img src={Jennie} alt="Jennie with cake" />
        </div>

        <div className="text-div">
          <div className='container'>
            <p><span className='title'>Jennie Elmerfors</span> blev 2007 Årets Konditor som första kvinna någonsin.</p>
            <p className='mt1'> Hon har genom åren gått en mängd kurser i bland annat bröd, choklad, desserter, glass och tårtor - både i Sverige och utomlands. Även haft i egna kurser i konditori.</p>
            <p className='mt1'>Inte så mycket eget tävlande längre då hon numer sitter i juryn för Årets Konditor och har även varit med i juryn för Glass SM och pralintävlingar.</p>
          </div>
        </div>

        <div className='dflex'>

        <div className='img-container'>
          <img src={Photo} alt="Jennie" />
            <div className='fact'>
              <h4 className='fact-title'>Rolig fakta om Jennie</h4>
              <p>- Första pris i Skol SM 1996</p>
              <p>- Gesällbrev 1997</p>
              <p>- Första pris Årets Konditor 2007</p>
              <p>- Var med och tog fram Nobeldesserten 2009Första pris i Skol SM 1996</p>
              <p>- Daniel & Victorias bröllopstårta 2010</p>
              <p>- Chefskonditor Gateau Stockholm 2003-2020</p>
              <p>- Häägen Dazs glass-akademi 2013-2019</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutView
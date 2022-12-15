import React, { useEffect } from 'react'
import './AboutView.css'
import Photo from '../../Images/jennie-cake.jpg'
import Jennie from '../../Images/jenniecolor.jpg'
import wheat from '../../Images/wheat.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutView = () => {
    useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'}); 
  }, [])

  return (
    <div className='AboutView frame'>
      <div className='wrapper container'>
        <div className='img-container'  data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine">
          <img src={Jennie} alt="Jennie" />
        </div>
        <div className="text-div" data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease-in-sine" data-aos-once="true">
          <div className='container'>
            <p><span className='title'>Jennie Elmerfors</span> blev 2007 Årets Konditor som första kvinna någonsin.</p>
            <p className='mt1'> Hon har genom åren gått en mängd kurser i bland annat bröd, choklad, desserter, glass och tårtor - både i Sverige och utomlands. Även haft i egna kurser i konditori.</p>
            <p className='mt1'>Inte så mycket eget tävlande längre då hon numer sitter i juryn för Årets Konditor och har även varit med i juryn för Glass SM och pralintävlingar.</p>
          </div>
        </div>
      </div>

        <div className='dflex container'>

            <div className='fact' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" data-aos-once="true">
              
              <h4 className='fact-title'>Rolig fakta om Jennie</h4>
              <div>
                <p>- Första pris i Skol SM 1996</p>
                <p>- Gesällbrev 1997</p>
                <p>- Första pris Årets Konditor 2007</p>
                <p>- Var med och tog fram Nobeldesserten 2009</p>
                <p>- Daniel & Victorias bröllopstårta 2010</p>
                <p>- Chefskonditor Gateau Stockholm 2003-2020</p>
                <p>- Häägen Dazs glass-akademi 2013-2019</p>
              </div>
              <div className='wheat-wrap'>
                <img src={wheat} alt="wheat" className='wheat' />
              </div>
            </div>

            <div className='img-wrap' data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-sine" data-aos-once="true">
              <img src={Photo} alt="Jennie with friends" className='img'/>
            </div>
        </div>
    </div>
  )
}

export default AboutView
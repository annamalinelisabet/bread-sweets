import React, {useEffect} from 'react'
import Card from '../../Components/Card/Card'
import heart from '../../Images/flour-heart.jpg'
import './ReviewsView.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const ReviewsView = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='Reviews frame'>
        <div className='img-div'>
          <img src={heart} alt="heart in flour" />
        </div>
        <div className='dflex'>
          <h3 className='title'>Dela gärna din upplevelse</h3>
          <button className='btn btn-review'>Skriv recension</button>
        </div>
      <div className='container'>

        <div className='card-wrapper' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </div>
      </div>
    </div>
  )
}

export default ReviewsView
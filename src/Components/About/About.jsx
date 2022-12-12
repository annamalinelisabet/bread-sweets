import './About.css'
import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import 'animate.css';
import photo from '../../Images/pastry-making.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init();
      }, [])


  return (
    <div className='About'>
       <div className='about-wrapper'>
        <div className='bg-color'>
            <div className='text-wrapper padding' data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                <div className='mb'>
                    <h1>Om oss</h1>
                    <p className='mt mb'>Vi är ett modernt bageri och konditori med stort fokus på hantverket. Här hittar du allt från klassiskt fika till innovativa desserter och bröd.
                    <span className='mb mt dblock'>Alla våra bröd bakas med surdeg i stenugn. Degarna jäser minst ett dygn vilket gör bröden saftigare, mer smakrika och bibehåller mer näring.</span>
                    <span className='mb dblock'>Vår filosofi är att tillverka allt själva från grunden med naturliga råvaror av hög kvalité och utan tillsatser.</span>
                    Välkomna till oss på Öster Mälarstrands Allé 18!</p>
                <Link to="/about">
                    <div className='about-btn'>Läs mer om vår Jennie</div>
                </Link>
                </div>
            </div>
        </div>
            <div className='img-wrapper'>
                <img src={ photo } alt="Stand with pastries" className='img'/>
            </div>
       </div>
    </div>
  )
}

export default About
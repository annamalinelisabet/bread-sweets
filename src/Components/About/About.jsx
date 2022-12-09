import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import 'animate.css';
import girlBaking from '../../Images/girlbake.jpg'
import photo from '../../Images/pastry-making.jpg'

const About = () => {
  return (
    <div className='About'>
       <div className='about-wrapper'>
        <div className='bg-color'>
            <div className='text-wrapper container padding'>
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
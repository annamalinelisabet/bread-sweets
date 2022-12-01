import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import doug from '../../Images/doug.jpg'
import 'animate.css';

const About = () => {
  return (
    <div className='About'>
       <div className='about-wrapper'>
        <div className='bg-color'>
            <div className='text-wrapper container'>
                <div className='mb'>
                    <h1>Om oss</h1>
                    <p className='mt'>Vi är ett modernt bageri och konditori med stort fokus på hantverket. Här hittar du allt från klassiskt fika till innovativa desserter och bröd.
                    <span className='mb mt dblock'>Alla våra bröd bakas med surdeg i stenugn. Degarna jäser minst ett dygn vilket gör bröden saftigare, mer smakrika och bibehåller mer näring. Vi använder ekologiskt mjöl som kommer från Labans Kvarn på Gotland.</span>
                    <span className='mb dblock'>Vår filosofi är att tillverka allt själva från grunden med naturliga råvaror av hög kvalité och utan tillsatser.</span>
                    Välkomna till oss på Öster Mälarstrands Allé 18!</p>
                </div>
                <Link to="/">
                    <button className='about-btn'>Läs mer om vår Jennie</button>
                </Link>
            </div>
            <div></div>
        </div>
            <div className='img-wrapper'>
                <img src={doug} alt="Picture of a stand with pastries" className='img'/>
            </div>
       </div>
    </div>
  )
}

export default About
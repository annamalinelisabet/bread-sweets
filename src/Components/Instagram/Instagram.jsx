import React from 'react'
import './Instagram.css'
import booth from '../../Images/booth.png'
import macarons from '../../Images/macarons.jpg'
import chocolate from '../../Images/chocolate.png'
import praliner from '../../Images/praliner.png'
import pinkCake from '../../Images/pinkCake.png'
import buns from '../../Images/buns.png'
import { AiOutlineInstagram } from 'react-icons/ai'

const Instagram = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener, noreferrer')
    };
  return (
    <div className='Instagram'>
        <div className='wrapper'>
            <div className='card'>
                <img src={pinkCake} alt="instagram" className='img'/>
            </div>
            <div className='card hideAndShow'>
                <img src={macarons} alt="instagram" className='img'/>
            </div>
            <div className='card hideAndShow'>
                <img src={chocolate} alt="instagram" className='img'/>
            </div>
            <div className='card hideAndShow'>
                <img src={booth} alt="instagram" className='img'/>
            </div>
            <div className='card hideAndShow'>
                <img src={praliner} alt="instagram" className='img'/>
            </div>
            <div className='card hideAndShow'>
                <img src={buns} alt="instagram" className='img'/>
            </div>
            <div className='btn-instagram-wrapper'>
                    <button onClick={() => openInNewTab('https://www.instagram.com/bread.and.sweets.by.jennie/')} className='btn btn-insta'>Följ oss på Instagram för mer av det goda</button>
            </div>
        </div>

    </div>
  )
}

export default Instagram
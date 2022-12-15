import './DetailView.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { ImSpoonKnife } from 'react-icons/im'
import buns from '../../Images/buns.png'
import ContentCard from '../../Components/ContentCard/ContentCard'
import AllergenCard from '../../Components/AllergenCard/AllergenCard'
import Filter from '../../Components/Filter/Filter'

const DetailView = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className='DetailView frame'>
        <Filter />
        <div className='pt-max container pb'>

            <Link>
                <div className='icon-wrap'>
                    <FaArrowLeft className='icon '/>
                </div>
            </Link>
            <div className='wrapper'>

                <div className='img-wrapper'>
                    <img src={buns} alt="" />
                    {/* <ImSpoonKnife className='spork' />  */}
                </div>

                <div className='text-wrapper'>

                    <div className='tag'>
                        <p className='tag-txt'>POPULÄR</p>
                    </div>

                    <h1>Title Title Title Title Title Title Title Title</h1>
                    <p className='pbl-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate corrupti labore reiciendis enim temporibus cupiditate tempore accusamus consequatur, nulla eligendi provident amet dignissimos totam, dolore repudiandae! Quidem, deserunt saepe.</p>

                    <div className='dflex mt-5 wrap'>
                        <div className='price-wrap'>
                            <p>Från</p>
                            <p className='ml price'>59 :-</p>
                        </div>
                            <button className='btn btn-add'>Lägg till</button>
                    </div>
                </div>

            </div>
                <div className='info-wrapper mt-1'>
                    <div className='btn-group'>
                        <button className={ !showAll ? 'btn-info active' : 'btn-info'} onClick={() => setShowAll(false)}>Innehåll</button>
                        <button className={ !showAll ? 'btn-info' : 'btn-info active'} onClick={() => setShowAll(true)}>Allegener</button>
                        <div className='line'></div>
                    </div>

                    { showAll ? <AllergenCard /> : <ContentCard />}
                </div>
        </div>
    </div>
  )
}

export default DetailView
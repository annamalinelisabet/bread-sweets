import React from 'react'
import { Link } from 'react-router-dom'
import './Filter.css'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

const Filter = () => {

    const list = [
        'Populär', 'Dettaärenlångkategori', 'Kort', 'Tårtor', 'Bröd', 'Bakverk', 'Kakor', 'Dettaärenlångkategori', 'Populär', 'Populär', 'Dettaärenlångkategori', 'Kort', 'Tårtor', 'Bröd', 'Bakverk', 'Kakor', 'Dettaärenlångkategori', 'Populär', 'Populär', 'Dettaärenlångkategori', 'Kort', 'Tårtor', 'Bröd', 'Bakverk', 'Kakor','Populär'
    ]

  return (
    <div className='Filter'>
        {/* <div className='filter-container pb'> */}
            <div className='container pt mb-2'>
                {/* <button className='prev'>
                    <MdArrowBackIos />
                </button> */}
                <ul className='categories snaps-inline styled-scrollbars'>
                    {
                        list.map((item) => (
                            <Link to="#">
                                <li className='category'>
                                    {item}
                                </li>
                            </Link>
                        ))
                    }
                </ul>
                {/* <button className='next'>
                    <MdArrowForwardIos />
                </button> */}
            </div>
        {/* </div> */}
    </div>
  )
}

export default Filter
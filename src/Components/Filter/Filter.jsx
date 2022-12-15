import React from 'react'
import { Link } from 'react-router-dom'
import './Filter.css'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

const Filter = () => {

    const list = [
        'Populär', 'Detta är en lång kategori', 'Kort', 'Tårtor', 'Bröd', 'Bakverk', 'Kakor', 'Detta är en lång kategori', 'Populär', 'Populär', 'Detta är en lång kategori', 'Kort', 'Tårtor', 'Bröd', 'Bakverk', 'Kakor', 'Detta är en lång kategori', 'Populär', 'Populär', 'Detta är en lång kategori', 'Kort', 'Tårtor', 'Bröd', 'Bakverk', 'Kakor','Populär'
    ]

  return (
    <div className='Filter'>
            <div className='container pt mb-2'>
                {/* <button className='prev'>
                    <MdArrowBackIos />
                </button> */}
                <ul className='categories snaps-inline styled-scrollbars'>
                    {
                        list.map((item) => (
                            <Link to="#">
                                <li className='category'>
                                    <span className='nobreak'>{item}</span>
                                </li>
                            </Link>
                        ))
                    }
                </ul>
                {/* <button className='next'>
                    <MdArrowForwardIos />
                </button> */}
            </div>
    </div>
  )
}

export default Filter
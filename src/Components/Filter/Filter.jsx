import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Filter.css'
import Data from '../../categories.json'

const Filter = () => {
  return (
    <div className='Filter'>
            <div className='container pt mb-2'>
                <ul className='categories snaps-inline styled-scrollbars'>
                    {
                    Data.map(post => {
                        return(
                            <>
                                <Link to="#">
                                    <li className='category'>
                                        <span className='nobreak'>{post.name}</span>
                                    </li>
                                </Link>
                            </>
                        )
                    })}
                </ul>
            </div> 
    </div>
  )
}

export default Filter
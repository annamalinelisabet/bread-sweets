import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Filter.css'
import categories from '../../categories.json'

const Filter = ({setCategory}) => {
    const [active, setActive] = useState('')
    
    const handleClick = (category) => {
        console.log(category)
        setCategory(category.id)
        setActive(category)
    }

  return (
    <div className='Filter'>
            <div className='pt mb-2'>
                <ul className='categories snaps-inline styled-scrollbars'>
                    {
                    categories.map(category => (
                            <li key={category.id}>
                                {/* <Link className={`category ${category.highlight === true ? 'highLight' : active === category && 'active'}`} to="#" onClick={() => handleClick(category)}> */}
                                <Link className={`category ${active === category ? 'active' : category.highlight === true && 'highLight'}`} to="#" onClick={() => handleClick(category)}>
                                <span className='nobreak'>{category.name}</span>
                                </Link>
                            </li>
                    ))}
                </ul>
            </div> 
    </div>
  )
}

export default Filter
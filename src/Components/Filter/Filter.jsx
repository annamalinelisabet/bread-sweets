import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Filter.css'
import categories from '../../categories.json'

const Filter = ({setCategory, setAllergy, setName, setDesc }) => {
    const [active, setActive] = useState('')
    
    const handleClick = (category) => {      
        console.log(category)
        setCategory(category.id)
        setActive(category)
        setAllergy('')
        setName(category.name)
        setDesc(category.desc)
        document.getElementById("cat").classList.remove('active')
    }

    useEffect(() => {
        categories.filter(category => category.id === 1).map(category => 
            document.getElementById("cat").classList.add('active'))
            setName('Populär')
            setDesc('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, aliquid?')
    }, [])
    

  return (
    <div className='Filter'>
            <div className='pt mb-2'>
                <ul className='categories snaps-inline styled-scrollbars'>
                    {
                    categories.map(category => (
                            <li key={category.id}>
                                <Link id='cat' className={`category ${active === category ? 'active' : category.highlight === true && 'highLight'}`} to="#" onClick={() => handleClick(category)}>
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
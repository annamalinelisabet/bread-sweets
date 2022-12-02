import React from 'react'
import Categories from '../../Components/Categories/Categories'
import About from '../../Components/About/About'
import './HomeView.css'

const HomeView = () => {
  return (
    <div className='Home frame'>
      <Categories />
      <About />
    </div>
  )
}

export default HomeView
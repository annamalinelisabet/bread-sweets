import React from 'react'
import Categories from '../../Components/Categories/Categories'
import About from '../../Components/About/About'
import './HomeView.css'
import Online from '../../Components/Online/Online'

const HomeView = () => {
  return (
    <div className='Home frame'>
      <Categories />
      <About />
      <Online />
    </div>
  )
}

export default HomeView
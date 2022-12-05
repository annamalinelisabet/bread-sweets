import React from 'react'
import Categories from '../../Components/Categories/Categories'
import About from '../../Components/About/About'
import './HomeView.css'
import Online from '../../Components/Online/Online'
import Instagram from '../../Components/Instagram/Instagram'
import Gift from '../../Components/Gift/Gift'
import Video from '../../Components/Video/Video'

const HomeView = () => {
  return (
    <div className='Home frame'>
      <Categories />
      <About />
      <Online />
      <Video />
      <Gift />
      <Instagram />
    </div>
  )
}

export default HomeView
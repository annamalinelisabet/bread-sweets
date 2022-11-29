import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeView from './Home/HomeView'

const Views = () => {
  return (
    <Routes>
        <Route path="/" element={ <HomeView /> } />
    </Routes>
  )
}

export default Views
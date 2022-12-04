import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AssortmentView from './Assortment/AssortmentView'
import HomeView from './Home/HomeView'
import OrderView from './Order/OrderView'
import ReviewsView from './Reviews/ReviewsView'
import ContactView from './Contact/ContactView'

const Views = () => {
  return (
    <Routes>
        <Route path="/" element={ <HomeView /> } />
        <Route path="/assortment" element={ <AssortmentView /> } />
        <Route path="/order" element={ <OrderView /> } />
        <Route path="/reviews" element={ <ReviewsView />} />
        <Route path="/contact" element={ <ContactView/> } />
    </Routes>
  )
}

export default Views
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AssortmentView from './Assortment/AssortmentView'
import ProductsView from './Products/ProductsView'
import HomeView from './Home/HomeView'
import OrderView from './Order/OrderView'
import ReviewsView from './Reviews/ReviewsView'
import ContactView from './Contact/ContactView'
import AboutView from './About/AboutView'

const Views = () => {
  return (
    <Routes>
        <Route path="/" element={ <HomeView /> } />
        <Route path="/assortment" element={ <AssortmentView /> } />
        <Route path="/products" element={ <ProductsView /> } />
        <Route path="/order" element={ <OrderView /> } />
        <Route path="/reviews" element={ <ReviewsView />} />
        <Route path="/contact" element={ <ContactView/> } />
        <Route path='/about' element={ <AboutView /> } />
    </Routes>
  )
}

export default Views
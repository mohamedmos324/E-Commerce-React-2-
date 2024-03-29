import React from 'react'

import Newsteller from '../Newsteller'
import Footer from '../Footer'
import Header from './Header'
import Products from './Products'
import Pagination from './Pagination'
import Navbarr from './Navbarr'
import ScrollToTop from "react-scroll-to-top";
import { CartProvider } from 'react-use-cart'


function Allshop() {
  return (
    <CartProvider>
      <Navbarr/>
      <Header/>
      <Products/>
      <Pagination/>
      <Newsteller/>
      <Footer/>
      <ScrollToTop smooth className='bg-primary' />
    </CartProvider>
  )
}

export default Allshop

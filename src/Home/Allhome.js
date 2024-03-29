import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Newsteller from '../Newsteller'
import Header from './Header'
import Features from './Features'
import Featproducts from './Featproducts'
import Banner from './Banner'
import Newarrival from './Newarrival'
import Shuffle from './Shuffle'
import ScrollToTop from "react-scroll-to-top";
import { CartProvider } from 'react-use-cart'

function Allhome() {
  return (
    <CartProvider>
      <Navbar/>
      <Header/>
      <Features/>
      <Featproducts/>
      <Banner/>
      <Newarrival/>
      <Shuffle/>
      <Newsteller/>
      <Footer/>
      <ScrollToTop smooth className='bg-primary' />

    </CartProvider>
  )
}

export default Allhome

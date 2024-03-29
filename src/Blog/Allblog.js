import React from 'react'
import Blnavbar from './Blnavbar'
import Newsteller from '../Newsteller'
import Footer from '../Footer'
import Header from './Header'
import Blog from './Blog'
import Blpagin from './Blpagin'
import ScrollToTop from "react-scroll-to-top";
import { CartProvider } from 'react-use-cart'


function Allblog() {
  return (
    <CartProvider>
      <Blnavbar/>
      <Header/>
      <Blog/>
      <Blpagin/>
      <Newsteller/>
      <Footer/>
      <ScrollToTop smooth className='bg-primary' />
    </CartProvider>
  )
}

export default Allblog

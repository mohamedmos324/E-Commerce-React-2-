import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-scroll'
import { useCart } from 'react-use-cart'

function Navbar() {
    const { totalItems } = useCart()
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light  p-3 sticky-top">
                <div class="container">
                    <Link class="navbar-brand" to="/"><img src="img/logo.png" alt="" /></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active  pt-2">
                                <Link class="nav-link text-primary" to="/">Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item pt-2">
                                <Link class="nav-link" to="/shop">Shop</Link>
                            </li>
                            <li class="nav-item pt-2">
                                <Link class="nav-link" to="/blog">Blog</Link>
                            </li>

                            <li class="nav-item pt-2">
                                <Link class="nav-link" to="/products">Products</Link>
                            </li>




                            <li class="nav-item dropdown pt-2">
                                <a class="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown"
                                    aria-expanded="false">
                                    Discover
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#Features">Features</a>
                                    <a class="dropdown-item" href="#pro">Featured Products</a>
                                    <a class="dropdown-item" href="#banner">Discount</a>
                                    <a class="dropdown-item" href="#new">New</a>
                                    <a class="dropdown-item" href="#shuffle">Collections</a>
                                    <a class="dropdown-item" href="#newsteller">Latest News</a>
                                       
                                    
                                    
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="/">Something else here</a>
                                </div>
                            </li>






                            <li class="nav-item">
                                <Link class="nav-link" to="/cart"><i class="fa-solid fa-bag-shopping fa-2x"></i> <span className='items text-primary ml-1 '>({totalItems})</span></Link>
                            </li>
                        </ul>

                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar

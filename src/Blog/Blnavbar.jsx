import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'

function Blnavbar() {
    const {totalItems} = useCart()
  return (
    <div>
       {/* <!------------------------ Start Navbar ---------------------------> */}
    <nav class="navbar navbar-expand-lg navbar-light  p-3 ">
        <div class="container">
            <Link class="navbar-brand" to="/"><img src="img/logo.png" alt=""/></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item   pt-2">
                        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item  pt-2">
                        <Link class="nav-link" to="/shop">Shop</Link>
                    </li>
                    <li class="nav-item active pt-2">
                        <Link class="nav-link text-primary" to="/blog">Blog</Link>
                    </li>
                    <li class="nav-item  pt-2">
                        <Link class="nav-link" to="/products">Products</Link>
                    </li>
                   
                    <li class="nav-item">
                        <Link class="nav-link" to="/cart"><i class="fa-solid fa-bag-shopping fa-2x"></i><span className='items text-primary ml-1 '>({totalItems})</span></Link>
                    </li>
                </ul>

            </div>
        </div>

    </nav>
    {/* <!------------------------ End Navbar -----------------------------> */}
    </div>
  )
}

export default Blnavbar

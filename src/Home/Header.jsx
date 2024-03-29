import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
       {/* <!------------------------ Start Header ---------------------------> */}
    <section class="header py-5">
        <div class="container">
            <div class="row d-flex align-items-center justify-content-start">
                <div class="col-md-8  text-item d-none d-md-block">
                    <h4>Trade in offer</h4>
                    <h2>super Value Deals</h2>
                    <h1>On All Products</h1>
                    <p>save more with coupons & up to 70% off</p>
                    <Link to='/shop' class=" btn btn-primary ">SHOP NOW</Link>
                </div>
            </div>

        </div>
    </section>
    {/* <!------------------------ End Header -------------------------------> */}
    </div>
  )
}

export default Header

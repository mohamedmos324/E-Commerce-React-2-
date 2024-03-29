import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div>
      {/* <!--------------------- Start Banner Section -------------------------> */}
      <section class="banner my-y py-5 text-center d-flex justify-content-center align-items-center flex-column" id='banner'>
        <h4>Repair Services</h4>
        <h2 class="mb-3">Up to <span>70% Off</span>-All T-Shirts & Accessories</h2>
        <Link to="/blog" class="btn btn-primary">Explore More</Link>
      </section>
      {/* <!--------------------- End Banner Section ----------------------------> */}
    </div>
  )
}

export default Banner

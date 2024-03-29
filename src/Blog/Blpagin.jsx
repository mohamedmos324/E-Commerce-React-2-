import React from 'react'
import { Link } from 'react-router-dom'

function Blpagin() {
  return (
    <div>
        {/* <!--------------------- Start Pagination Section -------------------------> */}
    <section class="shop-pag py-5">
        <div class="container ">
            <div class="col">
                <nav aria-label="" class="d-flex justify-content-center align-items-center bg-transparent">
                    <ul class="pagination   ">
                      <li class="page-item ">
                        <Link class="page-link" to="/shop">Previous</Link>
                      </li>
                      <li class="page-item "><Link class="page-link" to="/shop">1</Link></li>
                      <li class="page-item active" aria-current="page">
                        <Link class="page-link" href="/blog">2</Link>
                      </li>
                      <li class="page-item"><Link class="page-link" to="/about">3</Link></li>
                      <li class="page-item">
                        <Link class="page-link" to="/about">Next</Link>
                      </li>
                    </ul>
                  </nav>
            </div>
        </div>
    </section>
    {/* <!--------------------- Start Pagination Section -------------------------> */}
    
    </div>
  )
}

export default Blpagin

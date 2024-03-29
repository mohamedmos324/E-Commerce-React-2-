import React from 'react'
import { Link } from 'react-router-dom'

function Shuffle() {
  return (
    <div>
       {/* <!---------------------- Start Shuffle Section -------------------------> */}
    <section class="shuffle" id='shuffle'>
        <div class="container">
            <div class="row ">
                <div class="col-lg-6 my-3">
                    <div class="shuffle-box d-flex justify-content-center align-items-start flex-column">
                        <h4 class="pl-5 text-light">crazy deals</h4>
                        <h2 class="pl-5 text-light">buy 1 get 1 free</h2>
                        <span class="pl-5 text-light">The best classic dress in on sale at cara</span>
                        <Link to='/blog' class="btn btn-primary d-block ml-5 mt-3">Learn More</Link>
                    </div>
                </div>
                <div class="col-lg-6 my-3">
                    <div class="shuffle-box d-flex justify-content-center align-items-start flex-column box2">
                        <h4 class="pl-5 text-light">Spring/Summer</h4>
                        <h2 class="pl-5 text-light">upcoming season</h2>
                        <span class="pl-5 text-light">The best classic dress in on sale at cara</span>
                        <Link to='/blog' class="btn btn-primary d-block ml-5 mt-3">Collection</Link>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4 my-3">
                    <div class="shuffle-box d-flex justify-content-center align-items-start flex-column box3">
                        <h2 class="pl-3 text-light text-uppercase">seasonal sale</h2>
                        <h3 class="pl-3 ">Winter collection -50% OFF</h3>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 my-3">
                    <div class="shuffle-box d-flex justify-content-center align-items-start flex-column box4">
                        <h2 class="pl-3 text-light text-uppercase">new collection</h2>
                        <h3 class="pl-3 ">Winter collection -50% OFF</h3>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 my-3">
                    <div class="shuffle-box d-flex justify-content-center align-items-start flex-column box5">
                        <h2 class="pl-3 text-light text-uppercase">T-Shirts</h2>
                        <h3 class="pl-3 ">New Trendy</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!---------------------- End Shuffle Section ---------------------------> */}
    </div>
  )
}

export default Shuffle

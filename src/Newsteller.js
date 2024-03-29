import React from 'react'

function Newsteller() {
  return (
    <div>
       {/* <!--------------------- Start NewsLetter Section ------------------------> */}
    <section class="newsletter  my-5" id='newsteller'>
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6">
                    <div class="newstext">
                        <h4 class="text-light">Sign Up For NewsLetter</h4>
                        <p class="text-capitalize">get email updates abput our latest shop and <span>special
                                offers</span> </p>
                    </div>
                </div>
                <div class="col-lg-6 ">
                    <div class="form ">
                        <form action="">
                            <input type="text" class="form-control w-75 d-inline-block" placeholder="Enter Your E-mail"/>
                            <button class="btn btn-primary  "> Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--------------------- End NewsLetter Section --------------------------> */}
    </div>
  )
}

export default Newsteller

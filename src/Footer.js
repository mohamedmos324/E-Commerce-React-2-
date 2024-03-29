import React from 'react'

function Footer() {
  return (
    <div>
        {/* <!--------------------- Start Footer Section -----------------------------> */}
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="site-info">
                        <h2><img src="img/logo.png" alt=""/></h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut similique, autem cupiditate
                            culpa sit, esse modi temporibus, commodi dignissimos quidem aut a alias id? Illo tempora
                            natus illum mollitia recusandae.</p>
                        <a href="/">Read More</a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="helpful-links">
                        <h2>Helpful Links</h2>
                        <div class="row">
                            <div class="col">
                                <ul class="list-unstyled">
                                    <li>About</li>
                                    <li>Protofolio</li>
                                    <li>Team</li>
                                    <li>Price</li>
                                    <li>Privacy</li>
                                </ul>
                            </div>
                            <div class="col">
                                <ul class="list-unstyled">
                                    <li>F&Q</li>
                                    <li>Blog</li>
                                    <li>How it work</li>
                                    <li>Benefits</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="contact">
                        <h2>Contact Us</h2>
                        <ul class="list-unstyled">
                            <li>54958 Levo Road Red Fort, US</li>
                            <li>phone: 012-123456789</li>
                            <li>E-mail: <a href="mailto:info@elitrcrop.com">info@cava.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!----- Start copyright ----> */}
    <footer class="bg-body-tertiary text-center">
        {/* <!-- Grid container --> */}
        <div class="container p-4 pb-0">
            {/* <!-- Section: Social media --> */}
            <section class="mb-4">
                {/* <!-- Facebook --> */}
                <a data-mdb-ripple-init class="btn text-white btn-floating m-1" style={{backgroundColor: "#3b5998"}}
                    href="#!" role="button"><i class="fab fa-facebook-f"></i></a>

                {/* <!-- Twitter --> */}
                <a data-mdb-ripple-init class="btn text-white btn-floating m-1" style={{backgroundColor: "#55acee"}}
                    href="#!" role="button"><i class="fab fa-twitter"></i></a>

                {/* <!-- Google --> */}
                <a data-mdb-ripple-init class="btn text-white btn-floating m-1" style={{backgroundColor: "#dd4b39"}}
                    href="#!" role="button"><i class="fab fa-google"></i></a>

                {/* <!-- Instagram --> */}
                <a data-mdb-ripple-init class="btn text-white btn-floating m-1" style={{backgroundColor: "#ac2bac"}}
                    href="#!" role="button"><i class="fab fa-instagram"></i></a>

                {/* <!-- Linkedin --> */}
                <a data-mdb-ripple-init class="btn text-white btn-floating m-1" style={{backgroundColor: "#0082ca"}}
                    href="#!" role="button"><i class="fab fa-linkedin-in"></i></a>
                {/* <!-- Github --> */}
                <a data-mdb-ripple-init class="btn text-white btn-floating m-1" style={{backgroundColor: "#333333"}}
                    href="#!" role="button"><i class="fab fa-github"></i></a>
            </section>
            {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div class="text-center p-3 text-light" style={{backgroundColor: "#041e42"}}>
            © 2023 Copyright:
            <a class="  " href="/">info@Cava.com</a>
        </div>
        {/* <!-- Copyright --> */}
    </footer>
    {/* <!------ End copyright ----> */}

    {/* <!--------------------- End Footer Section -----------------------------> */}
    </div>
  )
}

export default Footer

import React from 'react'

function About() {
  return (
    <>
       <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
        tabindex="-1">
        <div className="modal-dialog modal-dialog-centered m-0">
            <div className="modal-content position-relative d-flex justify-content-center">
                <div className="position-absolute vector-image">
                    <img src="images/border-menu-image.png" className="img-fluid" />
                </div>
                <div className="modal-header">
                    <div type="button" className="btn-close-2 position-absolute top-0 bottom-0 d-flex align-items-center"
                        data-bs-dismiss="modal" aria-label="Close"><img src="images/cross-modals.png" /></div>
                </div>
                <div className="modal-body d-flex align-items-center">
                    <div className="flex-center p-5 model-menus">
                        <ul className="nav flex-column">
                            <li className="nav-item delay-1"><a className="nav-link" href="hire-expert">Hire an expert</a></li>
                            <li className="nav-item delay-2"><a className="nav-link" href="industries">Industries</a></li>
                            <li className="nav-item delay-3"><a className="nav-link" href="about-us">About Us</a></li>
                            <li className="nav-item delay-4"><a className="nav-link" href="contact-us">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <section className="logo-top">
        <div className="container p-0">
            <div className="tech-logo my-4">
                <a href="/"><img src="images/tech-logo.png" alt="logo"/></a>
            </div>
        </div>
    </section>

    <section className="hero-part position-relative">
        <div className="container p-0">
            <div className="align-items-center justify-content-between d-flex responsive-mm hero-wrapper py-5 about-us">
                <div className="hire-title">
                    <h1 className="grandiat-hire grandiattitle">About
                        <br/>Us
                    </h1>
                </div>
                <div className="align-items-center d-flex">
                    <div className="hire-vector-image hover-effect zoom-same position-relative">
                        <img src="images/about-heros.png" />
                    </div>
                    <div className="menu-bar" data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="development-text grey-commons">
        <div className="container">
            <div className="grandiattitle common-spaces">
                <h2 className="text-center lh-sm m-0">We offer a full range of digital
                    <br/>marketing services!
                </h2>
            </div>
        </div>
    </section>

    <section className="industries-tab common-margin">
        <div className="container">
            <div className="Industries-service">
                <div className="Industries-left-border position-relative">
                    <h2 className="ms-4">About Us</h2>
                    <h6 className="mb-4 ms-4 text-uppercase">WE are more than a digital agency</h6>
                </div>
                <p>Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut
                    labore et dolore magna ut enim ad minim.Lorem ipsum dolor sit consectetur
                    adipiscing
                    elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad
                    minim.Lorem
                    ipsum dolor sit consectetur adipiscing elit do eiusmod </p>
            </div>

            <div className="about-images">
                <div className="row g-2">
                    <div className="col-lg-6">
                        <div className="item-image animated wow fadeIn">
                            <img src="images/abt1.png" className="img-fluid w-100 h-100" />
                            <div className="overlay-2 top-overlay">
                                <div className="text position-text position-absolute">
                                    <h6 className="mb-0 text-white">Team Work</h6>
                                    <p className="text-white">Commited and creative</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="h-100 d-flex flex-column gap-2">
                            <div className="h-50 item-image animated wow fadeIn">
                                <img src="images/abt2.png" className="img-fluid w-100 h-100" />
                                <div className="overlay-2 top-overlay">
                                    <div className="text position-text position-absolute">
                                        <h6 className="mb-0 text-white">Philosophy</h6>
                                        <p className="text-white">Trust pays off</p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-50 item-image animated wow fadeIn">
                                <img src="images/abt3.png" className="img-fluid w-100 h-100" />
                                <div className="overlay-2 top-overlay">
                                    <div className="text position-text position-absolute">
                                        <h6 className="mb-0 text-white">Office</h6>
                                        <p className="text-white">Somewhere on earth</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="research-card grey-commons common-spaces">
       <div className="container">
        <h4 className="text-center mb-5 text-uppercase">Research Strategy</h4>
        <div className="row">
            <div className="col-md-12 col-lg-4">
                <div className="about-cards bg-white p-5 reveal">
                 <p className="text-muted">01</p>
                 <h5 className="grandiattitle">Developing
                    <br/>strategy</h5>
                    <p className="py-3">Lorem ipsum is simply dummy text of the printing 
                        typesetting lorem ipsum been dummy text. typesetting 
                        lorem ipsum been dummy text.</p>
                        <div className="d-flex justify-content-between align-items-center border-top pt-4">
                            <a href="#" className="common-btn text-decoration-none">MORE INFO</a>
                            <a href="#" className=""><img src="images/right-arrow.png" /></a>
                        </div>
                </div>
            </div>

            <div className="col-md-12 col-lg-4">
                <div className="about-cards bg-white p-5 reveal">
                 <p className="text-muted">02</p>
                 <h5 className="grandiattitle">Blazing
                    <br/>perfomance</h5>
                    <p className="py-3">Lorem ipsum is simply dummy text of the printing 
                        typesetting lorem ipsum been dummy text. typesetting 
                        lorem ipsum been dummy text.</p>
                        <div className="d-flex justify-content-between align-items-center border-top pt-4">
                            <a href="#" className="common-btn text-decoration-none">MORE INFO</a>
                            <a href="#"><img src="images/right-arrow.png" /></a>
                        </div>
                </div>
            </div>

            <div className="col-md-12 col-lg-4">
                <div className="about-cards bg-white p-5 reveal">
                 <p className="text-muted">03</p>
                 <h5 className="grandiattitle">Customer
                    <br/>satisfaction</h5>
                    <p className="py-3">Lorem ipsum is simply dummy text of the printing 
                        typesetting lorem ipsum been dummy text. typesetting 
                        lorem ipsum been dummy text.</p>
                        <div className="d-flex justify-content-between align-items-center border-top pt-4">
                            <a href="#" className="common-btn text-decoration-none">MORE INFO</a>
                            <a href="#" className=""><img src="images/right-arrow.png" /></a>
                        </div>
                </div>
            </div>
        </div>
       </div>
    </section>

    <section className="apply-section">
        <div className="bg-looking common-spaces w-100 parallax" style="background-image: url(images/looking-photo.jpg);">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="looking-title">
                            <h2 className="text-white lh-sm border-start border-5 ps-3">Looking to Join
                                Our Developer
                                Network?</h2>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="btn-apply text-center">
                            <a href="#"
                                className="apply-text text-white text-decoration-none py-3 px-5 d-inline-block">Apply
                                Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer className="text-center text-white footer-main">
        <div className="container">
            <div className="py-3 my-4">
                <div className="footer-logo py-5">
                    <img src="images/tech-logo.png" alt="logo" />
                </div>
                <ul className="nav justify-content-center border-bottom pb-4 mb-3">
                    <li className="nav-item"><a href="about-us" className="nav-link px-4 text-muted">ABOUT US</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-4 text-muted">SERVICES</a></li>
                    <li className="nav-item"><a href="hire-expert" className="nav-link px-4 text-muted">HIRE US</a></li>
                    <li className="nav-item"><a href="contact-us" className="nav-link px-4 text-muted">CONTACT US</a></li>
                </ul>
                <p className="text-center text-muted copyright-text">© 2022 TECHMUTATION ALL RIGHT RESERVED</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default About
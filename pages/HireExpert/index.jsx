export default function HireExpert() {
  return (
    <>
        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered m-0">
          <div className="modal-content position-relative d-flex justify-content-center">
            <div className="position-absolute vector-image">
            <img src="images/border-menu-image.png" className="img-fluid" />
             </div>
            <div className="modal-header">     
              <div type="button" className="btn-close-2 position-absolute top-0 bottom-0 d-flex align-items-center" data-bs-dismiss="modal" aria-label="Close"><img src="images/cross-modals.png" /></div>
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
                <a href="/"><img src="images/tech-logo.png" alt="logo" /></a>
            </div>
        </div>
    </section>
    <section className="hero-part position-relative">
        <div className="container p-0">
            <div className="align-items-center justify-content-between d-flex hero-wrapper responsive-mm py-5">
                <div className="hire-title">
                    <h1 className="grandiat-hire grandiattitle">Hire an
                        <br/>Expert
                    </h1>
                </div>
                <div className="align-items-center d-flex">
                    <div className="hire-vector-image hover-effect zoom-same position-relative">
                        <img src="images/undraw_Job.png" />
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
                <h2 className="text-center lh-sm m-0">We are development experts on all
                    <br/>technologies and platforms
                </h2>
            </div>
        </div>
    </section>
    <section className="hire-box-popup">
        <div id="popup1" className="overlay">
            <div className="popup">
                <a className="close" href=""><img src="images/cross-hire-popup.png" /></a>
                <div className="contents">
                    <h3 className="mb-5 grandiattitle">Quick Contact</h3>
                    <form>
                        <input type="text" name="username" className="username form-control" placeholder="Username"/>
                        <input type="email" id="email" name="email" className="username form-control" placeholder="Email"/>
                        <input type="tel" id="phone" name="phone" className="password form-control" placeholder="Phone"/>
                        <input className="btn login apply-text border-0 text-white mt-5" type="submit" value="Apply Now" />
                    </form>
                </div>
            </div>
        </div>
    </section>
    <section className="service-hire common-margin position-relative">
        <div className="bire-bg-back position-absolute">
            <img src="images/hire-bg-box.png" />
        </div>
        <div className="container">
            <div className="d-flex boxGap">
            <div className="w-50 bixSizes">
                <div className="service-block reveal box-b-spacer p-5 position-relative">
                    <div className="back-right-title align-set-1 position-absolute">
                        <h3 className="m-0">Frontend</h3>
                    </div>
                    <div className="inner-box">
                        <div className="icon-outer">
                            <span className="icon-bg"></span>
                            <div className="icon-box mb-3">
                                <img src="images/1.png"/>
                            </div>
                        </div>
                        <h4 className="text-white">Frontend</h4>
                        <div className="text-white my-5">
                            <p>Front-end web development is the <br/>development of the graphical user interface <br/>of a website</p>
                        </div>
                        <div className="more-link">
                            <a href="#popup1" className="quick-btn text-decoration-none">Quick Contact <span className="fa fa-arrow-right" aria-hidden="true"></span></a>
                        </div>
                        </div>
                </div>

                <div className="service-block reveal p-5 position-relative">
                    <div className="back-right-title align-set-2 position-absolute">
                        <h3 className="m-0">Quality Assurance</h3>
                    </div>
                    <div className="inner-box">
                        <div className="icon-outer">
                            <span className="icon-bg"></span>
                            <div className="icon-box mb-3">
                                <img src="images/3.png"/>
                            </div>
                        </div>
                        <h4 className="text-white">Quality Assurance</h4>
                        <div className="text-white my-5">
                            <p>Quality assurance is the term used in both <br/>manufacturing and service industries to <br/>describe 
                            </p>
                        </div>
                        <div className="more-link">
                            <a href="#popup1" className="quick-btn text-decoration-none">Quick Contact <span className="fa fa-arrow-right" aria-hidden="true"></span></a>
                        </div>
                    </div>
                </div>
            </div>

    <div className="w-50 bixSizes extra-top-margin backend-mt">
                <div className="service-block reveal box-b-spacer p-5 position-relative">
                    <div className="back-right-title align-set-3 position-absolute">
                        <h3 className="m-0">Backend</h3>
                    </div>
                    <div className="inner-box">
                        <div className="icon-outer">
                            <span className="icon-bg"></span>
                            <div className="icon-box mb-3">
                                <img src="images/2.png"/>
                            </div>
                        </div>
                        <h4 className="text-white">Backend</h4>
                        <div className="text-white my-5">
                            <p>The backend (or “server-side”) is the <br/>portion of the website you don't see. It's <br/>responsible for storing and organizing data</p>
                        </div>
                        <div className="more-link">
                            <a href="#popup1" className="quick-btn text-decoration-none">Quick Contact <span className="fa fa-arrow-right" aria-hidden="true"></span></a>
                        </div>
                    </div>
                </div>

                <div className="service-block reveal animated p-5 position-relative">
                    <div className="back-right-title align-set-4 position-absolute">
                        <h3 className="m-0">Mobile App</h3>
                    </div>
                    <div className="inner-box">
                        <div className="icon-outer">
                            <span className="icon-bg"></span>
                            <div className="icon-box mb-3">
                                <img src="images/4.png"/>
                            </div>
                        </div>
                        <h4 className="text-white">Mobile App</h4>
                        <div className="text-white my-5">
                            <p>A mobile application or app is a computer <br/>program or software application <br/>designed to run on a mobile device such <br/>as a phone, tablet, or watch.</p>
                        </div>
                        <div className="more-link">
                            <a href="#popup1" className="quick-btn text-decoration-none">Quick Contact <span className="fa fa-arrow-right" aria-hidden="true"></span></a>
                        </div>
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

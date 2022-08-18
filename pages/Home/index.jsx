export default function Main() { 
  return(
    <>
       <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered m-0">
          <div className="modal-content position-relative d-flex justify-content-center">
            <div className="position-absolute vector-image">
            <img src="images/border-menu-image.png" className="img-fluid" />
             </div>
            <div className="modal-header">     
              <div type="button" className="btn-close-2 position-absolute top-0 bottom-0 d-flex align-items-center" data-bs-dismiss="modal" aria-label="Close">
                <img src="images/cross-modals.png"/></div>
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
        <div className="container">
            <div className="align-items-center d-flex hero-wrapper">
                <div className="mobile-view d-sm-block d-md-none d-lg-none">
                    <img src="images/mobile-image.png" />
                </div>
                <div className="tech-Mask w-100 d-sm-none d-md-block d-none">
                    <video width="100%" height="600px" loop="true" controls autoplay muted>
                        <source src="images/mov_bbb-business.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="menu-bar" data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>
            <div className="business-title position-absolute">
                <h1 className="sametitle">GET SPREAD<br />
                    YOUR BUSINESS</h1>
            </div>
        </div>
    </section>
      

    <section className="development-team padd-second mb-3">
        <div className="container">
            <div className="row width-space2 m-auto">
                <div className="col-md-12 col-lg-7">
                    <div className="position-relative developer-inner">
                        <div className="">
                            <img src="images/second-image.jpg" />
                        </div>
                        <div className="grandiatbg develop-style">
                            <h2 className="sametitle extra-style">development</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-5 align-items-center d-flex">
                    <div className="experience-data w-100">
                        <div className="experienceteam">
                            <h4>We have experienced
                                <span className="break-color">Development Team</span> for your <span
                                    className="break-color">Dream Project</span>
                            </h4>
                            <p>Lorem ipsum dolor amet consectetur adipiscing eiusmod tempor incididunt labore dolore
                                magna ut enim veniam nostrud exercitation.</p>
                            <a href="#" className="common-btn text-decoration-none">More about us <img
                                    src="images/right-arrow.png" /></a>
                        </div>
                        <h2 className="technology-title animation-element slide-right">technology</h2>
                    </div>
                </div>
            </div>
            </div>
    </section>

    <section className="progress-bars common-margin">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="highly-text">
                        <h4>Highly expertise</h4>
                        <p className="w-75">Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt
                            ut labore et dolore magna ut enim ad minim.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="skills">
                        <div className="progress-bar-container">
                            <div className="d-flex justify-content-between align-items-baseline">
                                <h2 className="text-uppercase progress-text mb-0">Development</h2>
                                <p className="mb-0">100%</p>
                            </div>
                            <div className="progress-bar">
                                <span className="percentage same-percen"></span>
                            </div>
                        </div>

                        <div className="progress-bar-container">
                            <div className="d-flex justify-content-between align-items-baseline width-space1">
                                <h2 className="text-uppercase progress-text mb-0">Designing</h2>
                                <p className="mb-0">90%</p>
                            </div>
                            <div className="progress-bar">
                                <span className="percentage same-percen"></span>
                            </div>
                        </div>

                        <div className="progress-bar-container">
                            <div className="d-flex justify-content-between align-items-baseline width-space3">
                                <h2 className="text-uppercase progress-text mb-0">branding</h2>
                                <p className="mb-0">75%</p>
                            </div>
                            <div className="progress-bar">
                                <span className="percentage same-percen"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="setting-part">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="d-flex align-items-baseline">
                        <img src="images/files-art.png" className="img-fluid me-3" />
                        <div className="program-style">
                            <h6>Amazing layouts</h6>
                            <p>Lorem ipsum is simply dummy text of the printing typesetting ipsum been text.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex align-items-baseline">
                        <img src="images/coding-icon.png" className="img-fluid me-3" />
                        <div className="program-style">
                            <h6>No coding required</h6>
                            <p>Lorem ipsum is simply dummy text of the printing typesetting ipsum been text.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex align-items-baseline">
                        <img src="images/setting-icon.png" className="img-fluid me-3" />
                        <div className="program-style">
                            <h6>Easy to customize</h6>
                            <p>Lorem ipsum is simply dummy text of the printing typesetting ipsum been text.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="slider-part common-margin">
        <div className="container-fluid p-0">
            <div className="carousel">
                <div>
                    <div className="full-slider position-relative">
                        <div className="overlay"></div>
                        <div className="p-5 slider-bG" style="background-image: url('images/homemarketings.jpg');">
                        <div className="card-sliders">
                            <h4 className="slider-zoom-label position-absolute bg-fast-blue text-white py-3">01</h4>
                            <div className="bg-white p-4 customslider-text">
    
                                <h5 className="alt-font text-extra-dark-gray"><span className="font-weight-600 text-fast-blue">Consumer</span>
                                    research</h5>
                                <p className="text-extra-medium line-height-32px">Lorem ipsum dolor consectetur adipiscing mod
                                    tempor incididunt labore dolore magna ut veniam.</p>
                                <a href="#" className="common-btn text-decoration-none d-flex align-items-center">Learn More <img
                                        src="images/right-arrow.png" className="img-fluid mx-1" /></a>
                            </div>
                        </div>
                       </div>
                        
                    </div>
                </div>
                <div>
                    <div className="full-slider position-relative">
                        <div className="overlay"></div>
                        <div className="p-5 slider-bG" style="background-image: url('images/business-mans.jpg');">
                        <div className="card-sliders">
                        <h4 className="slider-zoom-label position-absolute bg-fast-blue text-white py-3">02</h4>
                        <div className="bg-white p-4 customslider-text">

                            <h5 className="alt-font text-extra-dark-gray"><span className="font-weight-600 text-fast-blue">Consumer</span>
                                research</h5>
                            <p className="text-extra-medium line-height-32px">Lorem ipsum dolor consectetur adipiscing mod
                                tempor incididunt labore dolore magna ut veniam.</p>
                            <a href="#" className="common-btn text-decoration-none d-flex align-items-center">Learn More <img
                                    src="images/right-arrow.png" className="img-fluid mx-1" /></a>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
                <div>
                    <div className="full-slider position-relative">
                        <div className="overlay"></div>
                        <div className="p-5 slider-bG" style="background-image: url('images/homemarketings.jpg');">
                        <div className="card-sliders">
                        <h4 className="slider-zoom-label position-absolute bg-fast-blue text-white py-3">03</h4>
                        <div className="bg-white p-4 customslider-text">

                            <h5 className="alt-font text-extra-dark-gray"><span className="font-weight-600 text-fast-blue">Consumer</span>
                                research</h5>
                            <p className="text-extra-medium line-height-32px">Lorem ipsum dolor consectetur adipiscing mod
                                tempor incididunt labore dolore magna ut veniam.</p>
                            <a href="#" className="common-btn text-decoration-none d-flex align-items-center">Learn More <img
                                    src="images/right-arrow.png" className="img-fluid mx-1" /></a>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
                <div>
                    <div className="full-slider position-relative">
                        <div className="overlay"></div>
                        <div className="p-5 slider-bG" style="background-image: url('images/business-mans.jpg');">
                        <div className="card-sliders">
                        <h4 className="slider-zoom-label position-absolute bg-fast-blue text-white py-3">04</h4>
                        <div className="bg-white p-4 customslider-text">

                            <h5 className="alt-font text-extra-dark-gray"><span className="font-weight-600 text-fast-blue">Consumer</span>
                                research</h5>
                            <p className="text-extra-medium line-height-32px">Lorem ipsum dolor consectetur adipiscing mod
                                tempor incididunt labore dolore magna ut veniam.</p>
                            <a href="#" className="common-btn text-decoration-none d-flex align-items-center">Learn More <img
                                    src="images/right-arrow.png" className="img-fluid mx-1" /></a>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
                <div>
                    <div className="full-slider position-relative">
                        <div className="overlay"></div>
                        <div className="p-5 slider-bG" style="background-image: url('images/homemarketings.jpg');">
                        <div className="card-sliders">
                        <h4 className="slider-zoom-label position-absolute bg-fast-blue text-white py-3">05</h4> 
                        <div className="bg-white p-4 customslider-text">

                            <h5 className="alt-font text-extra-dark-gray"><span className="font-weight-600 text-fast-blue">Consumer</span>
                                research</h5>
                            <p className="text-extra-medium line-height-32px">Lorem ipsum dolor consectetur adipiscing mod
                                tempor incididunt labore dolore magna ut veniam.</p>
                            <a href="#" className="common-btn text-decoration-none d-flex align-items-center">Learn More <img
                                    src="images/right-arrow.png" className="img-fluid mx-1" /></a>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
                <div>
                    <div className="full-slider position-relative">
                        <div className="overlay"></div>
                        <div className="p-5 slider-bG" style="background-image: url('images/business-mans.jpg');">
                        <div className="card-sliders">
                        <h4 className="slider-zoom-label position-absolute bg-fast-blue text-white py-3">06</h4>
                        <div className="bg-white p-4 customslider-text">

                            <h5 className="alt-font text-extra-dark-gray"><span className="font-weight-600 text-fast-blue">Consumer</span>
                                research</h5>
                            <p className="text-extra-medium line-height-32px">Lorem ipsum dolor consectetur adipiscing mod
                                tempor incididunt labore dolore magna ut veniam.</p>
                            <a href="#" className="common-btn text-decoration-none d-flex align-items-center">Learn More <img
                                    src="images/right-arrow.png" className="img-fluid mx-1" /></a>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


<section className="mb-0">  
    <div className="bg-portfolio h-100 common-spaces">
        <div className="container">
            <div className="portfolio-text text-center mb-5">
             <h2 className="lh-sm">OUR PORTFOLIO</h2>
             <p className="mb-5">Lorem Ipsum aenean commo dolig trium</p>
            </div>
            <div className="d-md-flex d-sm-block d-lg-flex">  
            <div className="portfolioMenu position-sticky top-0 h-100">
                <ul className="list-inline d-flex d-md-block d-lg-block justify-content-center me-5 mb-0 flex-wrap">
                    <li><a className="filter-button text-decoration-none" data-filter="hdpe">Logo</a> </li>
                    <li><a className="filter-button text-decoration-none" data-filter="sprinkle">Web</a> </li>
                    <li><a className="filter-button text-decoration-none" data-filter="spray">Cards</a> </li>
                    <li><a className="filter-button text-decoration-none" data-filter="irrigation">Designs</a> </li>
                    <li><a className="filter-button text-decoration-none active" data-filter="spray">Frontend</a> </li>
                </ul>
            </div>
    
            <div className="portfolio-gallery">
                <div className="row">
                <div className="gallery_product col-lg-6 col-md-6 col-sm- col-xs-6 filter hdpe">
                    <img src="images/dummy-8.jpg" className="img-responsive w-100" />
                    <h6 className="fw-normal">Project Name</h6>
                </div>
    
                <div className="gallery_product col-lg-6 col-md-6 col-sm- col-xs-6 filter sprinkle">
                    <img src="images/dummy1.jpg" className="img-responsive w-100" />
                    <h6 className="fw-normal">Project Name</h6>
                </div>
    
                <div className="gallery_product col-lg-6 col-md-6 col-sm- col-xs-6 filter hdpe">
                    <img src="images/dummy9.jpg" className="img-responsive w-100" />
                    <h6 className="fw-normal">Project Name</h6>
                </div>
    
                <div className="gallery_product col-lg-6 col-md-6 col-sm- col-xs-6 filter irrigation">
                    <img src="images/dummy5.jpg" className="img-responsive w-100" />
                    <h6 className="fw-normal">Project Name</h6>
                </div>
    
                <div className="gallery_product col-lg-6 col-md-6 col-sm- col-xs-6 filter spray">
                    <img src="images/dummy2.jpg" className="img-responsive w-100" />
                    <h6 className="fw-normal">Project Name</h6>
                </div>
    
                <div className="gallery_product col-lg-6 col-md-6 col-sm- col-xs-6 filter irrigation">
                    <img src="images/dummy3.jpg" className="img-responsive w-100" />
                    <h6 className="fw-normal">Project Name</h6>
                </div>
    
                <div className="gallery_product col-lg-6 col-md-6 col-sm- col-xs-6 filter spray">
                    <img src="images/dummy4.jpg" className="img-responsive w-100" />
                    <h6 className="fw-normal">Project Name</h6>
                </div>
    
                <div className="gallery_product col-lg-6 col-md-6 col-sm- col-xs-6 filter irrigation">
                    <img src="images/dummy9.jpg" className="img-responsive w-100" />
                    <h6 className="fw-normal">Project Name</h6>
                </div>
    
                <div className="gallery_product col-lg-6 col-md-6 col-sm- col-xs-6 filter irrigation">
                    <img src="images/dummy1.jpg" className="img-responsive w-100" />
                    <h6 className="fw-normal">Project Name</h6>
                </div>
    
                <div className="gallery_product col-lg-6 col-md-6 col-sm- col-xs-6 filter hdpe">
                    <img src="images/dummy2.jpg" className="img-responsive w-100" />
                    <h6 className="fw-normal">Project Name</h6>
                </div>
    
                <div className="gallery_product col-lg-6 col-md-6 col-sm- col-xs-6 filter spray">
                    <img src="images/dummy6.jpg" className="img-responsive w-100" />
                    <h6 className="fw-normal">Project Name</h6>
                </div>
    
                <div className="gallery_product col-lg-6 col-md-6 col-sm- col-xs-6 filter sprinkle">
                    <img src="images/dummy3.jpg" className="img-responsive w-100" />
                    <h6 className="fw-normal">Project Name</h6>
                </div>
                <div className="gallery_product col-lg-6 col-md-6 col-sm- col-xs-6 filter sprinkle">
                    <img src="images/dummy4.jpg" className="img-responsive w-100" />
                    <h6 className="fw-normal">Project Name</h6>
                </div>
                <div className="gallery_product col-lg-6 col-md-6 col-sm- col-xs-6 filter sprinkle">
                    <img src="images/dummy6.jpg" className="img-responsive w-100" />
                    <h6 className="fw-normal">Project Name</h6>
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
                    <img src="images/tech-logo.png" alt="logo"/ >
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

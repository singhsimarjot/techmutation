export default function Industries() {
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
                <a href="/"><img src="images/tech-logo.png" alt="logo" /></a>
            </div>
        </div>
    </section>

    <section className="hero-part position-relative">
        <div className="container p-0">
            <div className="align-items-center justify-content-between d-flex responsive-mm hero-wrapper py-5">
                <div className="hire-title">
                    <h1 className="grandiat-hire grandiattitle">Industries
                        <br/>Expert
                    </h1>
                </div>
                <div className="align-items-center d-flex">
                    <div className="hire-vector-image hover-effect zoom-same position-relative">
                        <img src="images/Industries_Job.png"/>
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
                <h2 className="text-center lh-sm m-0">We help our clients build value
                    <br/>digital web solutions
                </h2>
            </div>
        </div>
    </section>

    <section className="industries-tab common-margin">
        <div className="container">
            <div className="naccs">
                <div className="grid d-flex flex-row-reverse boxGap">
                    <div className="gc gc--1-of-3 grandiatbg">
                        <div className="d-flex justify-content-between mb-5">
                            <h4 className="text-white">Custom Web
                                <br/>Services
                            </h4>
                            <img src="images/Industries_menus.png" />
                        </div>
                        <div className="menu">
                            <div className="active"><span className="light"></span><span>Insurance Industries</span></div>
                            <div><span className="light"></span><span>Healthcare Industries</span></div>
                            <div><span className="light"></span><span>Manufacturing Industries</span></div>
                            <div><span className="light"></span><span>Educational Industries</span></div>
                            <div><span className="light"></span><span>Technology Industries</span></div>
                            <div><span className="light"></span><span>Transportation Industries</span></div>
                        </div>
                    </div>
                    <div className="gc gc--2-of-3 p-0">
                        <ul className="nacc">
                            <li className="active">
                                <div className="Industries-service">
                                    <div className="Industries-left-border position-relative">
                                        <h2 className="ms-4">Industries</h2>
                                        <h6 className="mb-4 ms-4">WE WORK WITH</h6>
                                    </div>
                                    <p>Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut
                                        labore et dolore magna ut enim ad minim.Lorem ipsum dolor sit consectetur
                                        adipiscing
                                        elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad
                                        minim.Lorem
                                        ipsum dolor sit consectetur adipiscing elit do eiusmod </p>
                                </div>
                            </li>
                            <li>
                                <div className="Industries-service">
                                    <div className="Industries-left-border position-relative">
                                        <h2 className="ms-4">Healthcare</h2>
                                        <h6 className="mb-4 ms-4">WE WORK WITH</h6>
                                    </div>
                                    <p>Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut
                                        labore et dolore magna ut enim ad minim.Lorem ipsum dolor sit consectetur
                                        adipiscing
                                        elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad
                                        minim.Lorem
                                        ipsum dolor sit consectetur adipiscing elit do eiusmod </p>
                                </div>
                            </li>
                            <li>
                                <div className="Industries-service">
                                    <div className="Industries-left-border position-relative">
                                        <h2 className="ms-4">Manufacturing</h2>
                                        <h6 className="mb-4 ms-4">WE WORK WITH</h6>
                                    </div>
                                    <p>Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut
                                        labore et dolore magna ut enim ad minim.Lorem ipsum dolor sit consectetur
                                        adipiscing
                                        elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad
                                        minim.Lorem
                                        ipsum dolor sit consectetur adipiscing elit do eiusmod </p>
                                </div>
                            </li>
                            <li>
                                <div className="Industries-service">
                                    <div className="Industries-left-border position-relative">
                                        <h2 className="ms-4">Educational</h2>
                                        <h6 className="mb-4 ms-4">WE WORK WITH</h6>
                                    </div>
                                    <p>Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut
                                        labore et dolore magna ut enim ad minim.Lorem ipsum dolor sit consectetur
                                        adipiscing
                                        elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad
                                        minim.Lorem
                                        ipsum dolor sit consectetur adipiscing elit do eiusmod </p>
                                </div>
                            </li>
                            <li>
                                <div className="Industries-service">
                                    <div className="Industries-left-border position-relative">
                                        <h2 className="ms-4">Technology</h2>
                                        <h6 className="mb-4 ms-4">WE WORK WITH</h6>
                                    </div>
                                    <p>Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut
                                        labore et dolore magna ut enim ad minim.Lorem ipsum dolor sit consectetur
                                        adipiscing
                                        elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad
                                        minim.Lorem
                                        ipsum dolor sit consectetur adipiscing elit do eiusmod </p>
                                </div>
                            </li>
                            <li>
                                <div className="Industries-service">
                                    <div className="Industries-left-border position-relative">
                                        <h2 className="ms-4">Transportation</h2>
                                        <h6 className="mb-4 ms-4">WE WORK WITH</h6>
                                    </div>
                                    <p>Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut
                                        labore et dolore magna ut enim ad minim.Lorem ipsum dolor sit consectetur
                                        adipiscing
                                        elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad
                                        minim.Lorem
                                        ipsum dolor sit consectetur adipiscing elit do eiusmod </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="common-margin mt-0">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="counter-image position-relative text-center">
                        <img src="images/counter-image.png" />
                        <div className="count-up position-absolute" id="counter">
                            <div id="yes" className="timer text-white same-fonts" data-from="0" data-to="100" data-speed="1000" data-target="#yesyes"> 
                            </div>
                            <p className="text-white mb-0">Cost-Effectiveness</p>
                             {/* <div>
                                <h2 className="count percent text-white" data-count="100%">
                                    0
                                </h2>
                                <p className="text-white mb-0">Cost-Effectiveness</p>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="section-title text-start">
                        <h4 className="text-body text-uppercase">Why companies work with us?</h4>
                        <p className="my-4">Our team is constillation of top talent from India.
                            We united <br/>to provide greate indian
                            services with high quality <br/>engeniring skills for all who looking for it.
                        </p>
                        <div className="ps-2">
                            <p><img src="images/star-gradiants.png" /> We complete work on time, completely fullfiling and
                                exceeding client’s expectations.</p>
                            <p><img src="images/star-gradiants.png" /> Unlike many others, we don’t go over budget.</p>
                            <p><img src="images/star-gradiants.png" /> We have experience in multiple technologies.</p>
                            <p className="mb-4"><img src="images/star-gradiants.png" /> We will take care on a project at any
                                stage form
                                analysis to testing.</p>
                            <a href="#" className="common-btn text-decoration-none">Discuss Project <img
                                    src="images/right-arrow.png" /></a>
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

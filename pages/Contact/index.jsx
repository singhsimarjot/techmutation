export default function Contact() {
  return (
    <>
        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
        tabindex="-1">
        <div class="modal-dialog modal-dialog-centered m-0">
            <div class="modal-content position-relative d-flex justify-content-center">
                <div class="position-absolute vector-image">
                    <img src="images/border-menu-image.png" class="img-fluid" />
                </div>
                <div class="modal-header">
                    <div type="button" class="btn-close-2 position-absolute top-0 bottom-0 d-flex align-items-center"
                        data-bs-dismiss="modal" aria-label="Close"><img src="images/cross-modals.png"/></div>
                </div>
                <div class="modal-body d-flex align-items-center">
                    <div class="flex-center p-5 model-menus">
                        <ul class="nav flex-column">
                            <li class="nav-item delay-1"><a class="nav-link" href="hire-expert">Hire an expert</a></li>
                            <li class="nav-item delay-2"><a class="nav-link" href="industries">Industries</a></li>
                            <li class="nav-item delay-3"><a class="nav-link" href="about-us">About Us</a></li>
                            <li class="nav-item delay-4"><a class="nav-link" href="contact-us">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="position-relative">
        <div class="bg-contact-hero">
            <div class="w-100">
              <div class="logo-top">
                  <div class="container p-0">
                      <div class="tech-logo py-4">
                          <a href="/"><img src="images/tech-logo.png" alt="logo" /></a>
                      </div>
                  </div>
              </div>
  
              <div class="hero-part">
                  <div class="container">
                      <div class="align-items-center d-flex justify-content-between hero-wrapper common-margin contact-us">
                          <div class="business-title0">
                              <h1 class="sametitle grandiattitle">Get In
                                  <br/>Touch</h1>
                          </div>
                          <div class="menu-bar" data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                              <div class="bar1"></div>
                              <div class="bar2"></div>
                              <div class="bar3"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>

       
</section>

<section class="form-contact marign-negtive">
    <div class="content pt-0">   
        <div class="container">
          <div class="row align-items-stretch no-gutters contact-wrap">
            <div class="col-md-12 col-lg-8 p-0">
              <div class="form h-100">
                <div class="d-flex justify-content-between">
                <h3 class="text-body">Send us a message</h3>
                <img src="images/mail-icon.png" class="h-100" />
                </div>
                <form class="mb-5 position-relative" method="post" id="contactForm" name="contactForm">
                  <div class="row">
                    <div class="col-md-6 form-group mb-5">
                      <label for="" class="col-form-label">Name *</label>
                      <input type="text" class="form-control" name="name" id="name" placeholder="Your name" />
                    </div>
                    <div class="col-md-6 form-group mb-5">
                      <label for="" class="col-form-label">Email *</label>
                      <input type="text" class="form-control" name="email" id="email"  placeholder="Your email" />
                    </div>
                  </div>
    
                  <div class="row">
                    <div class="col-md-6 form-group mb-5">
                      <label for="" class="col-form-label">Phone</label>
                      <input type="text" class="form-control" name="phone" id="phone"  placeholder="Phone #" />
                    </div>
                    <div class="col-md-6 form-group mb-5">
                      <label for="" class="col-form-label">Company</label>
                      <input type="text" class="form-control" name="company" id="company"  placeholder="Company  name" />
                    </div>
                  </div>
    
                  <div class="row">
                    <div class="col-md-12 form-group mb-5">
                      <label for="message" class="col-form-label">Message *</label>
                      <textarea class="form-control" name="message" id="message" cols="30" rows="4"  placeholder="Write your message"></textarea>
                    </div>
                  </div>
                  <div class="row position-absolute group-bttn">
                    <div class="col-md-12 form-group">
                       <a href="#" class="round-btns rounded-circle"> <img src="images/send-icon.png" class="" /></a>
                    </div>
                  </div>
                </form>   
    
              </div>
            </div>
            <div class="col-md-12 col-lg-4 p-0">
              <div class="contact-info h-100 position-relative">
                <div class="contact-bottom-image position-absolute bottom-0">
                  <img src="images/Industries_menus.png" />
                </div>
                <h5 class="text-white mb-5">Contact Information</h5>
                <ul class="list-unstyled">
                  <li class="d-flex">
                    <img src="images/contact-location.png" class="h-100" />
                    <span class="text-white"> Science & Technology Entrepreneurs' Park, Guru Nanak Dev Engineering College, Gill, Road, Ludhiana</span>
                  </li>
                  <li class="d-flex mb-5">
                    <img src="images/mail-contacts.png" class="h-100 me-2" />
                    <span class="text-white"> contact@ddeveloperz.com</span>
                  </li>

                  <li class="d-flex pt-4">
                    <a href="#" class="me-4"><img src="images/facebook-icon.png" /></a>
                    <a href="#"><img src="images/akar-icons_instagram-fill.png" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>      
</section>

        <footer class="text-center text-white footer-main">
            <div class="container">
                <div class="py-3 my-4">
                    <div class="footer-logo py-5">
                        <img src="images/tech-logo.png" alt="logo" />
                    </div>
                    <ul class="nav justify-content-center border-bottom pb-4 mb-3">
                        <li class="nav-item"><a href="about-us" class="nav-link px-4 text-muted">ABOUT US</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-4 text-muted">SERVICES</a></li>
                        <li class="nav-item"><a href="hire-expert" class="nav-link px-4 text-muted">HIRE US</a></li>
                        <li class="nav-item"><a href="contact-us" class="nav-link px-4 text-muted">CONTACT US</a></li>
                    </ul>
                    <p class="text-center text-muted copyright-text">© 2022 TECHMUTATION ALL RIGHT RESERVED</p>
                </div>
            </div>
        </footer>
    </>
  )
}

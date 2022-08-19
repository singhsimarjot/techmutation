import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Title from '../components/Title'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import Header from '../components/Header'
export default function Contact() {
  return (
    <div>
      <Head>
      <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Contact Us</title>
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/slick-theme.css" />
    <link rel="stylesheet" href="css/slick.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous">
    </link>
    <link rel="stylesheet" href="css/applicationSS.css"/>
      </Head>
      <Header isContactPage={true} titlename="Get In Touch"/>
                           


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
<Footer/>
      </div>
  )
}

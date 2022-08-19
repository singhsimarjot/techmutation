import React from 'react'

function AboutSecThree() {
  return (
    <div>
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
    </div>
  )
}

export default AboutSecThree
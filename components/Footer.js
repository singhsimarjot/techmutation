import React from 'react'

function Footer() {
  return (
    <div>
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
    </div>
  )
}

export default Footer
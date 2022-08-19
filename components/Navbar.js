import React from 'react'

function Navbar() {
  return (
    <div> 
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
    </div>
  )
}

export default Navbar
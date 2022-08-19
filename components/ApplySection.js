import React from 'react'

function ApplySection() {
  return (
    <div>
         <section className="apply-section">
     <div className="bg-looking common-spaces w-100 parallax" style={{backgroundImage: 'url(images/looking-photo.jpg)'}} >
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
    </div>
  )
}

export default ApplySection
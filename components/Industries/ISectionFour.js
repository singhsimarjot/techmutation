import React from 'react'

function ISectionFour() {
  return (
    <div>
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
    </div>
  )
}

export default ISectionFour
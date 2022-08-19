import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'
import MenuBars from './MenuBars'
import Title from './Title'
import HeaderImage from './HeaderImage'

function Header(props) {
    const { titlename , HeadrImge, isContactPage} = props

  return (
    <div>
        <Navbar/> 
        <Logo/>
       
        <section className={isContactPage ? "hero-part" :  "hero-part position-relative"}>
        <div className="container p-0">
            <div className={ isContactPage ? "align-items-center d-flex justify-content-between hero-wrapper common-margin contact-us " : " align-items-center justify-content-between d-flex responsive-mm hero-wrapper py-5 about-us"}>
                <div className={isContactPage ? "business-title0" : "hire-title"}>
                <h1 className={isContactPage ? "sametitle grandiattitle" : "grandiat-hire grandiattitle "} >{titlename}</h1>
                </div>
                <div className="align-items-center d-flex">
                    <div className="hire-vector-image hover-effect zoom-same position-relative">
                        <img src={HeadrImge} />
                        <MenuBars/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
  )
}

export default Header
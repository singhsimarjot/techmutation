import React from 'react'
function HSectionFour() {
  return (
    <div><section className="hire-box-popup">
    <div id="popup1" className="overlay">
        <div className="popup">
            <a className="close" href=""><img src="images/cross-hire-popup.png" /></a>
            <div className="contents">
                <h3 className="mb-5 grandiattitle">Quick Contact</h3>
                <form>
                    <input type="text" name="username" className="username form-control" placeholder="Username"/>
                    <input type="email" id="email" name="email" className="username form-control" placeholder="Email"/>
                    <input type="tel" id="phone" name="phone" className="password form-control" placeholder="Phone"/>
                    <input className="btn login apply-text border-0 text-white mt-5" type="submit" value="Apply Now" />
                </form>
            </div>
        </div>
    </div>
</section></div>
  )
}

export default HSectionFour
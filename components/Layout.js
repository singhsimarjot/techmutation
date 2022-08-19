import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'
import HireExpert from '../pages/HireExpert'
function Layout({children}) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default Layout
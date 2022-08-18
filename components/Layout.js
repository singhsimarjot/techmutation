import React from 'react'
import Nav from './Nav';

function Layout({childern}) {
  return (
    <div>
        <Nav/>
        {childern}
    </div>
  )
}

export default Layout
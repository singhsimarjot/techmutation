import React from 'react'

function HeaderImage(props) {
   const { HeadrImge } = props
  return (
    <div>
      <div className="hire-vector-image hover-effect zoom-same position-relative">
        <img src= {HeadrImge } />
    </div>
    </div>
  )
}

export default HeaderImage

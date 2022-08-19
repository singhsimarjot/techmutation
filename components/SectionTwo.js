import React from 'react'

function SectionTwo(props) {
    const { TagLine } = props 
  return (
    <div>
    <section className="development-text grey-commons">
     <div className="container">
         <div className="grandiattitle common-spaces">
             <h2 className="text-center lh-sm m-0">
             {TagLine}
             </h2>
         </div>
     </div>
    </section>
    </div>
   
  )
}

export default SectionTwo
import React from 'react'

const BrandCard = ({image}) => {
  return (
    <div className='proCard my-3 '>
         <div className='brand-card  col-xs-12 col-sm-6 col-md-4 col-lg-3 ' >
            <img src={image} alt='' />
        </div>
      
    </div>
  )
}

export default BrandCard

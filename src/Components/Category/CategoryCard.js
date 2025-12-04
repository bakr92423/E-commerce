import React from 'react'

const CategoryCard = ({title,img}) => {
  return (
    <div className='row mb-5' >
      <div className='cart d-flex justify-content-center align-items-center  ' >
        <div className=' d-flex justify-content-center align-items-center boxImg ' ><img src={img} alt='' /></div>
        <p>{title}</p>

      </div>
      
    </div>
  )
}

export default CategoryCard

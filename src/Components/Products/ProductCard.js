import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({key,id, name,price,description,quantity,category,subCategory,brand,sold,image}) => {
  return (
    <div className='proCard my-3 ' >
        <Link to={`/product/${id}`}  >
        <div className='card  col-xs-12 col-sm-6 col-md-4 col-lg-3 ' >
            <img src={image} alt='' />
            <div className='info' >
              <p className='detals' >{description}</p>
              <div className='box-price ' >
              <p className='rate mx-1' ><i class="fa-regular fa-star"></i>{sold}</p>
              <p className='price mx-1' >{price}ج.م</p>
              </div>
            </div>

        </div>
        </Link>
      
    </div>
  )
}

export default ProductCard

import React from 'react'
import { useCart } from 'react-use-cart'

const CardItem = ({name,price,image,updateItemQuantityUp,quantity,item}) => {

   const {
        isEmpty,
        totalUniqueItems,
        totalItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    
      }=useCart()

  return (
<div className="container my-4 CardItem ">
  <div className="row justify-content-center">
    <div className="col-12 col-md-10  d-flex flex-wrap align-items-center justify-content-between p-3 rounded">
      
      <div className="col-12 col-sm-6 col-md-3 text-center mb-4 mb-md-0">
        <img src={image} alt=" " className="img-fluid" />
      </div>

      <div className="col-12 col-sm-6 col-md-3 text-center mb-3 mb-md-0">
        <p className="mb-0">السعر: {price}جنية</p>
      </div>

      <div className="col-12 col-sm-6 col-md-2 text-center d-flex flex-column boxCount ">
        <button className="mb-0  mb-3" onClick={()=>updateItemQuantity(item.id,item.quantity +1)} ><i class="fa-solid fa-plus"></i></button>
        <p className="mb-0  mb-3">{quantity}</p>
        <button className="mb-0 " onClick={()=>updateItemQuantity(item.id,item.quantity -1)} ><i class="fa-solid fa-minus"></i></button>
      </div>
      <div className="col-12 col-sm-6 col-md-3 text-center xmark ">
        <i class="fa-solid fa-xmark" onClick={()=>removeItem(item.id)} ></i>
      </div>

    </div>
  </div>
</div>

  )
}

export default CardItem

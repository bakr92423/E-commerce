import React from 'react'
import { useCart } from 'react-use-cart'

const Btns = () => {

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

    if(isEmpty)return(
      <h3>لايوجد منتاجات بالعربة:</h3>
    )

  return (
    <div className='Btns row  bg-dark d-flex justify-content-center ' >
        <div className='d-flex justify-content-center align-items-center BoxBtns col-12 col-md-10  ' >
          <div className='col-6 col-sm-6 col-md-4 col-lg-2 d-flex justify-content-center mx-2 info ' ><p>اجمالي السعر : {cartTotal}ج.م</p></div>
          <div className='col-6 col-sm-6 col-md-4 col-lg-2 d-flex justify-content-center mx-2 info ' > <p className='' >اجمالي المنتجات : {totalItems}</p></div>
          <div className='col-6 col-sm-6 col-md-4 col-lg-2 d-flex justify-content-center mx-2 mb-2 ' > <button onClick={()=>emptyCart()} > حذف الكل </button></div>
          <div className='col-6 col-sm-6 col-md-4 col-lg-2 d-flex justify-content-center mx-2 mb-2 ' > <button  > شراء  </button></div>
          
        </div>
        

        
       
       
       
    </div>
  )
}

export default Btns

import React from 'react'
import CardItem from '../Components/Cards/CardItem'
import Btns from '../Components/Btns'
import { useCart } from 'react-use-cart'


const CardPage = () => {

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
    <div class="box-category box-cards d-flex justify-content-around cardPage "  >
      
    < Btns />
    {items.map((item)=>{
      return(

        < CardItem name={item.name} image={item.image} price={item.price} updateItemQuantity={updateItemQuantity}

        quantity={item.quantity} item={item}
         />
      )
    })}
   
    </div>
  )
}

export default CardPage

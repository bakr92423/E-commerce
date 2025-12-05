import React, { useEffect, useState } from 'react'
import SubTitle from '../Components/Utlites/SubTitle'
import ProductCard from './Products/ProductCard'
import axios from 'axios'


const CardProductContainer = ({title,btnTitle ,path}) => {

   const [pro,setPro]=useState([])
  
    const mostSell= async()=>{
  
      const getProduct= await axios.get("https://e-commerce-node-alpha.vercel.app/api/product?page=1&limit=8")
      const resData=getProduct.data.data
  
      setPro(resData)
  
    }
  
    useEffect(()=>{
      mostSell()
    },[])
  
  return (
    <div className='my-5' >
        <SubTitle title={title} btnTitle={btnTitle} path={path} />
        <div className='box-cards d-flex justify-content-center ' >

          {pro.map((item)=>{
            return(

              <ProductCard  key={item._id}
              id={item._id} name={item.name} price={item.price} description={item.description} quantity={item.quantity} 
              category={item.category} subCategory={item.subCategory} brand={item.brand} image={item.image} sold={item.sold} />
            )
          })}
       

        </div>
        
      
    </div>
  )
}

export default CardProductContainer

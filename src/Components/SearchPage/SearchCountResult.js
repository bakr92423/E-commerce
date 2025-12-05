import React, { useEffect, useState } from 'react'
import ProductCard from '../../Components/Products/ProductCard'
import Pagination from '../Utlites/Pagination'
import axios from 'axios'
const SearchCountResult = () => {


  const [pro,setPro]=useState([])
    
      const allPro= async()=>{
    
        const getProduct= await axios.get("https://e-commerce-node-alpha.vercel.app/api/product?page=1&limit=20")
        const resData=getProduct.data.data
    
        setPro(resData)
    
      }
    
      useEffect(()=>{
        allPro()
      },[])

  return (
    <div className='row SearchCountResult my-4  ' >
        <div className='d-flex justify-content-between mx-1 align-items-center' >
        <h4>600 منتج متاح...</h4>

<div class="dropdown  ">
<button class=" mx-2 btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
ترتيب حسب
</button>
<ul class="dropdown-menu dropdown-menu-dark">
<li><a class="dropdown-item active" href="#">الاكثر بيعا</a></li>
<li><a class="dropdown-item" href="#">الاعلي سعرا</a></li>
<li><a class="dropdown-item" href="#">الاعلي تقيما</a></li>
<li><hr class="dropdown-divider" /></li>
<li><a class="dropdown-item" href="#">الاحدث</a></li>
</ul>
</div>

        </div>

         <div className='box-cards d-flex justify-content-center ' >
            {pro.map((item)=>{
                       return(
           
                         <ProductCard  key={item._id}
                         id={item._id} name={item.name} price={item.price} description={item.description} quantity={item.quantity} 
                         category={item.category} subCategory={item.subCategory} brand={item.brand} image={item.image} sold={item.sold} />
                       )
                     })}
       
               </div>
               <Pagination />
       
  
      
    </div>
  )
}

export default SearchCountResult

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CategoryHeader = () => {
  

  
    const [cat,setCat]=useState([])
  
    const showCate=async()=>{
      const getCat= await axios.get(`https://e-commerce-node-alpha.vercel.app/api/category?page=1&limit=8`)
      const resDatat=getCat.data.data
      setCat(resDatat)
  
    }

    useEffect(()=>{
      showCate()

    },[])



  return (
    <div className='CategoryHeader row py-2 ' >
      <div className='d-flex justify-content-start align-items-center boxCategoryHeader' >

        {cat.map((item)=>{
          return(
      <p>{item.name}</p>

          )
        })}

     
        <Link to='/allCategory' className='btn' >المزيد</Link>

      </div>
        
      
    </div>
  )
}


export default CategoryHeader

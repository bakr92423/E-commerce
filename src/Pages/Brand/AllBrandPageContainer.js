import React, { useEffect, useState } from 'react'
import SubTitle from '../../Components/Utlites/SubTitle'
import BrandCard from '../../Components/Brand/BrandCard'
import Pagination from '../../Components/Utlites/Pagination'
import axios from 'axios'
const AllBrandPageContainer = () => {
    const title='كل الماركات'
const[brand,setBrand]=useState([])

    const allBrands= async()=>{

      const getBrands= await axios.get('http://localhost:4000/api/brand')
     const  resData=getBrands.data.data
      setBrand(resData)
      
    }

    useEffect(()=>{
      allBrands()
    
    },[])

  return (
    <div>
        <SubTitle title={title} />
        <div className='box-category box-cards d-flex justify-content-around ' >
          {brand.map((item)=>{
            return(

              <BrandCard image={item.image} />
            )
          })}
            
           
           

        </div>
        <Pagination />

      
    </div>
  )
}

export default AllBrandPageContainer

import React, { useEffect, useState } from 'react'
import SubTitle from '../Utlites/SubTitle'
import BrandCard from './BrandCard'
import axios from 'axios'
const BrandCardContainer = () => {
  const title='اشهر الماركات'
  const btnTitle='المزيد'


  const [brand,setBrand]=useState([])

  const getBrands=async()=>{

    const getData=await axios.get('http://localhost:4000/api/brand?limit=8&page=1')
    const resData=getData.data.data
    setBrand(resData)


  }

  useEffect(()=>{
   getBrands()
  },[])



  return (
    <div>
        <SubTitle title={title} btnTitle={btnTitle} path={'/allBrand'} />
        <div className='box-cards d-flex justify-content-center ' >

          {brand.map((item)=>{
            return(
              <BrandCard image={item.image} />

            )
          })}
        
        

      
    </div>
    </div>
  )
}

export default BrandCardContainer

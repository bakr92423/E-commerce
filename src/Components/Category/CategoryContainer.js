import React, { useEffect, useState } from 'react'
import SubTitle from '../Utlites/SubTitle'
import CategoryCard from '../Category/CategoryCard'
import Pagination from '../Utlites/Pagination'
import axios from 'axios'
const CategoryContainer = () => {
    const title= 'التصنيفات'
    const img= '/Images/img/95.png'
    
    const [category,setCategory]=useState([])
    
      const AllCategory= async()=>{
    
        const getData=await axios.get('http://localhost:4000/api/category')
    
        setCategory(getData.data.data)
        
      }
       useEffect(()=>{
          
              AllCategory()
          
            },[])


  return (
    <div>
        <SubTitle title={title} />
        <div className='box-category box-cards d-flex justify-content-around ' >

          {category.map((item)=>{
            return(
             <CategoryCard title={item.name} img={item.image} />

            )
          })}
           
           

        </div>
        <Pagination />
      
    </div>
  )
}

export default CategoryContainer

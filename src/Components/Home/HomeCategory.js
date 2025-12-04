import React, { useEffect, useState } from 'react'
import SubTitle from '../Utlites/SubTitle'
import CategoryCard from '../Category/CategoryCard'
import axios from 'axios'

const HomeCategory = () => {

    const title='التصنيفات'
    const btnTitle='تعرف علي المزيد '
    const img='Images/img/96.png'
    const path='/allCategory'

      const [category,setCategory]=useState([])
    
        const AllCategory= async()=>{
    
        const getData=await axios.get('http://localhost:4000/api/category?limit=5&page=1')
        const resData=getData.data.data
        setCategory(resData)
        console.log(resData);
   
        
        
      }
    
      useEffect(()=>{
    
        AllCategory()
    
      },[])


  return (
    <div>
        <SubTitle title={title} btnTitle={btnTitle} path={path} />
        <div className='box-cards d-flex justify-content-center   ' >

           {category.map((item)=>{
        return(
          
          <CategoryCard title={item.name} img={item.image}  />

        )
      })}

        
        
        


        </div>
       
      
    </div>
  )
}

export default HomeCategory

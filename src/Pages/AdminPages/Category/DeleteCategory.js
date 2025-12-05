import React, { useEffect, useState } from 'react'
import Said from '../../../Components/Admin/Said'
import Delete from '../../../Components/Admin/Delete/Delete'
import axios from 'axios'

const DeleteCategory = () => {

  const formTitle='حذف فئة'
    const selectTitle=' الفئة'
    const btnTitle='حذف '
      const [selectCategory,setSelectCategory]=useState([])


    useEffect(()=>{

      const showCategory=async ()=>{

        const resCategory=await axios.get(`https://e-commerce-node-alpha.vercel.app/api/category`)
        const resData=resCategory.data.data
        setSelectCategory(resData)
        console.log(resData);
        
        

      }
      showCategory()

    },[])

    const DeleteItem= async(id)=>{

      
         await axios.delete(`https://e-commerce-node-alpha.vercel.app/api/category/${id}`)
         const showCategory=async ()=>{

          const resCategory=await axios.get(`https://e-commerce-node-alpha.vercel.app/api/category`)
          const resData=resCategory.data.data
          setSelectCategory(resData)
          console.log(resData);
          
          
  
        }
        showCategory()
    
        
        
    
    }
  


  return (
    <div className='deleteCategoryPage row justify-content-center ' >
        <div className='  col-1 col-md-3 col-lg-2 d-md-block sidebar'><Said/></div>
                <div className='  col-10 col-md-9 col-lg-10 d-flex justify-content-center mt-5' ><Delete
                
                 formTitle={formTitle} selectTitle={selectTitle} btnTitle={btnTitle}
                selectCategory={selectCategory} DeleteItem={DeleteItem} /></div>
      
    </div>
  )
}

export default DeleteCategory

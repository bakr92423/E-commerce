
import React, { useEffect, useState } from 'react'
import Said from '../../../Components/Admin/Said'
import Delete from '../../../Components/Admin/Delete/Delete'
import axios from 'axios'

const DeleteSubCategory = () => {

    const formTitle=' حذف فئة فرعية'
    const selectTitle=' الفئة الفرعية'
    const btnTitle='حذف '

    const [selectCategory,setselectCategory]=useState([])
    useEffect(()=>{
        const getData= async()=>{

   const fetchData= await axios.get('https://e-commerce-node-alpha.vercel.app/api/subCategory')
   const resData= fetchData.data.data
 
   setselectCategory(resData)
  
   

   
    }
  getData()


  
    },[])

    const DeleteItem= async(id)=>{
       await axios.delete(`https://e-commerce-node-alpha.vercel.app/api/subCategory/${id}`)
              const getData= async()=>{

   const fetchData= await axios.get('https://e-commerce-node-alpha.vercel.app/api/subCategory')
   const resData= fetchData.data.data
 
   setselectCategory(resData)
  
   

   
    }
  getData()

    }

    // const onSubmit = (e)=>{
    //   e.preventDefault()

    //   handileDelet()
    // }


  return (
   <div className='DeleteSubCategory row justify-content-center ' >
           <div className=' col-1 col-md-3 col-lg-2  sidebar'><Said/></div>
                   <div className=' col-10 col-md-9 col-lg-9 d-flex justify-content-center mt-5'><Delete 
                    selectCategory={selectCategory}
                   DeleteItem={DeleteItem}

                   formTitle={formTitle} selectTitle={selectTitle} btnTitle={btnTitle} /></div>
         
       </div>
  )
}

export default DeleteSubCategory
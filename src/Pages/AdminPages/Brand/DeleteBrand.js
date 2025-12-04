import React, { useEffect, useState } from 'react'
import Said from '../../../Components/Admin/Said'
import Delete from '../../../Components/Admin/Delete/Delete'
import axios from 'axios'



const DeleteBrand = () => {
    const formTitle='حذف ماركة'
    const selectTitle=' الماركة'
    const btnTitle='حذف '
    
 const [selectCategory,setSelectCategory]=useState([])

 useEffect(()=>{
  const getBrands=async()=>{
    const brandData= await axios.get(`http://localhost:4000/api/brand`)
    const resData= brandData.data.data
    setSelectCategory(resData)
  }
  getBrands()

 },[])

 const DeleteItem= async(id)=>{
    await axios.delete(`http://localhost:4000/api/brand/${id}`)
    const getBrands=async()=>{
      const brandData= await axios.get(`http://localhost:4000/api/brand`)
      const resData= brandData.data.data
      setSelectCategory(resData)
    }
    getBrands()
    


 }

  return (
    <div className='DeleteBrand row justify-content-center ' >
            <div className=' col-1 col-md-3 col-lg-2 d-md-block sidebar'><Said/></div>
            <div className=' col-10 col-md-9 col-lg-10 d-flex justify-content-center mt-5' ><Delete
              selectCategory={selectCategory} DeleteItem={DeleteItem}
             formTitle={formTitle} selectTitle={selectTitle} btnTitle={btnTitle} /></div>
          
        </div>
  )
}

export default DeleteBrand

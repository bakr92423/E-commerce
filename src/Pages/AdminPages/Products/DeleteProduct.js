import React, { useEffect, useState } from 'react'
import Said from '../../../Components/Admin/Said'
import Delete from '../../../Components/Admin/Delete/Delete'
import axios from 'axios'

const DeleteProduct = () => {
      const formTitle='حذف منتج'
    const selectTitle=' المنتج'
    const btnTitle='حذف '
    const [selectCategory,setselectCategory]=useState([])


    useEffect(()=>{
     const getDataPro= async()=>{
        const getData= await axios.get('http://localhost:4000/api/product')
        const resData=getData.data.data
        setselectCategory(resData)

      }
      getDataPro()
    },[])

    const DeleteItem= async(id)=>{
      
      await axios.delete(`http://localhost:4000/api/product/${id}`)
      const getDataPro= async()=>{
        const getData= await axios.get('http://localhost:4000/api/product')
        const resData=getData.data.data
        setselectCategory(resData)

      }
      getDataPro()
    }

  return (
    <div className='deleteCategoryPage row d-flex justify-content-center ' >
           <div className='col-md-3 col-lg-2 d-md-block sidebar'><Said/></div>
                   <div className='col-md-9 col-lg-10 d-flex justify-content-center mt-5' ><Delete
                   selectCategory={selectCategory} DeleteItem={DeleteItem}
                    formTitle={formTitle} selectTitle={selectTitle} btnTitle={btnTitle} /></div>
         
       </div>
  )
}

export default DeleteProduct

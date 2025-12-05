import React, { useEffect, useState } from 'react'
import Said from '../../../Components/Admin/Said'
import Update from '../../../Components/Admin/Update/Update'
import axios from 'axios'

const UpdateSubCategory = () => {
      const formTitle='تعديل الفئة الفرعية'
    const selectTitle='  الفئة الفرعية'
    const placeholder='ادخل الفئة الفرعية الجديدة'
    const btnTitle='تعديل '

    const [subCategory,setsubCategory]=useState([])
    const [subCategoryId,setsubCategoryId]=useState()
    const [newName,setNewName]=useState()

    useEffect(()=>{
      const getData= async()=>{

        const resData= await axios.get('https://e-commerce-node-alpha.vercel.app/api/subCategory')

        const fetchData=resData.data.data
        setsubCategory(fetchData)
         

















        
      }
      getData() 
    },[])

    const handleSubmit= async({id,name})=>{
      
      try{
        const updateData= await axios.patch(`https://e-commerce-node-alpha.vercel.app/api/subCategory/${id}`,{name:newName})
        alert('تم تعديل الفئة الفرعية بنجاح')
        const resData= await axios.get('https://e-commerce-node-alpha.vercel.app/api/subCategory')

        const fetchData=resData.data.data
        setsubCategory(fetchData)
       setsubCategoryId('')
        setNewName('')


      }catch(error){
        alert("خطأ في تعديل الفئة الفرغيه")
      }

    }

    const onSubmit=(e)=>{
      e.preventDefault()
     handleSubmit({id:subCategoryId,name:newName})
   

    }


  return (
    <div className='UpdateSubCategory row d-flex justify-center ' >
           <div className=' col-1 col-md-3 col-lg-2 d-md-block sidebar'><Said formTitle={formTitle} selectTitle={selectTitle} placeholder={placeholder} btnTitle={btnTitle} /></div>
                <div className=' col-10 col-md-9 col-lg-9 d-flex justify-content-center mt-5' >
                     <form className='updateForm px-5 d-flex justify-content-center text-center ' onSubmit={onSubmit} >
            <h4 className='mt-3 mb-5' >{formTitle}</h4>
            <div className='boxUpdateForm  d-flex justify-content-center align-items-center flex-column ' >
                <select className='' value={subCategoryId} onChange={(e)=>setsubCategoryId(e.target.value)} >
                  <option >اختر {selectTitle} المراد تعديلها</option>
                  {subCategory.map((item)=>{
                    return(

                      <option value={item._id} >{item.name}</option>
                    )
                  })}
             
                </select>
                <input value={newName} onChange={(e)=>setNewName(e.target.value)} className='form-control text-center '  type='text' placeholder={placeholder} />
                
                <button className='btn px-5 mt-2 '  >{btnTitle}</button>
            </div>
            
            
            
        
      
         </form>
                </div>
              
      
    </div>
  )
}

export default UpdateSubCategory

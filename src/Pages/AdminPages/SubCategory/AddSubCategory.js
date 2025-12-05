import React, { useState } from 'react'
import Said from '../../../Components/Admin/Said'
import FormAdd from '../../../Components/Admin/add/FormAdd'
import axios from 'axios'

const AddSubCategory = () => {
      const title=' اضافة فئة فرعية'
    const btn='اضافة '
    const placeholder=' ادخل اسم الفئة الفرعية'

    const [name,setName]=useState('')

    const handalSubmit= async (e)=>{

      e.preventDefault()
      if(!name){
        alert('الرجاء ادخال اسم الفئة الفرعية')
      }
      
      try{
        const submitData= await axios.post('https://e-commerce-node-alpha.vercel.app/api/subCategory',{name},{
          headers:{'Content-Type':'application/json'}
        }
        
      )
      alert("🎉 تم إضافة الفئة بنجاح!");
      setName('')
      
      }catch(error){
           console.error("❌ خطأ أثناء الإضافة:", error.response?.data || error.message);
      alert("❌ حدث خطأ أثناء إضافة الفئة الفرعية!");

      }

    }

  return (
    <div className='AddSubCategory d-flex justify-center row ' >
         
                <div className=' col-2 col-md-3 col-lg-2 d-md-block sidebar' ><Said /></div>
            <div className=' col-8 col-md-9 col-lg-9 d-flex justify-content-center mt-5 ' >
               <form className='formAdd ' onSubmit={handalSubmit} >
             <h4  className='d-flex justify-content-center mt-3' >{title}</h4>
            <div className='d-flex justify-content-center align-items-between boxForm flex-column' >
                  <input value={name} onChange={(e)=>setName(e.target.value)} type='text' className='text-center mt-3 '  placeholder={placeholder} required /> 
           
             <button className='btn ' >{btn}</button>

            </div>
           


        </form>
            </div>
      
    </div>
    
  )
}

export default AddSubCategory

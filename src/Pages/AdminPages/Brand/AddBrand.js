import React, { useState } from 'react'
import Said from '../../../Components/Admin/Said'
import FormAdd from '../../../Components/Admin/add/FormAdd'
import axios from 'axios'

const AddBrand = () => {
    const title='اضافة ماركة'
    const btn='اضافة '
    const placeholder='ادخل اسم الماركة'

    const [name,setName]=useState('')
    const [image,setImage]=useState('')

    const handalImg=(e)=>{
      const file=e.target.files[0]
      setImage(file)
     
    }

    const handalSubmit= async(e)=>{
      e.preventDefault()

      if(! name || !image){
        alert(' الرجاء ملئ جميع الحقول')
      }
      try{
        const imageFormData= new FormData()
        imageFormData.append('image',image)

        const imageRes= await axios.post('https://e-commerce-node-alpha.vercel.app/api/upload',imageFormData,{ headers: { "Content-Type": "multipart/form-data" } })
        const imageUrl=imageRes.data.imageUrl


        const brandData={name:name,image:imageUrl}

        const brandRes= await axios.post('https://e-commerce-node-alpha.vercel.app/api/brand',brandData,{headers:{'content-type':'application/json'}})
        const resData= brandRes.data.data
        console.log(resData);
          alert("🎉 تم إضافة الماركه بنجاح!");
          setName('')
          setImage(null)
           e.target.reset()

        
      }
      catch(error){
         console.error("❌ خطأ أثناء الإضافة:", error.response?.data || error.message);
      alert("❌ حدث خطأ أثناء إضافة الماركه!");
      }
    }


  return (
          <div className=" AddBrand ">
  <div className="row">
    
    {/* Sidebar */}
    <div className="col-2  col-md-3 col-lg-2 mb-4 mb-md-0">
      <div className="sidebar">
        <Said />
      </div>
    </div>

    {/* Main Content */}
    <div className=" d-flex justify-content-center  col-8 col-md-9 col-lg-9 d-flex justify-content-center align-items-start">
      <FormAdd title={title} btn={btn} placeholder={placeholder}
      handalSubmit={handalSubmit} name={name} setName={setName} handalImg={handalImg}
       />
    </div>
    
  </div>
</div>

  )
}

export default AddBrand

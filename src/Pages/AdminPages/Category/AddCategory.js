import React, { useRef, useState } from 'react'
import FormAdd from '../../../Components/Admin/add/FormAdd'
import Said from '../../../Components/Admin/Said'
import axios from 'axios'

const AddCategory = () => {
  const [name,setName]=useState('')
  const[image,setImage]=useState(null)
    const fileInputRef = useRef(null); // ✅ مرجع لحقل الصورة
  const handalImg=(e)=>{
    const file= e.target.files[0]
    setImage(file);
    
  }

  

  const handalSubmit= async(e)=>{
    e.preventDefault()
    if(!name || !image){
      alert("الرجاء ملئ جميع الحقول")
    }
  

    try {
      const imageFormData= new FormData()
      imageFormData.append("image",image)
      const imageRes= await axios.post('http://localhost:4000/api/upload',imageFormData,{ headers: { "Content-Type": "multipart/form-data" } })
      const imageUrl= imageRes.data.imageUrl
      
      const categoryData={name,image: imageUrl}
      const categoryRes= await axios.post('http://localhost:4000/api/category',categoryData,
        { headers: { "Content-Type": "application/json" } }
        

      
        
        
      )
      console.log(categoryRes);
      if (categoryRes.data.errors && categoryRes.data.errors.length > 0) {
      alert(categoryRes.data.errors[0].msg);
      return; // علشان ما يظهرش "Done"
   }

      alert("🎉 تم إضافة الفئة بنجاح!");
      setName('')
 
      setImage(null)
        e.target.reset();
    
      
    } catch (error) {
      
      console.error("❌ خطأ أثناء الإضافة:", error.response?.data || error.message);
      alert("❌ حدث خطأ أثناء إضافة الفئة!");
    }


  }


    const title='اضافة فئة'
    const btn='اضافة '
    const placeholder='ادخل اسم الفئة'
    
  return (
      <div className=' row addCategory d-flex justify-center  ' >
    
        <div className=' col-5 col-md-3 col-lg-2 d-md-block sidebar' ><Said /></div>
    <div className='  col-3 col-md-9 col-lg-9 d-flex justify-content-center mt-5 ' ><FormAdd title={title} btn={btn} handalSubmit={handalSubmit} name={name} setName={setName} handalImg={handalImg} placeholder={placeholder}  /></div>
    </div>
    
    
      
   
  )
}

export default AddCategory

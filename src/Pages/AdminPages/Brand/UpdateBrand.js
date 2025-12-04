import React, { useEffect, useState } from 'react'
import Said from '../../../Components/Admin/Said'
import Update from '../../../Components/Admin/Update/Update'
import axios from 'axios'

const UpdateBrand = () => {

    const formTitle='تعديل ماركة'
    const selectTitle=' الماركة'
    const placeholder='ادخل الماركة الجديدة'
    const btnTitle='تعديل '

     const [selectCategory, setSelectCategory] = useState([]);
       const [selectedId, setSelectedId] = useState('');
       const [newName, setNewName] = useState('');
       const [newImage, setNewImage] = useState(null);

     useEffect(()=>{
      const getBrands= async()=>{
        const getData= await axios.get('http://localhost:4000/api/brand')
        const resData=getData.data.data
        setSelectCategory(resData)
      }
      getBrands()

     },[])

       // ✅ التعامل مع عملية التعديل
       const handleSubmit = async ({ id, name, image }) => {
         try {
           let imageUrl;
     
           // إذا تم اختيار صورة جديدة
           if (image instanceof File) {
             const formData = new FormData();
             formData.append('image', image);
     
             const uploadRes = await axios.post('http://localhost:4000/api/upload', formData, {
               headers: { 'Content-Type': 'multipart/form-data' },
             });
     
             imageUrl = uploadRes.data.imageUrl;
           } else {
             // استخدام الصورة القديمة من الفئة المحددة
             const selectedCategory = selectCategory.find(cat => cat._id === id);
             imageUrl = selectedCategory?.img || '';
           }
     
           // تحديث الفئة
           console.log("🔍 البيانات المُرسلة:", { id, name, imageUrl });
     
           const updateRes = await axios.patch(`http://localhost:4000/api/brand/${id}`, {
             name:newName,
             img: imageUrl,
           });
     
           alert('✅ تم التحديث بنجاح');
           console.log(updateRes.data);
                const getBrands= async()=>{
        const getData= await axios.get('http://localhost:4000/api/brand')
        const resData=getData.data.data
        setSelectCategory(resData)
      }
      getBrands()
           setNewName('')
           setSelectedId("")
         } catch (error) {
           console.error('❌ فشل التحديث:', error);
           alert('❌ حدث خطأ أثناء التحديث');
         }
       };
     
       // ✅ عند إرسال النموذج
       const onSubmit = (e) => {
         e.preventDefault();
     
         if (!selectedId || !newName) {
           alert('❌ يرجى تحديد فئة وكتابة اسم جديد');
           return;
         }
         
     
         handleSubmit({ id: selectedId, name: newName, image: newImage });
       };


  return (
      <div className='UpdateBrand row d-flex justify-center  ' >
        <div className='  col-1 col-md-3 col-lg-2  sidebar'><Said formTitle={formTitle} selectTitle={selectTitle} placeholder={placeholder} btnTitle={btnTitle} /></div>
        <div className='  col-10 col-md-9 col-lg-9 d-flex justify-content-center mt-5' ><Update
         formTitle={formTitle} selectTitle={selectTitle} placeholder={placeholder} btnTitle={btnTitle}
            selectCategory={selectCategory}selectedId={selectedId}
          setSelectedId={setSelectedId} newName={newName}
          setNewName={setNewName}
          newImage={newImage}
          setNewImage={setNewImage}
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
        
          /></div>
      
    </div>
  )
}

export default UpdateBrand

import React, { useEffect, useState } from 'react'
import Said from '../../Components/Admin/Said'
import axios from 'axios'
import Delete from '../../Components/Admin/User/User'

  const formTitle='حذف مستخدم'
    const selectTitle=' المستخدم'
    const btnTitle="حذف" 

 
     



const DeleteUser = () => {
       const [selectCategory,setselectCategory]=useState([])

    useEffect(()=>{
         const showCategory=async ()=>{

        const resCategory=await axios.get(`http://localhost:4000/api/user`)
        const resData=resCategory.data.data
        setselectCategory(resData)
        console.log(resData[0].firstName);
        
        

      }
      showCategory()
    },[])

    const DeleteItem = async (id) => {
  try {
      const token = localStorage.getItem("token"); // جلب التوكن

    await axios.delete(`http://localhost:4000/api/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // إرسال التوكن
      },
    });
    console.log('✅ تم الحذف');

    // بعد الحذف، جلب القائمة المحدثة
    const resCategory = await axios.get(`http://localhost:4000/api/user`, {
      withCredentials: true, // مهم جدًا أيضًا هنا
    });

    const resData = resCategory.data.data;
    setselectCategory(resData);
    console.log('✅ تم التحديث');
    
  } catch (err) {
    console.error('❌ خطأ:', err);
  }
};

  return (
     <div className='deleteCategoryPage row justify-content-center ' >
            <div className='col-md-3 col-lg-2 d-md-block sidebar'><Said/></div>
                    <div className='col-md-9 col-lg-10 d-flex justify-content-center mt-5' ><Delete
                    
                     formTitle={formTitle} selectTitle={selectTitle} btnTitle={btnTitle}
                    selectCategory={selectCategory} DeleteItem={DeleteItem}  /></div>
                   
                    
          
        </div>
  )
}

export default DeleteUser

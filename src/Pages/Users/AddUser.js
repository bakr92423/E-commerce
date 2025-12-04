import axios from 'axios'
import React, { useState } from 'react'

const AddUser = () => {

    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[email,setEmail]=useState('')
    const[role,setRole]=useState('')
    const[password,setPassword]=useState('')
 


const createUser = async () => {
  try {
    const data = {
      firstName,
      lastName,
      email,
      role,
      password
    };

    const sendData = await axios.post(
      'http://localhost:4000/api/user',
      data,
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    // ✅ لو السيرفر رجع errors
    if (sendData.data.errors && sendData.data.errors.length > 0) {
      alert(sendData.data.errors[0].msg);
      return; // علشان ما يظهرش "Done"
   }

   alert("تم إنشاء المستخدم بنجاح ✅");
setFirstName('')
setLastName('')
setEmail('')
setRole('')
setPassword('')

    // ✅ لو العملية نجحت فعلاً
    console.log(sendData.data);

  } catch (error) {
    const msg = error.response?.data?.errors?.[0]?.msg;
    console.log(msg || error);
    alert(msg || "حدث خطأ غير متوقع");
  }
};



  






  return (
    <div className='login my-5 d-flex justify-content-center '  >
         <div className='form d-flex regForm justify-content-around align-items-center flex-column ' >
                <h3 className='text-center' >انشاء حساب </h3>
                <input className=' px-4 py-1 text-center' type='text' required placeholder='اسم الاول' value={firstName} onChange={(e)=>setFirstName(e.target.value)}  />
                <input className=' px-4 py-1 text-center' type='text' required placeholder='اسم  العائلة' value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                <input className=' px-4 py-1 text-center' type='text' required placeholder='البريد الالكتروني' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <select value={role} onChange={(e)=>setRole(e.target.value)} >
                    <option className=' px-4 py-1 text-center' >نوع المستخدم</option>
                    <option value='user' >User</option>
                    <option value='admin' >Admin</option>
                </select>
                <input className=' px-4 py-1 text-center' type='password' required placeholder='كلمة المرور' value={password} onChange={(e)=>setPassword (e.target.value)} />
                
                <button  className='btn px-5' onClick={()=>createUser()} >انشاء</button>
                
    
            </div>


    </div>
  )
}

export default AddUser

import axios from 'axios'
import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'


const LoginPage = () => {

  
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('') 
  const navigate = useNavigate()
  

  const handileSubmit=async()=>{

  
    try{
      const data={email,password}
      const sentData= await axios.post('http://localhost:4000/api/login',data,{ headers:{'Content-Type':'application/json'}})
    const {token}=sentData.data
    const role=sentData.data.cheeckUser.role
    console.log(role);
    
   
  
    if (sentData.status === 200) {
       Cookies.set('token',token,{expires:1})
         // حفظ التوكن
    localStorage.setItem("token", token);
    console.log("✅ تسجيل الدخول ناجح:",  token);
       if(role==='admin'){
        navigate('/admin')
      }else{
         navigate('/')

       }
       
      } else {
        alert('البريد أو كلمة المرور غير صحيحة')
      }

    }catch(error){
       alert(error.response.data)
    }
  }


  return (
    <div className='login my-5 d-flex justify-content-center '>
        <div className='form d-flex justify-content-around align-items-center flex-column ' >
            <h3 className='text-center' >تسجيل دخول</h3>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} className=' px-4 py-1 text-center' type='text' placeholder='اسم المستخدم' />
            <input value={password} onChange={(e)=>setPassword(e.target.value)}  className=' px-4 py-1 text-center' type='password' placeholder='كلمة المرور' />
            <p>ليس لديك حساب؟<Link to='/regstration' >اضغط هنا</Link> </p>
            <Link to='' className='btn px-5' onClick={handileSubmit} type='button' >دخول</Link>
            

        </div>
      
    </div>
  )
}

export default LoginPage

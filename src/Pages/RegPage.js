import React, { useState } from 'react'
import Reg from '../Components/Reg'
import axios from 'axios'

const RegPage = () => {

  const [firstName,setfirstName]=useState('')
  const [lastName,setlastName]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')


  const handileSubmit=async()=>{
    try{
      const data = { firstName, lastName, email, password }
    const sendData=  await axios.post('https://e-commerce-node-alpha.vercel.app/api/user',data,{
      headers:{'Content-Type':'application/json'}
    })
    if(sendData.data.errors){
      console.log(sendData.data.errors[0].msg);
      alert(sendData.data.errors[0].msg);
      console.log(email);
      return;

    }
  
    

    alert("🎉 تم التسجيل بنجاح!")
    setfirstName('')
    setlastName('')
    setemail('')
    setpassword('')

    }catch(errors){
      alert(errors.response?.data?.errors?.[0]?.msg)
    
      
    }
  }

  const onsubmit=()=>{
    handileSubmit()
  }


  return (
    <div className='login my-5 d-flex justify-content-center ' >
        <Reg 
        firstName={firstName}
        setfirstName={setfirstName}
        lastName={lastName}
        setlastName={setlastName}
        email={email}
        setemail={setemail}
        password={password}
        setpassword={setpassword}
        onsubmit={onsubmit}
        />
    </div>
  )
}

export default RegPage

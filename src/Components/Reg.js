import React from 'react'


const Reg = ({firstName,setfirstName,lastName,setlastName,email,setemail,password,setpassword,onsubmit}) => {
  return (
     
            <div className='form d-flex regForm justify-content-around align-items-center flex-column ' >
                <h3 className='text-center' >انشاء حساب </h3>
                <input className=' px-4 py-1 text-center' type='text' required placeholder='اسم الاول' value={firstName} onChange={(e)=>setfirstName(e.target.value)} />
                <input className=' px-4 py-1 text-center' type='text' required placeholder='اسم  العائلة' value={lastName} onChange={(e)=>setlastName(e.target.value)} />
                <input className=' px-4 py-1 text-center' type='text' required placeholder='البريد الالكتروني' value={email} onChange={(e)=>setemail(e.target.value)} />
                <input className=' px-4 py-1 text-center' type='password' required placeholder='كلمة المرور' value={password} onChange={(e)=>setpassword(e.target.value)} />
                
                <button  className='btn px-5' onClick={()=>onsubmit()} >تسجيل</button>
                
    
            </div>
          
      
  )
}

export default Reg

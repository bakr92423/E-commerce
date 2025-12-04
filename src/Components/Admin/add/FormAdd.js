import React from 'react'

const FormAdd = ({title,btn,placeholder,handalSubmit,name,setName,handalImg}) => {
  return (
    <div  className=" my-4" >
        <form className='formAdd pt-4  ' onSubmit={handalSubmit} >
             <h4  className='d-flex justify-content-center mt-3' >{title}</h4>
            <div className='d-flex justify-content-center align-items-between boxForm flex-column' >
                  <input type='text' className='text-center mt-3 ' value={name} onChange={(e)=>setName(e.target.value)} placeholder={placeholder} required /> 
                  <input type='file' className='text-center' onChange={handalImg} placeholder={placeholder} required /> 
             <button className='btn ' >{btn}</button>

            </div>
           


        </form>
      
    </div>
  )
}

export default FormAdd

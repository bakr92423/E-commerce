import React from 'react'

const User = ({firstName,lastName,email ,role}) => {
  return (
    <div className=' d-flex justify-content-center mt-5 ' >
        <div className='BoxUser d-flex justify-content-around bg-info col-lg-8 align-items-center py-2 ' >

             <div className='titleUser d-flex justify-content-around  col-lg-12 align-items-center' >
                  <p className='' >الاسم</p>
             <p className='' >البريد الالكترونى</p>
             <p className='' >نوع المستخدم</p>
             <p className='' >كلمة السر</p>

             </div>

             <div className=' dataUser d-flex justify-content-around  col-lg-12 align-items-center'  >
                <p className='' >{firstName} {lastName} </p>
             <p className='' >{email}</p>
             <p className='' >{role}</p>
             <p className='' >*********</p>
             </div>
        </div>
      
    </div>
  )
}

export default User

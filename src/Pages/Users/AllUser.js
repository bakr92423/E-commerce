import React, { useEffect, useState } from 'react'
import User from '../../Components/Admin/ProfileUser/User'
import axios from 'axios'
import Said from '../../Components/Admin/Said'

const AllUser = () => {
  const [user,setUser]=useState([])

  const getUsers=async()=>{
    const data= await axios.get(`https://e-commerce-node-alpha.vercel.app/api/user`)
    const resData=data.data.data
    setUser(resData)
  }

  useEffect(()=>{
    getUsers()

  },[])

  return (
  <div className='brandPage  ' >
     <div className="row">
    
    {/* Sidebar */}
    <div className="col-3 col-md-3 col-lg-2 mb-4 mb-md-0">
      <div className="sidebar">
        <Said />
      </div>
    </div>
    <div className="col-8 col-md-9 col-lg-9  " >
       {user.map((item)=>{
      return(
        
        <User firstName={item.firstName} lastName={item.lastName} email={item.email} role={item.role} />
      )
    })}

    </div>

         

   
  
           

   
    
  </div>
  
      </div>
  )
}

export default AllUser

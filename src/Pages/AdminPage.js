import React from 'react'
import Said from '../Components/Admin/Said'

const AdminPage = () => {
  return (
    <div className='adminPage' >
        <row className='row' >
            <div className=' col-md-3 col-lg-2 bg-info xx d-md-block sidebar said' >

                 <Said/>
            </div>

        </row>
      
    </div>
  )
}

export default AdminPage

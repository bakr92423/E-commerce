import React from 'react'

const Update = ({formTitle,selectTitle,placeholder,btnTitle,selectCategory,selectedId,handleSubmit,onSubmit, setSelectedId,newName,setNewName,newImage,setNewImage}) => {
   
  return (
    <div className=''>
    
        <form className='updateForm px-5 d-flex justify-content-center text-center  ' onSubmit={onSubmit} >
            <h4 className='mt-3 mb-5' >{formTitle}</h4>
            <div className='boxUpdateForm  d-flex justify-content-center align-items-center flex-column ' >
                <select className='' value={selectedId} onChange={(e)=>setSelectedId(e.target.value)}  >
                  <option>اختر {selectTitle} المراد تعديلها</option>
                  {selectCategory.map((item)=>{
                    return(
                      <option value={item._id} >{item.name}</option>

                    )
                  })
                  }
               
                </select>
                <input className='form-control text-center ' value={newName} onChange={(e)=>setNewName(e.target.value)}  type='text' placeholder={placeholder} />
                <input className='form-control text-center '  type='file' placeholder={placeholder} onChange={(e) => setNewImage(e.target.files[0])} />
                
                <button className='btn px-5 mt-2 ' >{btnTitle}</button>

            </div>
            
            
        
      
         </form>
        
      
    </div>

      

  )
}

export default Update

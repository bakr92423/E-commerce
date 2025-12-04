import React from 'react'

const UpdatePro = ({titlePage,product,onSubmit,newName, selectedId,setSelectedId,newPrice,newQuantity,newDiscreption,
  setnewName,setnewPrice,setnewQuantity,setnewDiscreption,setnewAssesment,selectCategory,selectSubCategory,selectBrand,
  setnewCategory,setnewSubCategory,setnewBrand,setnewImage,newAssesment,newCategory,newSubCategory,newBrand,
  categoryId,setcategoryId,subCategoryId,setsubCategoryId,brandId,setbrandId
}) => {
  return (
      <form className='update-Form col-md-9 col-lg-10 mt-5 align-items-between row d-flex ' >
      <div className='box-row ' >
        <h5 className='col-12' >{titlePage} </h5>
        <div className='col-12 d-flex justify-content-center ' >
        <select className='selectPro col-5 '  value={selectedId} onChange={(e)=>setSelectedId(e.target.value)} >
          <option  >اختر الصنف</option>
          {product.map((item)=>{
            return(
              <option value={item._id} >{item.name}</option>

            )
          })}
        </select></div>
     
       
        <input type='text' placeholder='الاسم' className='col-10 col-md-2 col-lg-3  ' value={newName} onChange={(e)=>setnewName(e.target.value)} />
        <input type='text' placeholder='السعر' className='col-10 col-md-2 col-lg-3  ' value={newPrice} onChange={(e)=>setnewPrice(e.target.value)} />
        <input type='text' placeholder='الكمية' className='col-10 col-md-2 col-lg-3  'value={newQuantity} onChange={(e)=>setnewQuantity(e.target.value)} />
        <input type='text' placeholder='الوصف' className='col-10 col-md-2 col-lg-3  'value={newDiscreption} onChange={(e)=>setnewDiscreption(e.target.value)} />
        <input type='text' placeholder='التقيم' className='col-10 col-md-2 col-lg-3  'value={newAssesment} onChange={(e)=>setnewAssesment (e.target.value)} />
        <select className='col-10 col-md-2 col-lg-3  ' value={categoryId} onChange={(e)=>setcategoryId(e.target.value)} >
            <option className='text-center' >اختر الفئة</option>
            {selectCategory.map((item)=>{
              return(

                <option className='text-center' value={item._id} >{item.name}</option>
              )
            })}
           
        </select>
          <select className='col-10 col-md-2 col-lg-3  ' value={subCategoryId} onChange={(e)=>setsubCategoryId(e.target.value) } >
            <option className='text-center' >اختر الفئة الفرعيه</option>
            {selectSubCategory.map((item)=>{
              return(

                <option className='text-center' value={item._id} >{item.name}</option>
              )
            })}
           
        </select>
           <select className='col-10 col-md-2 col-lg-3   mr-5' value={brandId} onChange={(e)=>setbrandId(e.target.value) } >
            <option className='text-center'  >اختر الماركة </option>
            {selectBrand.map((item)=>{
              return(

                <option className='text-center' value={item._id} >{item.name}</option>
              )
            })}
           
        </select>
        <input type='file' placeholder='صورة جديده' className='col-10 col-md-2 col-lg-3   input-file mr-5 '  />
       
        
        <div className='' ><button className='btn btnAdd ' type='button' onClick={()=>onSubmit()} >تعديل</button></div>
        </div>
        
      
      
        
    </form>
  )
}

export default UpdatePro

import React from 'react'

const Product = ({name,price,quantity,discreption,assesment,category,subCategory,brand,image,handileImage,onSubmit
  ,setName,setPrice,setQuantity,setDiscreption,setAssesment,setCategory,setSubCategory,setBrand,setImage,categoryData,subCategoryData,brandData}
) => {
  return (
          <form className='update-Form col-md-9 col-lg-12  mt-5 align-items-between row d-flex ' onSubmit={onSubmit} >
      <div className='box-row ' >
        <h5 className='col-12' >اضافة منتج </h5>
        <input type='text' placeholder='اسم الصنف' className='col-10 col-md-3 ' value={name} onChange={(e)=>setName(e.target.value)}    />
        <input type='text' placeholder='السعر' className='col-10 col-md-3 ' required  value={price} onChange={(e)=>setPrice(e.target.value)} />
        <input type='text' placeholder='الكمية' className='col-10 col-md-3 ' required  value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
        <input type='text' placeholder='الوصف' className='col-10 col-md-3 ' required  value={discreption} onChange={(e)=>setDiscreption(e.target.value)} />
        <input type='text' placeholder='التقيم' className='col-10 col-md-3 ' required  value={assesment} onChange={(e)=>setAssesment(e.target.value)} />
        <select className='col-10 col-md-2 col-lg-3 ' value={category} onChange={(e)=>setCategory(e.target.value)} >
            <option className='text-center' >اختر الفئة</option>
            {categoryData.map((item)=>{
              return(
                <option value={item._id} className='text-center' >{item.name}</option>

              )
            })}
           
        </select>
          <select className='col-10 col-md-3 ' required value={subCategory} onChange={(e)=>setSubCategory(e.target.value)} >
          <option className='text-center' >اختر الفئة الفرعيه</option>
            {subCategoryData.map((item)=>{
           return(
            <option className='text-center' value={item._id} > {item.name} </option>
           )

            })}
          
           
        </select>
           <select className='col-10 col-md-3  mr-5' required value={brand} onChange={(e)=>setBrand(e.target.value)} >
            <option className='text-center' >اختر الماركة </option>
            {brandData.map((item)=>{
              return(

                <option className='text-center' value={item._id} >{item.name} </option>
              )
            })}
           
        </select>
        <input type='file' placeholder='صورة جديده' className='col-10 col-md-3  input-file required '  onChange={(e)=>setImage(e.target.files[0])}  />
       
        
        <div className='' ><button className='btn btnAdd '  >اضافة</button></div>
        </div>
        
      
      
        
    </form>
  )
}

export default Product

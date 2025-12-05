import React, { useEffect, useState } from 'react'
import Said from '../../../Components/Admin/Said'
import Product from '../../../Components/Admin/Products/Product'
import axios from 'axios'

const AddProduct = () => {
    const [categoryData,setCategoryData]=useState([])
    const [subCategoryData,setSubCategoryData]=useState([])
    const [brandData,setBrandData]=useState([])
    const [name,setName]=useState('')
  const [price,setPrice]=useState('')
  const [quantity,setQuantity]=useState('')
  const [discreption,setDiscreption]=useState('')
  const [assesment,setAssesment]=useState('')
  const [category,setCategory]=useState('')
  const [subCategory,setSubCategory]=useState('')
  const [brand,setBrand]=useState('')
  const [image,setImage]=useState(null)

  useEffect(()=>{
    const gateCategoryData=async()=>{
      const getData= await axios.get(`https://e-commerce-node-alpha.vercel.app/api/category`)
      const resData=getData.data.data
      console.log(resData);
      
      setCategoryData(resData)
    }
    const gateSubCategoryData=async()=>{
      const getData= await axios.get(`https://e-commerce-node-alpha.vercel.app/api/subCategory`)
      const resData=getData.data.data
      console.log(resData);
      
      setSubCategoryData(resData)
    }
    const gateBrandData=async()=>{
      const getData= await axios.get(`https://e-commerce-node-alpha.vercel.app/api/brand`)
      const resData=getData.data.data
   
      
      setBrandData(resData)
    }
    gateCategoryData()
    gateSubCategoryData()
    gateBrandData()
    
  },[])





  const handileImage=(e)=>{
    const file=e.target.files[0]
    if(file){

      setImage(file.name)
    }

  }
  

  const handileSubmit= async()=>{
  

   try{
     const formImage= new FormData()
    formImage.append('image',image)
    const sendImage= await axios.post('https://e-commerce-node-alpha.vercel.app/api/upload',formImage,{ headers: { "Content-Type": "multipart/form-data" } })
    const imageUrl=sendImage.data.imageUrl
    console.log(imageUrl);

    const productData={
      name:name,
      price:price,
      description:discreption,
      quantity:quantity,
      sold:assesment,
      category:category,
      subCategory:subCategory,
      brand:brand,
      image:imageUrl
    }
   

    const sendData= async()=>{

      const sendDetailsPro= await axios.post('https://e-commerce-node-alpha.vercel.app/api/product',productData,
        { headers: { "Content-Type": "application/json" } })
        if(sendDetailsPro.data.errors){
         return( alert(sendDetailsPro.data.errors[0].msg ,"❌"))

        }
            alert("🎉 تم إضافة المنتج بنجاح!");

            
            

    }

    sendData()

    }catch(error){
      console.error("❌ خطأ أثناء الإضافة:", error.response?.data || error.message);
      alert("❌ حدث خطأ أثناء إضافة الفئة!");
      

    }

   }
   const onSubmit=(e)=>{
    e.preventDefault()
 
      handileSubmit()

setName('')
setPrice('')
setQuantity('')
setDiscreption('')
setAssesment('')
setCategory('')
setSubCategory('')
setBrand('')
e.target.reset()
   
   }


  return (
  <div className=' row AddProduct d-flex  ' >
      
          <div className='col-1 col-md-3 col-lg-2 d-md-block sidebar' ><Said /></div>
      <div className=' col-11 col-md-7 col-lg-9 d-flex justify-content-center mt-5 productContainer ' ><Product
      name={name}
      setName={setName}
      price={price}
      setPrice={setPrice}
      quantity={quantity}
      setQuantity={setQuantity}
      discreption={discreption}
      setDiscreption={setDiscreption}
      assesment={assesment}
      setAssesment={setAssesment}
      category={category}
      setCategory={setCategory}
      subCategory={subCategory}
      setSubCategory={setSubCategory}
      brand={brand}
      setBrand={setBrand}
      image={image}
      setImage={setImage}
      handileImage={handileImage}
      onSubmit={onSubmit}
      categoryData={categoryData}
      subCategoryData={subCategoryData}
      brandData={brandData}

       /></div>
      </div>
  )
}

export default AddProduct

import React, { useEffect, useState } from 'react'
import Said from '../../../Components/Admin/Said'
import UpdatePro from '../../../Components/Admin/Products/UpdateProduct'
import axios from 'axios'

const UpdateProduct = () => {
  const titlePage='تعديل منتج'

  const [product,setproduct]=useState([])
  const [productInfo,setproductInfo]=useState([])
  const [selectedId, setSelectedId] = useState('');
  const [categoryId, setcategoryId] = useState('');
  const [subCategoryId, setsubCategoryId] = useState('');
  const [brandId, setbrandId] = useState('');
  const [selectCategory, setselectCategory] = useState([]);
  const [selectSubCategory, setselectSubCategory] = useState([]);
  const [selectBrand, setselectBrand] = useState([]);
  const [newName,setnewName]=useState('')
  const [newPrice,setnewPrice]=useState('')
  const [newQuantity,setnewQuantity]=useState('')
  const [newDiscreption,setnewDiscreption]=useState('')
  const [newAssesment,setnewAssesment]=useState('')
  const [newCategory,setnewCategory]=useState('')
  const [newSubCategory,setnewSubCategory]=useState('')
  const [newBrand,setnewBrand]=useState('')
  const [newImage,setnewImage]=useState(null)


  useEffect(()=>{
    const getDataProduct=async()=>{
      const dataProduct=await axios.get('http://localhost:4000/api/product')
      const dataRes=dataProduct.data.data
      setproduct(dataRes)
    }
    const getDataCategory=async()=>{
      const dataProduct=await axios.get('http://localhost:4000/api/category')
      const dataRes=dataProduct.data.data
      setselectCategory(dataRes)
    }
    const getDataSubCategory=async()=>{
      const dataProduct=await axios.get('http://localhost:4000/api/subcategory')
      const dataRes=dataProduct.data.data
      setselectSubCategory(dataRes)
    }
    const getDataBrand=async()=>{
      const dataProduct=await axios.get('http://localhost:4000/api/brand')
      const dataRes=dataProduct.data.data
      setselectBrand(dataRes)
    }
   
    getDataProduct()
    getDataCategory()
    getDataSubCategory()
    getDataBrand()
   
  },[])

  const handleSubmit=async({id,name,price,image,description,quantity,sold,category,subCategory,brand})=>{
    try{
      let imageUrl;

      // إذا تم اختيار صورة جديدة
      if (image instanceof File) {
        const formData = new FormData();
        formData.append('image', image);

        const uploadRes = await axios.post('http://localhost:4000/api/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        imageUrl = uploadRes.data.imageUrl;
      } else{
            // استخدام الصورة القديمة من الفئة المحددة
            const selectedProduct = product.find(cat => cat._id === id);
            imageUrl = selectedProduct?.img || '';


         
              const dataProduct=await axios.get(`http://localhost:4000/api/product/${id}`)
              const dataRes=dataProduct.data.data
              setproductInfo(dataRes)
              console.log(dataRes);
      
            const updateData=await axios.patch(`http://localhost:4000/api/product/${id}`,{
              name:newName||dataRes.name,
              price:newPrice||dataRes.price,
              image:newImage||dataRes.image,
              description:newDiscreption||dataRes.description,
              quantity:newQuantity||dataRes.quantity,
              sold:newAssesment||dataRes.sold,
              category:categoryId||dataRes.category,
              subCategory:subCategoryId||dataRes.subCategory,
              brand:brandId||dataRes.brand
              
            })
            console.log(updateData.data);
            alert('✅ تم التحديث بنجاح');
            selectedId('')
            setnewName('')
            setnewPrice('')
            setnewQuantity('')
            setnewDiscreption('')
            setnewAssesment('')
            setnewCategory('')
            setnewSubCategory('')
            setnewBrand('')
            setnewImage('')
          

      }
    }catch (error) {
      console.error('❌ فشل التحديث:', error);
      alert('❌ حدث خطأ أثناء التحديث');
    }

  }
  const onSubmit = ()=>{
 
    handleSubmit({id:selectedId,
      name:newName,
      price:newPrice,
      image:newImage,

       description:newDiscreption,
      quantity:newQuantity,
      sold:newAssesment,
      category:categoryId,
      subCategory:subCategoryId,
      brand:brandId})

  }

  return (
     <div className=' row UpdateProduct d-flex  ' >
          
              <div className='col-1 col-md-3 col-lg-2 d-md-block sidebar' ><Said /></div>
          <div className='col-10 col-md-9 col-lg-9 d-flex justify-content-center mt-5 productContainer ' ><UpdatePro
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          categoryId={categoryId}
          setcategoryId={setcategoryId}
          subCategoryId={subCategoryId}
          setsubCategoryId={setsubCategoryId}
          brandId={brandId}
          setbrandId={setbrandId}
          selectCategory={selectCategory}
          selectSubCategory={selectSubCategory}
          selectBrand={selectBrand}
          product={product}
          onSubmit={onSubmit}
          newName={newName}
          newPrice={newPrice}
          newQuantity={newQuantity}
          newDiscreption={newDiscreption}
          newAssesment={newAssesment}
          newCategory={newCategory}
          newSubCategory={newSubCategory}
          newBrand={newBrand}
          newImage={newImage}
          setnewImage={setnewImage}
          setnewName={setnewName}
          setnewPrice={setnewPrice}
          setnewQuantity={setnewQuantity}
          setnewDiscreption={setnewDiscreption}
          setnewAssesment={setnewAssesment}
          setnewCategory={setnewCategory}
          setnewSubCategory={setnewSubCategory}
          setnewBrand={setnewBrand}

           titlePage={titlePage} /></div>
          </div>
  )
}

export default UpdateProduct

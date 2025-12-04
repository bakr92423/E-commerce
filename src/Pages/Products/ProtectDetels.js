import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCart } from 'react-use-cart'


const ProtectDetels = () => {


  const {addItem}=useCart()
  const {id}=useParams()
  const [product,setProduct]=useState(null)
  const [atherProduct,setatherProduct]=useState([])



 
  

  useEffect(()=>{

     const fetchData= async()=>{
  const getData= await axios.get(`http://localhost:4000/api/product/${id}`);
  const resData=getData.data.data
  
  console.log('rerers',resData);
  const categoryId=resData.category
  const getAtherData= await axios.get(`http://localhost:4000/api/category/${categoryId}/product`);
  setProduct(resData)
  const resAtherData=getAtherData.data.data
  setatherProduct(resAtherData)
  console.log('opo',resAtherData);
  

  }

    fetchData()
  },[id])

 if (!product) {
    return <h3 className="text-center mt-5">⏳ جاري تحميل تفاصيل المنتج...</h3>
  }

  
  return (

   
    <div className='detelsPage d-flex justify-content-center container ' >
        <h3 className='offer text-center bg-info col-lg-5 col-md-3 col-12 alighn ' >الشحن مجاني لفترة محدوده علي جميع المنتجات</h3>


        <div className='boxDetelse row d-flex justify-content-around ' >
            <img  className='col-5 col-sm-5 col-lg-4 '   src={product.image}   alt=''/>

            <div className='info d-flex align-items-start flex-col col-sm-5 col-md-4 col-lg-6 ' >

                <p className=' col-12' >{product.description}</p>
                  <br/>
                <div className='col-12  d-flex justify-content-around ' >
                  <p className=' justify-content-center ' >{product.price}ج.م</p>
                  <p className='col-10' ><i class="fa-regular fa-star"></i>{product.sold}</p>
                </div>
                <div  className='col-10 py-3  d-flex justify-content-center ' >
                    <button
      className='btn btn-lg btn-info py-2'
      onClick={() =>
        addItem({
          id: product._id,       // لو مش موجود هيعمل Error
          name: product.name,
          price: product.price,
          image: product.image,
          description: product.description,
        })
      }
    >
      اضافة الي العربة
    </button>
                  </div>
                
               


            </div>
            

        </div>

         <div className='proCard d-flex justify-content-around pro-Card my-3 ' >
          {atherProduct.map((item)=>{
            return(
              <Link to={`/product/${item._id}`}  >
                <div className='card  col-xs-12 col-sm-6 col-md-4 col-lg-4 my-3 ' >
                    <img src={item.image} alt='' />
                    <div className='info' >
                      <p className='detals' >{item.description}</p>
                      <div className='box-price ' >
                      <p className='rate mx-1' ><i class="fa-regular fa-star"></i>{item.sold}</p>
                      <p className='price mx-1' >{item.price}ج.م</p>
                      </div>
                    </div>
        
                </div>
                </Link>

            )
          })}
                
         
          
                
               
              
            </div>
        
    
        
      
    </div>
  )
}

export default ProtectDetels

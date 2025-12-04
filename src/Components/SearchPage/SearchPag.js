import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../Products/ProductCard";

const SearchPage = () => {
  const [params] = useSearchParams();
  const keyword = params.get("keyword");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!keyword) return;

      const res = await axios.get(
        `http://localhost:4000/api/product?keyWord=${keyword}`
      );
      setProducts(res.data.data);
    };

    fetchData();
  }, [keyword]);

  return (
     <div className='my-5' >
     
        <div className='box-cards d-flex justify-content-center ' >

          {products.map((item)=>{
            return(

              <ProductCard  key={item._id}
              id={item._id} name={item.name} price={item.price} description={item.description} quantity={item.quantity} 
              category={item.category} subCategory={item.subCategory} brand={item.brand} image={item.image} sold={item.sold} />
            )
          })}
       

        </div>
        
      
    </div>
  );
};

export default SearchPage;



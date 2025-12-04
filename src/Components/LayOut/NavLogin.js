import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from 'react-use-cart'

const NavLogin = () => {

   const {
          totalUniqueItems
        }=useCart()

        const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!search.trim()) return;

    navigate(`/search?keyword=${search}`);

    setSearch(""); // تفريغ الحقل مثل أمازون
  };



  return (
    <div className='nave mb-5 ' >
           <div className='row  d-flex justify-content-between bg-dark align-items-center sm-nav ' >

<Link to='/' className='col-lg-2 col-md-2 mx-4  ' >store</Link>


<div className='col-lg-7 col-md-7  text-center ' >
    <form className='d-flex justify-content-center' >
    <input class="form-control me-2 text-center " type="search" placeholder="Search" aria-label="Search" value={search}  onChange={(e)=>setSearch(e.target.value)} />
   <button 
  type="button"
  className="btn btnSearch btn-outline-success mx-2 text-dark searchPageBtn"
  onClick={handleSearch}
>
  بحث
</button>

    </form>
</div>
<div className='col-lg-2 col-md-2  text-center ' >
<Link to='/login' className='mx-4 ' ><i class="fa-solid fa-user"></i></Link>
<Link to='/card' className=' cardIcon  ' > <p>{totalUniqueItems}</p> <i class="fa-solid fa-cart-shopping"></i></Link>
    
</div>





</div>
         <div className='row d-flex justify-content-between bg-dark align-items-center lg-nav ' >

            <Link to='/' className='col-5   mx-2' >store</Link>
           
            <div className='col-5  text-center ' >
            <Link to='/login' className='mx-4 ' ><i class="fa-solid fa-user"></i></Link>
           <Link to='/card' className=' cardIcon' > <p>{totalUniqueItems}</p> <i class="fa-solid fa-cart-shopping"></i></Link>
                
            </div>
            <div className='col-12 my-2 text-center ' >
                <form className='d-flex justify-content-center' >
                <input class="form-control me-2 text-center " type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
                  <button 
  type="button"
  className="btn btnSearch btn-outline-success mx-2 text-dark searchPageBtn"
  onClick={handleSearch}
>
  بحث
</button>
                </form>
            </div>
  
        
     


    </div>
    

    </div>
   
  )
}

export default NavLogin

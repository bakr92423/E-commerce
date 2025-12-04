import React from 'react'
import './App.css';
import LayOut from './Components/LayOut/Layout';
import HomePage from './Pages/Home/HomePage';
import 'swiper/css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/Auth/LoginPage';
import AllCategory from './Pages/Category/AllCategory';
import AllBrand from './Pages/Brand/AllBrand';

import ShopProductsPage from './Pages/Products/ShopProductsPage';
import AdminPage from './Pages/AdminPage';
import AddCategory from './Pages/AdminPages/Category/AddCategory';
import UpdateCat from './Pages/AdminPages/Category/UpdateCat';
import DeleteCategory from './Pages/AdminPages/Category/DeleteCategory';
import AddSubCategory from './Pages/AdminPages/SubCategory/AddSubCategory';
import UpdateSubCategory from './Pages/AdminPages/SubCategory/UpdateSubCategory';
import DeleteSubCategory from './Pages/AdminPages/SubCategory/DeleteSubCategory';
import AddBrand from './Pages/AdminPages/Brand/AddBrand';
import UpdateBrand from './Pages/AdminPages/Brand/UpdateBrand';
import DeleteBrand from './Pages/AdminPages/Brand/DeleteBrand';
import AddProduct from './Pages/AdminPages/Products/AddProduct';
import DeleteProduct from './Pages/AdminPages/Products/DeleteProduct';
import UpdateProduct from './Pages/AdminPages/Products/UpdateProduct';
import RegPage from './Pages/RegPage';
import CardPage from './Pages/CardPage';
import AllUser from './Pages/Users/AllUser';
import DeleteUser from './Pages/Users/DeleteUser';
import AddUser from './Pages/Users/AddUser';
import ProtectDetels from './Pages/Products/ProtectDetels';
import { CartProvider } from 'react-use-cart';
import SearchPag from './Components/SearchPage/SearchPag';
import SearchPage from './Components/SearchPage/SearchPag';





const App = () => {

 

   const rout=createBrowserRouter([{path:'/',element:<LayOut/>, children:[
    {path:'/',element:<HomePage/>},
    {path:'/login',element:<LoginPage/>},
    {path:'/allCategory',element:<AllCategory/>},
    {path:'/allBrand',element:<AllBrand/>},
    {path:'/shopProduct',element:<ShopProductsPage/>},
    {path:'/admin',element:<AdminPage/>},
    {path:'/addCategory',element:<AddCategory/>},
    {path:'/updateCategory',element:<UpdateCat/>},
    {path:'/deleteCategory',element:<DeleteCategory/>},
    {path:'/addSubCategory',element:<AddSubCategory/>},
    {path:'/updateSubCategory',element:<UpdateSubCategory/>},
    {path:'/deleteSubCategory',element:<DeleteSubCategory/>},
    {path:'/addBrand',element:<AddBrand/>},
    {path:'/updateBrand',element:<UpdateBrand/>},
    {path:'/deleteBrand',element:<DeleteBrand />},
    {path:'/addProduct',element:<AddProduct />},
    {path:'/updateProduct',element:<UpdateProduct />},
    {path:'/deleteProduct',element:<DeleteProduct />},
    {path:'/regstration',element:<RegPage />},
    {path:'/card',element:<CardPage />},
    {path:'/allUser',element:<AllUser />},
    {path:'/addUser',element:<AddUser />},
    {path:'/deleteUser',element:<DeleteUser />},
    {path:'/product/:id',element:<ProtectDetels />},
    {path: "/search", element: <SearchPage /> },
  ] }])


  return (
    <div>
       <CartProvider>
      <RouterProvider router={rout} ></RouterProvider>
        </CartProvider>
     
      
    
    
      
    </div>
  )
}

export default App

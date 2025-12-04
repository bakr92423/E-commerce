import React from 'react'
import { Link } from 'react-router-dom'

const Said = () => {
  return (
   <div className="">
  {/* زر القائمة يظهر فقط على الشاشات الصغيرة */}
  <button
    className="btn btn-primary d-block d-md-none mb-5"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#sidebarMenu"
    aria-expanded="false"
    aria-controls="sidebarMenu"
  >
    القائمة
  </button>

  {/* القائمة الجانبية */}
  <div className="collapse d-md-block  " id="sidebarMenu">
    <nav className="bg-light p-3 rounded col-md-3 col-lg-2 ">
      <h5 className="text-center mb-4 ">لوحة التحكم</h5>

      {/* الفئات */}
      <div className="mb-2">
        <a
          className="mainTitle d-block px-3 py-2"
          data-bs-toggle="collapse"
          href="#homeMenu"
          role="button"
          aria-expanded="false"
        >
          الفئات
        </a>
        <div className="collapse submenu" id="homeMenu">
          <Link to="/addCategory" className="d-block px-3 py-1">إضافة فئة</Link>
          <Link to="/updateCategory" className="d-block px-3 py-1">تعديل فئة</Link>
          <Link to="/deleteCategory" className="d-block px-3 py-1">حذف فئة</Link>
        </div>
      </div>

      {/* الفئات الفرعية */}
      <div className="mb-2">
        <a
          className="mainTitle d-block px-3 py-2"
          data-bs-toggle="collapse"
          href="#productsMenu"
          role="button"
          aria-expanded="false"
        >
          الفئات الفرعية
        </a>
        <div className="collapse submenu" id="productsMenu">
          <Link to="/addSubCategory" className="d-block px-3 py-1">إضافة فئة فرعية</Link>
          <Link to="/updateSubCategory" className="d-block px-3 py-1">تعديل فئة فرعية</Link>
          <Link to="/deleteSubCategory" className="d-block px-3 py-1">حذف فئة فرعية</Link>
        </div>
      </div>

      {/* الماركات */}
      <div className="mb-2">
        <a
          className="mainTitle d-block px-3 py-2"
          data-bs-toggle="collapse"
          href="#ordersMenu"
          role="button"
          aria-expanded="false"
        >
          الماركات
        </a>
        <div className="collapse submenu" id="ordersMenu">
          <Link to="/addBrand" className="d-block px-3 py-1">إضافة ماركة</Link>
          <Link to="/updateBrand" className="d-block px-3 py-1">تعديل ماركة</Link>
          <Link to="/deleteBrand" className="d-block px-3 py-1">حذف ماركة</Link>
        </div>
      </div>

     

      {/* المنتجات */}
      <div className="mb-2">
        <a
          className="mainTitle d-block px-3 py-2"
          data-bs-toggle="collapse"
          href="#orderMenu"
          role="button"
          aria-expanded="false"
        >
          المنتجات
        </a>
        <div className="collapse submenu" id="orderMenu">
          <Link to="/addProduct" className="d-block px-3 py-1">إضافة منتج</Link>
          <Link to="/updateProduct" className="d-block px-3 py-1">تعديل منتج</Link>
          <Link to="/deleteProduct" className="d-block px-3 py-1">حذف منتج</Link>
        </div>
        
      </div>
      <div className="mb-2">
        <a
          className="mainTitle d-block px-3 py-2"
          data-bs-toggle="collapse"
          href="#Users"
          role="button"
          aria-expanded="false"
        >
          المستخدمين
        </a>
        <div className="collapse submenu" id="Users">
          <Link to="/allUser" className="d-block px-3 py-1"> عرض المستخدمين</Link>
          <Link to="/addUser" className="d-block px-3 py-1">انشاء مستخدم</Link>
          <Link to="/deleteUser" className="d-block px-3 py-1">حذف مستخدم</Link>
        </div>
        
      </div>
    </nav>
  </div>
</div>
  )
}

export default Said

import React, { useState } from 'react';

const Delete = ({ formTitle, selectTitle, btnTitle, selectCategory, DeleteItem }) => {
  const [selectedId, setSelectedId] = useState('');



  return (
    <div>
      <form className='updateForm deleteForm px-5 d-flex justify-content-center text-center'>
        <h4 className='mt-3 mb-5'>{formTitle}</h4>
        <div className='boxUpdateForm d-flex justify-content-center align-items-center flex-column'>
          <select className='' value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
            <option value="">اختر {selectTitle} المراد حذفه</option>
          {selectCategory.map((item)=>{
           
            
                    return(
                      <option value={item._id} >{`${item.firstName} ${item.lastName}` } </option>

                    )
                  })
                  }
          </select>

          <button
            className='btn px-5 mt-2'
            type='button'
            onClick={() => {
              if (selectedId){
                DeleteItem(selectedId);
                alert("تم الحف بنجاح");
               setSelectedId({
                selectedId:''
               })
              } else {
                alert('❌ الرجاء اختيار فئة أولاً');
              }
            }}
          >
            {btnTitle}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Delete;
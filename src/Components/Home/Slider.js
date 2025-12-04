import React from 'react'
import { Autoplay} from 'swiper/modules'
import {Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';


const Slider = () => {
  return (
    <div className='row slider' >

<Swiper className='swiper col-12 '  slidesPerView={1} modules={[Autoplay]}
      pagination={true}
      loop={true}
      spaceBetween={50}
      autoplay={{delay:6000}}

>

  <SwiperSlide className=' swiperSlide ' > 
    <div className='boxData' >
    <img src='/Images/img/91.png' alt='' />
  <div className='boxText ' >
    <p>هنا خصم كبير</p>
    <p>خصم يصل الي 50 %</p>
  </div>
  </div>
   </SwiperSlide>
  <SwiperSlide className=' swiperSlide ' > 
    <div className='boxData' >
    <img src='/Images/img/92.png' alt='' />
  <div className='boxText ' >
    <p>هنا خصم كبير</p>
    <p>خصم يصل الي 50 %</p>
  </div>
  </div>
   </SwiperSlide>
  <SwiperSlide className=' swiperSlide ' > 
    <div className='boxData' >
    <img src='/Images/img/93.png' alt='' />
  <div className='boxText ' >
    <p>هنا خصم كبير</p>
    <p>خصم يصل الي 50 %</p>
  </div>
  </div>
   </SwiperSlide>
 

</Swiper>

      
    </div>
  )
}

export default Slider

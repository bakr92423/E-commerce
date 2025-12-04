import React, { useEffect, useState } from 'react'
import Slider from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import CardProductContainer from '../../Components/CardProductContainer'
import MostSellCardProductContainer from '../../Components/MostSellCardProductContainer '
import BrandCardContainer from '../../Components/Brand/BrandCardContainer'


const HomePage = () => {

 


  return (
    <div className='home container ' >
      <Slider />
      <HomeCategory />

      <CardProductContainer  title='الاكثر مبيعا' btnTitle=' المزيد ' path={'/shopProduct'} />
      <MostSellCardProductContainer  title='الاعلي تقيما ' btnTitle=' المزيد ' path={'/shopProduct'}  />
      <BrandCardContainer />

     

    </div>
  )
}

export default HomePage

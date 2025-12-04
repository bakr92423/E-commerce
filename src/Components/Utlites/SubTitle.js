import React from 'react'
import { Link } from 'react-router-dom'

const SubTitle = ({title,btnTitle,path}) => {
  return (
    <div className='row d-flex justify-content-between my-3 '>

        <h2 className='col-5 title' > {title} </h2>
        {
        btnTitle?<div className='col-5 d-flex justify-content-end ' ><Link to={path} ><button className=' btn  text-left moreInfo ' > {btnTitle}</button></Link></div>:<div></div>}
      
    </div>
  )
}

export default SubTitle

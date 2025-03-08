import React from 'react'
import Likebutton from './likebutton'
export const Postcard = ({img,name,content,isLiked}) => {
  return (
    <div className='h-50 w-[100%] flex justify-around  bg-black p- text-white border'>
        <img src={img} alt="image" className='h-[100%] w-50'/>
        <div className='p-10'>

        <h1>{name}</h1>
        <h2>{content}</h2>
        <Likebutton like={isLiked}/>
        </div>
    </div>
  )
}

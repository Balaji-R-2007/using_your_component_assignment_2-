import React, { useState } from 'react'
const Likebutton = ({like}) => {
    const [liked,isliked] = useState({like})
    
  return (
    <div>
        <button onClick={()=>isliked(!liked)} className={`p-5 rounded-2xl ${liked ? 'bg-red-900' : 'bg-blue-400'}`}>
            {liked ? 'liked' : 'like'}
        </button>
    </div>
  )
}

export default Likebutton
import { Star } from 'lucide-react';
import React from 'react'

function rating({rating}:{rating:any}) {
  return (
    <div className=' flex gap-3'>
      {Array.from({length: 5}, (_ , index)=>{
        let fill = Math.max(Math.min((Number(rating) - index* 2 )/2,1),0)* 100 ;
        return(
          <div key={index} className=' relative'>
            <span className=' w-6 h-6'>
              <Star  className=' text-yellow-400'/>
            </span>
            <span className=' w-6 h-6 absolute top-0 left-0 overflow-hidden' 
            style={{width: `${fill}%`}}>
              <Star  className=' text-yellow-400 fill-yellow-400'/>
            </span>
          </div>
        )
     })}
    </div>
  )
}

export default rating
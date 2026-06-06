import { Calendar, TimerReset } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import StarRating from './rating'
import { formatDistanceToNow } from 'date-fns'
function ReviewCard({review}:{review:any}) {
  return (
    <div  className=' border-b border-stone-400 py-2 flex flex-col gap-4'>
       <div className=' w-11/12 flex flex-col gap-1'>
         <div className='  flex items-center'>
            <Image src="/images/Screenshot 2026-05-14 101305.png" alt='N' className='p-1 text-white rounded-full' height={40} width={40} />
            <h2 className=' text-stone-500'>By: {review.user_name}</h2>
        </div>
        <strong className=' text-gray-500'>{review.user_email}</strong>
       </div>
        <div className=' w-11/12 mx-auto mt-6'>
            <StarRating rating={review.rating} />
        </div>
        <div className=' w-11/12 mx-auto bg-stone-300/10 border-l-4 border-stone-700 p-6'>
        <p>{review.comment}</p>
        </div>
        <div className=' flex justify-end text-stone-400 items-center w-full'>
            <Calendar size={20} />
            {formatDistanceToNow(review.created_at , {addSuffix: true})}
            </div>
    </div>
  )
}

export default ReviewCard
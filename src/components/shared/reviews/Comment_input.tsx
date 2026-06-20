"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { createReview } from '@/lib/Actions/review.action'

import { Star } from 'lucide-react'
import React, { useActionState} from 'react'

function CommentInput() {
  const [state , action] = useActionState(createReview, {
    success: false,
    message: "",
  })
  return (
    <div className=' flex flex-col gap-3'>
        <h2  className=' text-xl  text-gray-600 font-medium'>Share Your Review about recently purchased product!</h2>
       <div className=' flex gap-2.5'>
         {Array.from({length: 5} , (_ , index)=>(
          <Star key={index} />
        ))}
       </div>
        <form action={action} className=' w-full flex flex-col gap-3' >
          <Input name='rating' placeholder='Rating' />
          <Input name='user_id' placeholder='user_id' />
          <Input name='product_id' placeholder='product_id' />
        <Textarea name='tInput' placeholder='Write Your Comment...' className=' h-56' />
        <Button type='submit' className=' rounded-md w-fit px-6 py-5'>Send</Button>
        </form>
    </div>
  )
}

export default CommentInput
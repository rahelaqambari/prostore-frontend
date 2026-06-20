'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { createReview } from '@/lib/Actions/review.action';
import React, { useActionState } from 'react'

function ReviewForm() {
    function func( prev:any, formData:any ){
        return { message: '', succes: true };
    }
    const [state, action] = useActionState(createReview, {
        success: false,
        message: '',
    });
  return (
    <div>   
        <h1 className='text-sm text-muted-foreground my-2'>Leave A Comment</h1>
        <form action={action} className='w-full flex flex-col space-y-4'>
        <Input className='w-full' name='rating' placeholder='Rating'/>
        <Input className='w-full' name='product_id' placeholder='Product ID'/>
        <Input className='w-full' name='user_id' placeholder='User ID'/>
        <Textarea className='resize-none h-32' name='comment'/>
        <Button type='submit'>Submit</Button>
        </form>
    </div>
  )
}

export default ReviewForm

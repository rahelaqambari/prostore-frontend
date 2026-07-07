"use client";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea';
import { storeProduct } from '@/lib/Actions/product.action';
import React, { useActionState, useState } from 'react'

function ProductForm() {
    const [data, action] = useActionState(storeProduct,{
        data: "",
        status: false
    });
  return (
    <div>
        <form action={action}  encType='multipart-form-data'>
                <div className='w-full grid grid-cols-1 gap-3 md:gap-4 md:grid-cols-2'>
                <div className='flex flex-col  gap-3'>
                    <Label htmlFor="product_name" >Product Name</Label>
                <Input 
                type='text'
                id='product_name'
                name='product_name'
                   />
                </div>
                <div className='flex flex-col gap-3'>
                    <Label htmlFor="product_price" >Product Price</Label>
                <Input 
                type='number' 
                id='product_price' 
                name='product_price' 
                />
                </div>
                <div className='flex flex-col gap-3'>
                    <Label htmlFor="product_stock" >Stock</Label>
                <Input 
                type='number' 
                id='product_stock' 
                name='product_stock' 
                />
                </div>
                <div className='flex flex-col gap-3'>
                    <Label htmlFor="product_brand" >Product Brand</Label>
                <Input 
                type='text' 
                id='product_brand'  
                name='product_brand' 
                />
                </div>
                  <div className='flex flex-col gap-3'>
                    <Label htmlFor="product_category" >Product Category</Label>
                <Input 
                type='text' 
                id='product_category'  
                name='product_category' 
                />
                </div>
                <div className='flex flex-col gap-3'>
                    <Label htmlFor="image1" >Product Image 1</Label>
                <Input 
                accept='image/*'
                type='file' 
                id='image1'
                name='image1' 
                />
                </div>
                <div className='flex flex-col gap-3'>
                    <Label htmlFor="image2" >Product Image 2</Label>
                <Input 
                accept='image/*'
                type='file' 
                id='image2' 
                name='image2' 
                />
                </div>
                <div className='flex flex-col gap-3'>
                    <Label htmlFor="product_description" >Description</Label>
                <Textarea
                className='w-full h-32 resize-none' 
                id='product_description' 
                name='product_description' 
                />
                </div>
                </div>
                <div className='w-full flex justify-center px-6 my-3'>
                <Button type='submit' variant='outline'>Add Product</Button>
                </div>
            </form>
    </div>
  )
}

export default ProductForm

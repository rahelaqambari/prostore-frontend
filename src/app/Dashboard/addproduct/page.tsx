import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function page() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className='w-10/12 h-fit'>
        <h1 className='text-2xl font-serif'>ADD NEW Product</h1>
            <form  className="grid grid-cols-2 gap-3 border w-full p-4 rounded-md">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Product Name</Label>
              <Input id="name" name="name" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="price">Product Price</Label>
              <Input type="price" id="price" name="price" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="stock">Product stock</Label>
              <Input type="stock" id="stock" name="stock" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="brand">Product brand</Label>
              <Input type="brand" id="brand" name="brand" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="category">Product Category</Label>
              <Input type="category" id="category" name="category" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="man_date">Man Date</Label>
              <Input type="date" id="man_date" name="man_date" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="expire_date">Expire Date</Label>
              <Input
                type="date"
                id="expire_date"
                name="expire_date"
              />      
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
              className='w-fit p-1 h-32 resize-none'
                id="description"
                name="description"
              />      
            </div>
           <Button className="bg-black text-white px-4 py-2 rounded">
  Add
</Button>
          </form>
        </div>
    </div>
  )
}

export default page

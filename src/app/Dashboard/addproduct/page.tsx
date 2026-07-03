import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

function page() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className='w-1/12 h-fit'>
            <form  className="flex flex-col gap-3 border w-full p-4 rounded-md">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Product Name</Label>
              <Input id="name" name="name" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Product Price</Label>
              <Input type="email" id="email" name="email" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Man Date</Label>
              <Input type="password" id="password" name="password" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="confirmPassword">Expire Date</Label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />      
            </div>
            <Button type="submit">
             Add
            </Button>
          </form>
        </div>
      
    </div>
  )
}

export default page

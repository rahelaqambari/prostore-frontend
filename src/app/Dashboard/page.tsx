"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { LayoutDashboardIcon, Package, SquareUserRound, User } from 'lucide-react'
import { useState } from 'react';


function page() {
    const [showText, setShowText] = useState(true);
  return (
    <div className='w-full min-h-screen items-center p-4 flex justify-between'>
      <div className='w-full max-w-3xs h-full'>
        <Card className='rounded-none px-2 flex flex-col h-full min-h-screen '>
            <CardHeader>
                <CardTitle className='flex w-fit items-center space-x-2'>
                    <LayoutDashboardIcon size={18} />
                    <span className={`${showText?'block' : 'hidden'}`}>Dashboard</span>
                </CardTitle>
                <CardContent>
                    {/* <ScroolArea> */}
                        <div className='flex flex-col space-y-4'>
                        <div className='flex space-x-2 items-center w-fit'>
                        <Package />
                        <span  className={`${showText?'block' : 'hidden'}`}>Products</span>
                        </div>
                         <div className='flex space-x-2 items-center w-fit'>
                        <SquareUserRound />
                        <span  className={`${showText?'block' : 'hidden'}`}>Customers</span>
                        </div>
                         <div className='flex space-x-2 items-center w-fit'>
                        <LayoutDashboardIcon />
                        <span  className={`${showText?'block' : 'hidden'}`}>Manage User</span>
                        </div>
                        </div>
                        
                    {/* <ScroolBar />
                    </ScroolArea> */}

                </CardContent>
                    <CardDescription></CardDescription>
                    <CardFooter>
                        <span>{new Date().getFullYear()}| Prostore</span>
                    </CardFooter>
                

            </CardHeader>
        </Card>
      </div>
    </div>
  )
}

export default page

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Cart, CustomerService02FreeIcons } from '@hugeicons/core-free-icons';
import { LayoutDashboardIcon, Package, ScanEyeIcon, ShoppingBag, ShoppingBasket, SquareUserRoundIcon, User } from 'lucide-react';
import Image from 'next/image';
function DashboardSidebar({showText}:{showText:boolean}) {
  return (
    <div>
       <Card className={`${showText?'w-3xs':'w-fit'} transition-all duration-500 bg-stone-100 dark:bg-gray-800 px-2 py-1 flex flex-col justify-between rounded-none min-h-screen`}>
            <div>
            <CardHeader className='p-0'>
                 <CardTitle className='flex space-x-2 w-fit items-center'>
                  <Image
                                src="/images/logo.svg"
                                alt='Pro_Store'
                                height={25}
                                width={25}
                                className='m-3  border-l border-stone-400 p-0.5'
                                priority={true}
                              />
                    <span className={`${showText?'block':'hidden'} `}>Pro Store</span>
               </CardTitle> </CardHeader>
               <CardContent  className='p-0 mt-4'>
                <div className='flex flex-col space-y-5'>
                <div className='flex space-x-2 items-center w-fit'>
                    <LayoutDashboardIcon size={24}/>
                    <span className={`${showText?'block':'hidden'}`}>Dashboard</span>
                </div>
                 <div className='flex space-x-2 items-center w-fit'>
                    <Package size={24}/>
                    <span className={`${showText?'block':'hidden'}`}>Products</span>
                </div>
                 <div className='flex space-x-2 items-center w-fit'>
                    <User size={24}/>
                    <span className={`${showText?'block':'hidden'}`}>Customers</span>
                </div>
                 <div className='flex space-x-2 items-center w-fit'>
                    <ScanEyeIcon size={24}/>
                    <span className={`${showText?'block':'hidden'}`}>Reviews</span>
                </div>
                 <div className='flex space-x-2 items-center w-fit'>
                    <ShoppingBasket
                     size={24}/>
                    <span className={`${showText?'block':'hidden'}`}>Cart</span>
                </div>
                </div>
             
               </CardContent>
               </div>
               <div>
               <CardDescription></CardDescription>
                 <CardFooter className={`px-1 py-2 hidden md:block`}>
                    <span className={`${showText?'block':'hidden'} text-xs`}>{new Date().getFullYear()}&copy; Sharifi Pro_Store</span>
                 </CardFooter>   
                 </div>
        </Card>
    </div>
  )
}

export default DashboardSidebar

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
// import {ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { LayoutDashboardIcon, Package, ScanEye, ShoppingCart, SquareUserRound } from 'lucide-react'
import Image from 'next/image';
function DashboardSidebar({showText}: {showText: boolean}) {
  return (
    <div>
        <Card className={`flex flex-col w-full rounded-none justify-between min-h-screen transition-all duration-300 px-2 py-1 ${showText? 'max-w-3xs' : 'w-fit'}`}>
                <div className="">
                <CardHeader className='p-0'>
                    <CardTitle className='flex w-fit gap-1 items-center'>
                        <Image src='/images/logo.svg' alt='logo' height={40} width={40} className='  m-1'>

                        </Image>
                        <span className={`${showText ? 'block' : 'hidden'} text-2xl font-bold `}>Prostore</span>
                    </CardTitle>
                    </CardHeader>
                    <CardContent className=' p-0 mt-4'>
                    {/* <ScrollArea className='flex flex-col'> */}
                        <div className=" flex flex-col space-y-4">
                        {/* Div1 */}
                        <div className="flex space-x-2 items-center w-fit">
                        <LayoutDashboardIcon size={24}/>
                        <span className={`${showText ? 'block' : 'hidden'}`}>Dashboard</span>
                        </div>
                        {/* Div2 */}
                        <div className="flex space-x-2 items-center w-fit">
                        <Package size={24}/>
                        <span className={`${showText ? 'block' : 'hidden'}`}>Products</span>
                        </div>
                        {/* Div3 */}
                        <div className="flex space-x-2 items-center w-fit">
                        <SquareUserRound size={24}/>
                        <span className={`${showText ? 'block' : 'hidden'}`}>Customer</span>
                        </div>
                        {/* Div4 */}
                        <div className="flex space-x-2 items-center w-fit">
                        <ShoppingCart/>
                        <span className={`${showText ? 'block' : 'hidden'}`}>Cart</span>
                        </div>
                        {/* Div5 */}
                        <div className="flex space-x-2 items-center w-fit">
                        <ScanEye/>
                        <span className={`${showText ? 'block' : 'hidden'}`}>Reviews</span>
                        </div>
                        </div>
                        {/* <ScrollBar orientatin='vertical'></ScrollBar> */}
                    {/* </ScrollArea> */}
                    </CardContent>
                    </div>
                    <div className="">
                    <CardDescription></CardDescription>
                    <CardFooter className='hidden md:block px-1 py-2'>
                        <span className={`${showText ? 'block' : 'hidden'} text-xs`}>{new Date().getFullYear()} &copy; Sharifi Programing Academy </span>
                    </CardFooter>
                </div>
            </Card>
    </div>
  )
}

export default DashboardSidebar

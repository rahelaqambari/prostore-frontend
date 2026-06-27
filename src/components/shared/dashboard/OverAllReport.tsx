import { ArrowUpRight, CircleDollarSign, ShoppingBasket, Star, UserCheckIcon } from 'lucide-react'
import React from 'react'

function OverAllReport() {
  return (
    <div className='max-w-6xl bg-white dark:bg-gray-400 w-full p-5 my-4 mx-5 flex border m-7'>
        <div className='border-r  border-gray-300 m-6'>
            <div className='flex flex-col space-y-3'>
                <span className='flex gap-1 items-center dark:text-stone-50 '>
                    <CircleDollarSign size={18}/>
                    Monthly Revenue
                </span>
                <span>
                    4000 Previous Month
                </span>
                <span className='text-2xl font-bold'>60000</span>
                <span className='flex gap-1 items-center text-xs'>
                    <ArrowUpRight size={18} className='text-green-600'/>
                </span>
            </div>
        </div>
         <div className='border-r  border-gray-300 m-6'>
            <div className='flex flex-col space-y-3'>
                <span className='flex gap-1 items-center dark:text-stone-50 '>
                    <CircleDollarSign size={18}/>
                    Monthly Revenue
                </span>
                <span>
                    4000 Previous Month
                </span>
                <span className='text-2xl font-bold'>60000</span>
                <span className='flex gap-1 items-center text-xs'>
                    <ArrowUpRight size={18} className='text-green-600'/>
                </span>
            </div>
        </div>
         <div className='border-r  border-gray-300 m-6'>
            <div className='flex flex-col space-y-3'>
                <span className='flex gap-1 items-center dark:text-stone-50 '>
                    <Star size={18}/>
                    Review
                </span>
                <span>
                    4000 Previous Month
                </span>
                <span className='text-2xl font-bold'>60000</span>
                <span className='flex gap-1 items-center text-xs'>
                    <ArrowUpRight size={18} className='text-green-600'/>
                </span>
            </div>
        </div>
         <div className='border-r  border-gray-300 m-6'>
            <div className='flex flex-col space-y-3'>
                <span className='flex gap-1 items-center dark:text-stone-50 '>
                    <UserCheckIcon size={18}/>
                    Customer
                </span>
                <span>
                    4000 Previous Month
                </span>
                <span className='text-2xl font-bold'>60000</span>
                <span className='flex gap-1 items-center text-xs'>
                    <ShoppingBasket size={18} className='text-green-600'/>
                </span>
            </div>
        </div>
      
    </div>
  )
}

export default OverAllReport

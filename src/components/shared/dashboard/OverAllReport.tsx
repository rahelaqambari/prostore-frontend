import { ArrowUpRight, CircleDollarSign, DollarSign, Package, ShoppingBasket, Star, User } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import MonthlyPreviewReport from './MonthlyPreviewReport'
import CustomerReport from './CustomerReport'

function OverAllReport() {
    
  return (
    <div className=' w-full mx-auto p-5'>
        <div className=' max-w-6xl w-full dark:bg-stone-400/60 grid md:grid-cols-4 grid-cols-1 bg-white rounded-md border border-gray-200 p-4'>
            <div className=' flex flex-col gap-3 border-r px-2'>
                <span className=' text-xs text-gray-300 flex space-x-3 items-center gap-1.5'><DollarSign size={15}/> Monthly Revinue</span>
                <span className=' text-gray-400 text-md'>4000 Previous month</span>
                <span className=' text-2xl font-bold'>8000</span>
                <span className=' flex space-x-2 text-sm items-center text-gray-300'><span className=' text-green-600 text-xs flex'><ArrowUpRight size={18}  />45.5% </span> vs Previous month</span>
            </div>
          {/*  */}
          <MonthlyPreviewReport/>
           <CustomerReport/>
            <div className=' flex flex-col gap-3 px-2'>
                <span className=' text-xs text-gray-300 flex space-x-3 items-center gap-1.5 '><Package size={15}/> Total Product</span>
                <span className=' text-gray-400 text-md'>25 Previous month</span>
                <span className=' text-2xl font-bold'>0</span>
                <span className=' flex space-x-2 text-sm items-center text-gray-300'><span className='text-xs text-green-600 flex'><ArrowUpRight size={18}  />45.5% </span> vs Previous month</span>
            </div>
           
        </div> 
    </div>
  )
}

export default OverAllReport
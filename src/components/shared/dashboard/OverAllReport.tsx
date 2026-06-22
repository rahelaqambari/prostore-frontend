import { ArrowUpRight, CircleDollarSign } from 'lucide-react'
import React from 'react'

function OverAllReport() {
  return (
    <div className='max-w-6xl bg-white dark:bg-gray-400 w-full p-5 my-4 mx-5'>
        <div className='border-r border-gray-300'>
            <div className='flex flex-col space-y-3'>
                <span>
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
      
    </div>
  )
}

export default OverAllReport

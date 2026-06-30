import { Input } from '@/components/ui/input'
import {  Bell, PanelsTopLeft } from 'lucide-react'
import React from 'react'
import ToggleTheme from '../header/toggle-mode'

function DashboardHeader({setShowText , showText}:{setShowText:any,showText:boolean}) {
  return (
    <div className='w-full '>
      <div className='py-1.25 flex w-full justify-between px-0'>
        <div className='flex items-center sapce-x-2.5'>
            <PanelsTopLeft onClick={()=>setShowText(!showText)} />
            <span>Ecommerce App</span>
            </div>
        <div className='flex items-center gap-4 px-3'>
            <Input placeholder='Search...' />
        <div className='p-2 relative bg-stone-50 border rounded-md dark:bg-gray-700 '>
            <Bell  size={16}/>
            <p className='absolute -top-1 bg-red-500 rounded-full w-3 h-3 left-6.5'></p>
        </div>
        <ToggleTheme/>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader

import { Input } from '@/components/ui/input'
import { Bell, PanelLeftIcon, Search } from 'lucide-react'
import React from 'react'
import ToggleTheme from '../header/toggle-mode'

function DashboardHeader({setShowText, showText}:{setShowText: any, showText: boolean}) {
  return (
    <div className='w-full'>
         <div className="w-full py-1.5 flex justify-between px-0">
            <div className="flex items-center gap-1.5">
                <PanelLeftIcon size={19} onClick={()=>setShowText(!showText)} className='mx-1.5'/>
                  <span>Ecommerce App</span>  
            </div>   
            <div className="flex items-center gap-4 px-3">
              <Input placeholder='Search...'/>
              <div className="bg-white border relative rounded-md hover:bg-red-700 transition-all duration-300 px-2 py-2">
               <Bell size={19} className=''/>
               <p className=' absolute top-0 -right-9 text-xs bg-red-600'>3</p>
              </div>
              <ToggleTheme />
                </div>  
                
                 
         </div> 
    </div>
  )
}

export default DashboardHeader

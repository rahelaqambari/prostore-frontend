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
              <div className="p-2 bg-white border rounded-md hover:bg-yellow-200 transition-all duration-300">
               <Bell size={19} className=''/>
              </div>
              <ToggleTheme />
                </div>  
                
                 
         </div> 
    </div>
  )
}

export default DashboardHeader

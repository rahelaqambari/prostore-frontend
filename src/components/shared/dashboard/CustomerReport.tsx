import { ArrowUpRight, User, User2Icon, UserCheck } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function CustomerReport() {
    const [currentCustomer,setCurrentCustomer]=useState<{currentUser:number}>({currentUser:0});
    const [prevCustomer,setprevCustomer]=useState<{prev_user:number}>({prev_user:0});
    useEffect(()=>{
        async function getData():Promise<void> {
              const data = await fetch('http://localhost:8000/api/dashboard/report-of-current-customers')
               const response = await data.json();
               const prev=await fetch('http://localhost:8000/api/dashboard/report-of-prev-month-customers')
               const response2=await prev.json();
               setCurrentCustomer(response);
               setprevCustomer(response2);
        // return response; 
        // return response2; 
        }
        getData();
    },[]);
  return (
    
       <div className=' flex flex-col gap-3 border-r px-2'>
                <span className=' text-xs text-gray-300 flex space-x-3 items-center gap-1.5'><UserCheck size={15}/> New Customer</span>
                <span className=' text-gray-400 text-md'>{prevCustomer.prev_user} Previous month</span>
                <span className=' text-2xl font-bold'>{currentCustomer.currentUser}</span>
                <span className=' flex space-x-2 text-sm items-center text-gray-300'><span className=' text-green-600 flex'><ArrowUpRight size={18}  />45.5% </span> vs Previous month</span>
            </div>
    
  )
}

export default CustomerReport

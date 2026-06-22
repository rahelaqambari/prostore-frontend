'use client'
import MainSection from '@/components/shared/dashboard/MainSection';
import DashboardSidebar from '@/components/shared/dashboard/Sidebar';
// import {ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import React, { useState } from 'react'

function Dashboard() {
    const [showText, setShowText] = useState(true);
  return (
    <div className="w-full bg-stone-50 flex  min-h-screen justify-start gap-1">
         <div className={` ${showText? 'w-3xs' : 'w-fit'}`}>
         <DashboardSidebar showText={showText}/>
         </div>
         <MainSection setShowText={setShowText} showText={showText}/>
    </div>
  )
}
 
export default Dashboard
 
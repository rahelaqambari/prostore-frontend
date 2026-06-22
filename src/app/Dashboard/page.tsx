'use client'
import MainSection from '@/components/shared/dashboard/MainSection';
import DashboardSidebar from '@/components/shared/dashboard/Sidebar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
// import {ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { LayoutDashboardIcon, Package, ScanEye, ShoppingCart, SquareUserRound } from 'lucide-react'
import Image from 'next/image';
import React, { useState } from 'react'

function Dashboard() {
    const [showText, setShowText] = useState(true);
  return (
    <div className=' w-full flex  min-h-screen gap-1'>
         <div className={` ${showText? 'max-w-3xs' : 'w-fit'}`}>
          
         <DashboardSidebar showText={showText}/>
         </div>
         <MainSection setShowText={setShowText} showText={showText}/>
    </div>
  )
}
 
export default Dashboard
 
"use client";
import React, { useState } from 'react'
import DashboardSidebar from './Sidebar'
import DashboardHeader from './DashboardHeader';

function InsertProduct() {
     const [showText, setShowText] = useState(true);
  return (
    <div className='w-full '>
      <DashboardSidebar showText={showText} />
      <div>
      <DashboardHeader setShowText={setShowText}  showText={showText} />
      </div>
    </div>
  )
}

export default InsertProduct

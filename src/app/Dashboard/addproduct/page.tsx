"use client";
import React, { useState } from 'react'
import ProductMainSection from './productMainSection';
import DashboardSidebar from '@/components/shared/dashboard/Sidebar';

function AddProduct() {
    const [showText,setShowText]=useState(true);
  return (
      <div className="w-full bg-stone-100 dark:bg-gray-800 min-h-screen flex justify-start gap-1">
      <div className={`${showText ? "w-3xs hidden md:block " : "w-fit"}`}>
        <DashboardSidebar showText={showText} />
      </div>
        <ProductMainSection setShowtext={setShowText} showText={showText} />
    </div>
  )
}

export default AddProduct
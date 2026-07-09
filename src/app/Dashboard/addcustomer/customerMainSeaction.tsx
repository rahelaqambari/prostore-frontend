import DashboardHeader from '@/components/shared/dashboard/DashboardHeader'
import ProductForm from '@/components/shared/dashboard/ProductForm';
import { PackagePlus } from 'lucide-react';
import React from 'react'

function ProductMainSection({
    showText,
    setShowtext,
}:{
    showText:boolean ;
    setShowtext:any;
}) {
  return (
    <div className='w-full flex-col flex'>
      <DashboardHeader showText={showText} setShowText={setShowtext} />
      <div className='items-center justify-center h-full w-full flex'>
        <div className='bg-white shadow-2xl  shadow-gray-400 w-full m-8 max-w-7xl border mx-auto p-4 border-gray-300 rounded-md dark:border-gray-100'>
            <div className='flex justify-center w-full flex-col items-center'>
                <PackagePlus size={32} />
                <h1 className='text-3xl my-4 font-semibold text-gray-800 dark:text-gray-300'>Add New Product</h1>
            </div>
          {/* <ProductForm /> */}
        </div>
      </div>
    </div>
  )
}

export default ProductMainSection

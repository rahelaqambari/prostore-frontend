import AllCustomer from '@/components/shared/dashboard/user/AllCustomer';
import DashboardHeader from '@/components/shared/dashboard/DashboardHeader'
import ProductForm from '@/components/shared/dashboard/ProductForm';
import { PackagePlus, User } from 'lucide-react';

function CustomerMainSection
({
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
        <div className='bg-white shadow-2xl  shadow-gray-400 w-full m-8 max-w-7xl border mx-auto border-gray-300 rounded-md dark:border-gray-100'>
        <AllCustomer />
    </div>
      </div>
    </div>
  )
}

export default CustomerMainSection


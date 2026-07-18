
import DashboardHeader from '@/components/shared/dashboard/DashboardHeader'

import AllReview from './all-review';

function ReviewMainSection
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
        <AllReview />
    </div>
      </div>
    </div>
  )
}

export default ReviewMainSection


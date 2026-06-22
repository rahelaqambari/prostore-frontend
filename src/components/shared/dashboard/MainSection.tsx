import React from 'react'
import DashboardHeader from './DashboardHeader'
import OverAllReport from './OverAllReport'

function MainSection({setShowText, showText}: {setShowText: any, showText: boolean}) {
  return (
    <div className='w-full'>
      <DashboardHeader setShowText={setShowText} showText={showText}/>
      <OverAllReport />
    </div>
  )
}

export default MainSection

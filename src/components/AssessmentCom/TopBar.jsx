import React from 'react'

const TopBar = () => {
  return (
    <div className='w-full h-[70px] bg-[#FFFFFF] flex items-center rounded-t-lg justify-start pl-3'>
      <div className='h-full flex flex-row items-center gap-4'>
        <p className='text-[20px] font-semibold text-[#1C4980] hidden sm:flex'>Assessment</p>
        {/* vertical border  */}
        <div className='bg-[#DADCE0] border-[1px] h-[90%] hidden sm:flex'></div>
        {/* my assessment */}
        <p className='h-full text-[#0073E6] border-b-[#0073E6] text-[14px] font-semibold flex items-center border-b-[3px]'>
          My Assessment
        </p>
        {/* vertical border  */}
        <div className='bg-[#DADCE0] border-[1px] h-[90%] sm:hidden'></div>
        {/* my assessment */}
        <p className='text-[14px] font-semibold text-[#1C4980] sm:hidden'>
          Unstop Assessment
        </p>
      </div>
    </div>
  )
}

export default TopBar

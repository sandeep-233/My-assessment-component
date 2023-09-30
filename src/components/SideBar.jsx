import React, { useState } from 'react'
import {MdOutlineDashboard, MdOutlineAssessment, MdOutlineLibraryBooks, MdOutlineAdminPanelSettings} from 'react-icons/md'
import {AiOutlineClose} from 'react-icons/ai'


const SideBar = (props) => {

  return (
    <div className= {`sm:w-[140px] w-[85%] sm:h-[100vh] h-[100vh] fixed ${props.showMenu}  sm:flex flex-col bg-[#FFFFFF] p-[16px] gap-3 text-[#1C4980] sm:text-[12px] text-[14px] font-medium`}>
      {/* menue and close */}
      <div className='sm:hidden flex flex-row items-center justify-between w-full mt-2'>
        <p>Menu</p>
        <AiOutlineClose className=' cursor-pointer' onClick={()=>props.setShowMenu("hidden")}/>
      </div>

      {/* dashboard / assessment  and  my library */}
      <div className='flex flex-col gap-2'>
        {/* dashboard */}
        <div className='sm:w-[90px] h-[70px] w-full p-[10px] flex sm:flex-col flex-row items-center gap-1'>
            <MdOutlineDashboard size={20}/>
            <p>Dashboard</p>
        </div>
        {/* assessment */}
        <div className='sm:w-[90px] h-[70px] w-full p-[10px] flex sm:flex-col flex-row items-center gap-1 rounded-[8px] border-[1px] border-[#0073E6] bg-[#E5F1FC]'>
            <MdOutlineAssessment color='#0073E6' size={20}/>
            <p className=' text-[#0073E6]'>Assessment</p>
        </div>
        {/* my library */}
        <div className='sm:w-[90px] h-[70px] w-full p-[10px] flex sm:flex-col flex-row items-center gap-1'>
            <MdOutlineLibraryBooks size={20}/>
            <p>My Library</p>
        </div>
      </div>

      {/* dotted line */}
      <div className='w-full border-[1px] border-dotted border-[#BACBD5]'></div>

      {/* admin */}
      <div className='w-full h-[104px] flex sm:flex-col flex-row-reverse justify-between items-center gap-1'>
        <p className='pl-2 pr-2 border-[1px] rounded-[22px] border-[#D63500] bg-[#FBEBEA] text-[#D63500] flex items-center'>
          Admin
        </p>
        <div className='w-full h-[90px] pt-[10px] pb-[10px] pl-[10px] pr-[10px] flex sm:flex-col flex-row items-center gap-1'>
            <MdOutlineAdminPanelSettings size={20}/>
            <p>Round</p>
            <p>Status</p>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default SideBar

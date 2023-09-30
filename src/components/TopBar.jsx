import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

const TopBar = (props) => {
  return (
    <div className='flex justify-start items-center pl-[15px] pr-[15px] w-full h-[50px] sm:hidden'>
        <div className='w-full flex items-center justify-start gap-3'>
            <div className='w-[40px] h-[40px] rounded-full bg-[#F2F8FE] flex items-center justify-center'>
                <GiHamburgerMenu size={18} color='#1C4980' onClick={() => props.setShowMenu("")} />
            </div>
            <p className='text-[16px] text-[#1C4980] font-semibold'>Assessment</p>
        </div>
    </div>
  )
}

export default TopBar

import React from 'react'
import {FiLink2} from 'react-icons/fi'
import {BsViewStacked, BsGlobeAsiaAustralia} from 'react-icons/bs'
import {FaUserGroup} from 'react-icons/fa6'

const Overview = () => {
    // dumy data 
    let totalAssessment = 34;

    // candidates data 
    let candidatesData = {
        tilte: "Candidates",
        totalCandaidates: "11,145",
        pos: "+89",
        whoAttamped: "114",
    }

    //candidates sources
    let source = {
        tilte: "Candidates Source",
        email: "11,000",
        pos: "+89",
        socialShare: "145",
        uniqueLink: "145",
    }

    // toal purpose
    let totalPurpose = 11;

  return (
    <div className='w-full hidden sm:flex sm:flex-col bg-[#FFFFFF] p-3'>
      <p className='text-[#1C4980] text-[18px] font-medium'>Assessments Overview</p>
      {/* overviews */}
      <div className='h-[114px] flex flex-wrap rounded-[12px] border-[1px] w-full items-start justify-between p-2'>
        {/* total assessment */}
        <div className='flex flex-col items-center justify-center p-2 gap-2 h-full'>
            <p className='text-[14px] font-semibold text-[#1C4980] w-full'>Total Assessment</p>
            <div className='flex gap-2 items-start justify-start w-full'>
                <div className='rounded-[8px] w-[40px] h-[40px] flex items-center bg-[#EBE8FD] justify-center'><BsViewStacked size={15} color='#6548EE'/></div>
                <p className='text-[20px] font-bold text-[#1C4980]'>
                    {totalAssessment}
                </p>
            </div>
        </div>
        {/* Candidates  */}
        <div className='flex flex-col items-center justify-center p-2 pl-3 gap-2 border-l-[1px] border-[#DADCE0] h-full'>
            <p className='text-[14px] font-semibold text-[#1C4980] w-full'>{candidatesData?.tilte}</p>
            <div className='flex gap-2 items-center justify-start w-full'>
                <div className='rounded-[8px] w-[40px] h-[40px] flex items-center bg-[#EBE8FD] justify-center'><FaUserGroup size={15} color='#6548EE'/></div>
                <div className='flex flex-col items-start justify-start p-2 pr-3 gap-2 border-r-[1px] border-[#DADCE0]'>
                    <p className='text-[20px] font-bold text-[#1C4980]'>{candidatesData?.totalCandaidates} <span className='text-[12px] font-medium text-[#05C165]'>{ candidatesData?.pos}</span></p>
                    <p className='text-[12px] font-medium text-[#1C4980]'>Total Candidate</p>
                </div>
                <div className='flex flex-col items-start justify-start p-2 gap-2'>
                    <p className='text-[20px] font-bold text-[#1C4980]'>{candidatesData?.whoAttamped} <span className='text-[12px] font-medium text-[#05C165]'>{candidatesData?.pos}</span></p>
                    <p className='text-[12px] font-medium text-[#1C4980]'>Who Attamped</p>
                </div>
            </div>
        </div>
        {/* candidates source  */}
        <div className='flex flex-col items-center justify-center p-2 pl-3 gap-2 border-l-[1px] border-[#DADCE0] h-full'>
            <p className='text-[14px] font-semibold text-[#1C4980] w-full'>{source?.tilte}</p>
            <div className='flex gap-2 items-center justify-start w-full'>
                <div className='rounded-[8px] w-[40px] h-[40px] flex items-center bg-[#EBE8FD] justify-center'><BsGlobeAsiaAustralia size={15} color='#6548EE'/></div>
                <div className='flex flex-col items-start justify-start p-2 pr-3 gap-2 border-r-[1px] border-[#DADCE0]'>
                    <p className='text-[20px] font-bold text-[#1C4980]'>{source?.email} <span className='text-[12px] font-medium text-[#05C165]'>{source?.pos}</span></p>
                    <p className='text-[12px] font-medium text-[#1C4980]'>E-mail</p>
                </div>
                <div className='flex flex-col items-start justify-start p-2 pr-3 gap-2 border-r-[1px] border-[#DADCE0]'>
                    <p className='text-[20px] font-bold text-[#1C4980]'>{source?.socialShare} <span className='text-[12px] font-medium text-[#05C165]'>{source?.pos}</span></p>
                    <p className='text-[12px] font-medium text-[#1C4980]'>Social Share</p>
                </div>
                <div className='flex flex-col items-start justify-start p-2 gap-2'>
                    <p className='text-[20px] font-bold text-[#1C4980]'>{source?.uniqueLink} <span className='text-[12px] font-medium text-[#05C165]'>{source?.pos}</span></p>
                    <p className='text-[12px] font-medium text-[#1C4980]'>Unique Link</p>
                </div>
            </div>
        </div>
        {/* toal purpose  */}
        <div className='flex flex-col items-center justify-center p-2 gap-2 pl-3  border-l-[1px] border-[#DADCE0] h-full'>
            <p className='text-[14px] font-semibold text-[#1C4980]'>Total Purpose</p>
            <div className='flex gap-2 items-center justify-start w-full'>
                <div className='rounded-[8px] w-[40px] h-[40px] flex items-center bg-[#EBE8FD] justify-center'><FiLink2 size={15} color='#6548EE'/></div>
                <p className='text-[20px] font-bold text-[#1C4980]'>{totalPurpose}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Overview

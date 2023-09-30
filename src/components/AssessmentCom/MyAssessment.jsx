import React from 'react'
import {GrAdd} from 'react-icons/gr'
import {PiSuitcaseSimpleDuotone} from 'react-icons/pi'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {SlCalender} from 'react-icons/sl'
import {AiOutlineLink, AiOutlineSearch} from 'react-icons/ai'
import {MdBarChart, MdFilterAlt} from 'react-icons/md'

const MyAssessment = (props) => {

    const topTwoAssessment = [
        {
            heading: "Math Assessment",
            job: "Job",
            date: "20 April 2023",
            duration: "00",
            questions: "00",
            label: "LP",
        },
        {
            heading: "Math Assessment",
            job: "Job",
            date: "20 April 2023",
            duration: "00",
            questions: "00",
            label: "LP",
        }
    ]

    const otherAssessment = [
        {
            heading: "Math Assessment",
            job: "Job",
            date: "20 April 2023",
            duration: "00",
            questions: "00",
            label: "LP",
        },
        {
            heading: "Math Assessment",
            job: "Job",
            date: "20 April 2023",
            duration: "00",
            questions: "00",
            label: "LP",
        },
        {
            heading: "Math Assessment",
            job: "Job",
            date: "20 April 2023",
            duration: "00",
            questions: "00",
            label: "LP",
        },
        {
            heading: "Math Assessment",
            job: "Job",
            date: "20 April 2023",
            duration: "00",
            questions: "00",
            label: "LP",
        },
        {
            heading: "Math Assessment",
            job: "Job",
            date: "20 April 2023",
            duration: "00",
            questions: "00",
            label: "LP",
        },
        {
            heading: "Math Assessment",
            job: "Job",
            date: "20 April 2023",
            duration: "00",
            questions: "00",
            label: "LP",
        }
    ]

  return (
    <div className='w-full flex flex-col gap-3 items-center justify-start bg-[#FFFFFF] p-3'>
      <p className='text-[#1C4980] p-[10px] sm:text-[18px] text-[16px] sm:font-medium font-semibold w-full text-start flex justify-between'>
        My Assessment 
        <span className='sm:hidden flex items-center gap-1'>
            <AiOutlineSearch size={16} color='#1C4980'/><MdFilterAlt size={16} color='#1C4980'/><MdBarChart size={16} color='#1C4980'/>
        </span> 
      </p>
      
      {/* add Assessment and top 2 Assessment */}
      <div className='flex sm:flex-row flex-col gap-3 items-center justify-center'>
        {/* add Assessment */}
        <div className='border-[#DADCE0] border-dotted bg-[#F6F8FA] cursor-pointer flex flex-col items-center gap-3 justify-center w-[388px] h-[209px] rounded-[12px] p-[30px] border-[4px]'
            onClick={() => props.setAddAssessment(true)}
        >
            <div className='flex flex-col items-center gap-3 justify-center'>
                <div className='w-[70px] h-[70px] bg-[#FFFFFF] rounded-full flex items-center justify-center'>
                    <GrAdd color='#1C4980' size={40}/>
                </div>
                <p className='text-[18px] font-medium text-[#1C4980]'>New Assessment</p>
            </div>

            <p className='text-[12px] font-medium text-[#1C4980] text-center'>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>
        </div>

        {/* top 2 assessment */}
        <div className='flex sm:flex-row flex-col gap-3'>
            {
                topTwoAssessment.map( (assessment, index) => (
                    <div className=' flex flex-col justify-evenly w-[388px] h-[209px] rounded-[12px] p-[20px] border-[1px]' key={index}>
                        {/* heading / job / date  */}
                        <div className='flex items-start justify-between'>
                            <div className='flex sm:flex-col flex-row items-center sm:items-start gap-3'>
                                <div className='rounded-[12px] w-[50px] h-[50px] flex items-center bg-[#EBE8FD] justify-center'><PiSuitcaseSimpleDuotone size={15} color='#6548EE'/></div>
                                <div className='flex flex-col gap-2'>
                                    <h3 className='text-[18px] font-medium text-[#1C4980]'>{assessment?.heading}</h3>
                                    <div className='flex gap-2'>
                                        <p className='text-[14px] font-semibold text-[#1C4980]'>{assessment?.job}</p>
                                        <div className='border-[1px] bg-[#DADCE0]'></div>
                                        <p className='text-[12px] font-bold text-[#8DA4BF] flex gap-2 items-center'><span><SlCalender size={12} color='#1C4980'/></span> {assessment?.date}</p>
                                    </div>
                                </div>
                            </div>

                            <BsThreeDotsVertical size={20} color='#1C4980'/>
                        </div>

                        {/* horizontal dotted line */}
                        <div className='border-[1px] bg-[#DADCE0] w-[98%] border-dotted'></div>

                        {/* duration / questions / share */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                {/* duration */}
                                <div>
                                    <p className='text-[18px] font-bold text-[#1C4980]'>{assessment?.duration}</p>
                                    <p className='text-[12px] font-medium text-[#1C4980]'>Duration</p>
                                </div>
                                {/* questions */}
                                <div>
                                    <p className='text-[18px] font-bold text-[#1C4980]'>{assessment?.questions}</p>
                                    <p className='text-[12px] font-medium text-[#1C4980]'>Questions</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-2'>
                                <div className='w-[77px] h-[30px] text-[#1C4980] rounded-[50px] border-[1px] border-[#1C4980] pb-2 pt-2 pl-[2px] pr-[2px] flex items-center justify-center'>
                                    <p className='text-[14px] font-medium flex items-center justify-center'><span><AiOutlineLink color='#1C4980' size={20}/></span> Share</p>
                                </div>
                                 {/* label  */}
                                <div className='w-[30px] h-[30px] text-[14px] font-bold text-[#FFFFFF] bg-[#6548EE] rounded-full flex items-center justify-center'>
                                    {assessment?.label}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>

      {/* other Assessments  */}
      <div className='flex gap-3 flex-wrap items-center justify-center'>
            {
                otherAssessment.map( (assessment, index) => (
                    <div className=' flex flex-col justify-evenly w-[388px] h-[209px] rounded-[12px] p-[20px] border-[1px]' key={index}>
                        {/* heading / job / date  */}
                        <div className='flex items-start justify-between'>
                            <div className='flex sm:flex-col flex-row items-center sm:items-start gap-3'>
                                <div className='rounded-[12px] w-[50px] h-[50px] flex items-center bg-[#EBE8FD] justify-center'><PiSuitcaseSimpleDuotone size={15} color='#6548EE'/></div>
                                <div className='flex flex-col gap-2'>
                                    <h3 className='text-[18px] font-medium text-[#1C4980]'>{assessment?.heading}</h3>
                                    <div className='flex gap-2'>
                                        <p className='text-[14px] font-semibold text-[#1C4980]'>{assessment?.job}</p>
                                        <div className='border-[1px] bg-[#DADCE0]'></div>
                                        <p className='text-[12px] font-bold text-[#8DA4BF] flex gap-2 items-center'><span><SlCalender size={12} color='#1C4980'/></span> {assessment?.date}</p>
                                    </div>
                                </div>
                            </div>

                            <BsThreeDotsVertical size={20} color='#1C4980'/>
                        </div>

                        {/* horizontal dotted line */}
                        <div className='border-[1px] bg-[#DADCE0] w-[98%] border-dotted'></div>

                        {/* duration / questions / share */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                {/* duration */}
                                <div>
                                    <p className='text-[18px] font-bold text-[#1C4980]'>{assessment?.duration}</p>
                                    <p className='text-[12px] font-medium text-[#1C4980]'>Duration</p>
                                </div>
                                {/* questions */}
                                <div>
                                    <p className='text-[18px] font-bold text-[#1C4980]'>{assessment?.questions}</p>
                                    <p className='text-[12px] font-medium text-[#1C4980]'>Questions</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-2'>
                                <div className='w-[77px] h-[30px] text-[#1C4980] rounded-[50px] border-[1px] border-[#1C4980] pb-2 pt-2 pl-[2px] pr-[2px] flex items-center justify-center'>
                                    <p className='text-[14px] font-medium flex items-center justify-center'><span><AiOutlineLink color='#1C4980' size={20}/></span> Share</p>
                                </div>
                                 {/* label  */}
                                <div className='w-[30px] h-[30px] text-[14px] font-bold text-[#FFFFFF] bg-[#6548EE] rounded-full flex items-center justify-center'>
                                    {assessment?.label}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MyAssessment

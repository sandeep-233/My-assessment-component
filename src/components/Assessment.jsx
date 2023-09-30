import React from 'react'
import TopBar from './AssessmentCom/TopBar'
import Overview from './AssessmentCom/Overview'
import MyAssessment from './AssessmentCom/MyAssessment'

const Assessment = (props) => {
  return (
    <div className=' w-full sm:min-w-[1264px] sm:w-auto sm:h-auto sm:min-h-[734px] sm:ml-[140px] border-[1px] border-[#DADCE0] flex flex-col items-center justify-between'>
      {/* top bar  */}
      <TopBar/>
      <div className='w-full border-t-[1px] min-h-[100vh]'>
        <Overview/>
        <MyAssessment setAddAssessment={props.setAddAssessment}/>
      </div>
    </div>
  )
}

export default Assessment

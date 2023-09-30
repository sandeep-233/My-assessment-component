import { useState } from "react";
import "./App.css";
import Assessment from "./components/Assessment";
import SideBar from "./components/SideBar";
import {AiOutlineClose} from 'react-icons/ai'
import TopBar from "./components/TopBar";

function App() {

  const addedSkills = [
    {
      skill: "UI/UX and Design",
    },
    {
      skill: "UI/UX and Design",
    },
    {
      skill: "UI/UX and Design",
    },
    {
      skill: "UI/UX and Design",
    },
    {
      skill: "UI/UX and Design",
    },
    {
      skill: "UI/UX and Design",
    },
  ]

  const [addAssessment, setAddAssessment] = useState(false);

  // when we are on Mobile screen this will help to show Menu or close Menu
  const [showMenu, setShowMenu] = useState("hidden");

  return (
    <div className="bg-[#FFFFFF] flex-col flex sm:flex-row gap-1 relative box-border">

      {/* top bar for mobile screens  */}
      <TopBar setShowMenu={setShowMenu} showMenu={showMenu}/>

      <SideBar setShowMenu={setShowMenu} showMenu={showMenu}/>
      <Assessment setAddAssessment={setAddAssessment}/>

      {/* create Assessment popup */}
      {
        addAssessment && 
        <div className="sm:w-full w-[100vw] h-full  absolute bg-[#0000003d] flex justify-center pt-12 z-10">
        <div className="sm:w-[591px] sm:h-[764px] w-[90vw] h-[90vh] flex flex-col items-start justify-start rounded-lg bg-[#FFFFFF] overflow-y-scroll">
          {/* header */}
          <div className="sm:w-[591px] w-full h-[70px] p-[30px] flex justify-between items-center  border-[#DADCE0] border-b-[1px]">
            <p className="text-[20px] font-semibold text-[#1C4980]">Create New Assessment</p>
            <AiOutlineClose size={20} color="#1C4980" onClick={() => setAddAssessment(false)} className="cursor-pointer"/>
          </div>

          {/* main */}
          <div className="sm:w-[591px] sm:h-[616px] p-[30px] flex flex-col items-start justify-start gap-2">
            {/* assessment name  */}
            <div className="flex flex-col w-full gap-2">
              <label for="assessmentName" className="text-[16px] font-bold text-[#1C4980]">Name of assessment </label>
              <input type="text" placeholder="Type Here" className="w-full h-[50px] p-[15px] border-[1px] border-[#DADCE0] rounded-lg outline-none "/>
            </div>
            {/* Purpose */}
            <div className="flex flex-col w-full gap-2">
              <label for="purpose" className="text-[16px] font-bold text-[#1C4980]">Purpose of the test is</label>
              <select name="purpose" className="w-full h-[50px] p-[15px] border-[1px] border-[#DADCE0] rounded-lg outline-none text-[#DADCE0]">
                <option value="">Select</option>
                <option value="">option 1</option>
                <option value="">option 2</option>
              </select>
            </div>
            {/* description */}
            <div className="flex flex-col w-full gap-2">
              <label for="description" className="text-[16px] font-bold text-[#1C4980]">Description</label>
              <select name="des" className="w-full h-[50px] p-[15px] border-[1px] border-[#DADCE0] rounded-lg outline-none text-[#DADCE0]">
                <option value="">Select</option>
                <option value="">option 1</option>
                <option value="">option 2</option>
              </select>
            </div>
            {/* skills */}
            <div className="flex flex-col w-full">
              <p className="text-[16px] font-bold text-[#1C4980] mb-2">Skill</p>
              {/* added skills  */}
              <div className="w-full flex flex-wrap h-auto p-[15px] border-[1px] border-[#DADCE0] rounded-lg outline-none gap-3">
                {
                  addedSkills.map((skill, index) => (
                    <div key={index} className=" pt-1 pb-1 pr-2 pl-2 bg-[#DDEDFF] rounded-lg">
                        <p className="text-[12px] font-medium text-[#1C4980] flex gap-1 items-center">{skill?.skill} <span><AiOutlineClose size={12} color="#1C4980"/></span></p>
                    </div>
                  ))
                }
              </div>
              {/* input skill  */}
              <div>
                <input type="text" placeholder="Type Here" className="w-full h-[50px] p-[15px] border-[1px] border-[#DADCE0] rounded-lg outline-none "/>
              </div>
            </div>
            {/* durations of assessment */}
            <div className="flex flex-col w-full gap-2">
              <label className="text-[16px] font-bold text-[#1C4980]">Duration of assessment</label>
              <input type="text" placeholder="HH-MM-SS" className="w-full h-[50px] p-[15px] border-[1px] border-[#DADCE0] rounded-lg outline-none "/>
            </div>
          </div>

          {/* save button */}
          <div className="w-full h-[591px] pt-7 pb-7 pl-8 pr-8 border-[#DADCE0] border-t-[1px]">
            <input type="submit" value="Save" className="bg-[#0073E6] pt-[10px] pb-[10px] pl-[30px] pr-[30px] w-full text-center flex items-center justify-center rounded-lg text-[#FFFFFF] text-[14px] font-semibold cursor-pointer"/>
          </div>
        </div>
        </div>
      }
    </div>
  );
}

export default App;

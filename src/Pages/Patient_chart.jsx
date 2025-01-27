import React from 'react'
import Leftbar from "../Components/Leftbar";
import Topbar from "../Components/Topbar";
import Rightbar from "../Components/Rightbar";

function Patient_chart() {
  return (
    <div className="flex flex-col items-start justify-start bg-main-body dark:bg-main-body-dark">
      <Topbar />
      <div className="w-full flex items-start justify-between">
        <Leftbar />
        <div className="flex-1 h-full min-h-svh mt-[-80px] pt-[100px] flex items-center justify-center figure">
          <img src="./single-removebg-preview.png" alt="" />
        </div>
        <Rightbar />
      </div>
    </div>
  )
}

export default Patient_chart
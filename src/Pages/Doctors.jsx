import React from "react";
import Leftbar from "../Components/Leftbar";
import Topbar from "../Components/Topbar";
import Rightbar from "../Components/Rightbar";

function Doctors() {
  return (
    <div className="flex flex-col items-start justify-start bg-main-body">
      <Topbar />
      <div className="w-full flex items-start justify-between">
        <Leftbar />
        <div className="flex-1 h-full min-h-svh mt-[-80px] pt-[100px] flex items-center justify-center">
          <h1 className="text-4xl font-bold">Doctors Page</h1>
        </div>
        <Rightbar />
      </div>
    </div>
  );
}

export default Doctors;

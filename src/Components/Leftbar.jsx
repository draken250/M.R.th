import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { IoWarning } from "react-icons/io5";
import { LiaLaptopMedicalSolid } from "react-icons/lia";
import {
  LuChevronLeft,
  LuChevronRight,
  LuStethoscope,
  LuTestTube2,
} from "react-icons/lu";
import { Doc1, Doc2 } from "../assets";
import { BsLayoutSidebarInset } from "react-icons/bs";

function Leftbar() {
  const [width, setWidth] = useState("big");
  const handleWidth = () => {
    if (width === "big") {
      setWidth("small");
    } else {
      setWidth("big");
    }
  };

  return (
    <div
      className={`px-5 flex flex-col relative text-[#111111] dark:text-text-dark  ${
        width === "big" ? "w-[400px]" : "w-[0] transition-all duration-300"
      }`}
    >
      {/* toggler */}
      <button
        onClick={handleWidth}
        className={`absolute top-[10px] ${
          width === "big" ? "right-[-40px]" : "right-[-20px]"
        } text-black/40 hover:text-main-color bg-white dark:bg-dark-gray-dark dark:text-text-dark h-[40px] w-auto flex items-center justify-center text-xl aspect-square rounded-full`}
      >
        <BsLayoutSidebarInset />
      </button>
      <div
        className={`w-full h-fit flex-col ${
          width === "big" ? "flex" : "hidden"
        }`}
      >
        {/* section 1 */}
        <div className="pb-3 flex justify-between">
          <h2 className=" font-semibold">Diagnostic results</h2>
          <button className="text-sm flex items-center gap-1 text-link-color">
            See all results <LuChevronRight />
          </button>
        </div>
        <div className=" ">
          <div className="flex items-start justify-between gap-3 mb-3 w-full">
            {/* box */}
            <div className="w-full flex bg-white dark:bg-dark-gray-dark dark:text-text-dark rounded-2xl py-3 px-4 flex-col gap-1">
              <div className="flex items-center justify-start gap-2 mb-2">
                <div className="h-8 w-auto aspect-square rounded-full bg-main-body dark:bg-text-dark/10 dark:text-text-dark flex items-center justify-center">
                  <LuStethoscope className="opacity-60" />
                </div>
                <h3 className=" font-semibold text-xs uppercase">
                  Consultation
                </h3>
              </div>
              <p className="text-xs font-medium opacity-40">29 Nov 2024</p>
              <p className="text-xs font-medium">Initial exam: influenza</p>
            </div>
            {/* box */}
            <div className="w-full flex bg-white dark:bg-dark-gray-dark dark:text-text-dark rounded-2xl py-3 px-4 flex-col gap-1">
              <div className="flex items-center justify-start gap-2 mb-2">
                <div className="h-8 w-auto aspect-square rounded-full bg-main-body dark:bg-text-dark/10 dark:text-text-dark flex items-center justify-center">
                  <LiaLaptopMedicalSolid className="opacity-60" />
                </div>
                <h3 className=" font-semibold text-xs uppercase">PROTOCOLS</h3>
              </div>
              <p className="text-xs font-medium opacity-40">29 Nov 2024</p>
              <p className="text-xs font-medium">Ultra sound: right knee</p>
            </div>
          </div>
          {/* blue box */}
          <div className="flex bg-link-color text-white p-5 rounded-2xl">
            <div className="flex-1">
              <div className="flex items-center justify-start gap-2 mb-2">
                <div className="h-8 w-auto aspect-square rounded-full bg-main-body/30 flex items-center justify-center">
                  <LuTestTube2 className="opacity-60 text-lg" />
                </div>
                <h3 className=" font-semibold text-xs uppercase">
                  LAB SCREENING
                </h3>
              </div>
              <p className=" text-sm opacity-75 font-medium ">29 AUGUST 2023</p>
              <p className=" text-sm font-medium">
                Blood screening: CRP, RF and ESR
              </p>
            </div>
            <IoWarning className="text-2xl self-center mx-2" />
          </div>
        </div>
        {/* section 2 */}
        <div className=" mt-6 flex justify-between">
          <h2 className=" font-bold">Treatment plan</h2>
          <button className="text-sm flex items-center gap-1 text-link-color">
            See more <LuChevronRight />
          </button>
        </div>
        <div className=" py-3">
          <div className="flex items-center justify-between bg-[#e5e0dd] dark:bg-dark-gray-dark dark:text-text-dark mb-3 p-[4px] rounded-full">
            <button className=" text-main-color bg-white  dark:bg-text-dark/10 dark:text-text-dark h-[40px] w-auto flex items-center justify-center text-xl aspect-square rounded-full">
              <LuChevronLeft />
            </button>
            <span className=" font-normal uppercase text-sm">August 30</span>
            <button className=" text-main-color bg-white dark:bg-text-dark/10 dark:text-text-dark h-[40px] w-auto flex items-center justify-center text-xl aspect-square rounded-full">
              <LuChevronRight />
            </button>
          </div>
          {/* box */}
          <div className="w-full h-fit flex gap-3 mb-3 bg-white dark:bg-dark-gray-dark dark:text-text-dark rounded-xl p-3 ">
            {/* light */}
            <div className="min-h-full w-[5px] rounded-md bg-link-color"></div>
            {/* content */}
            <div className="w-full h-fit py-1 pr-1">
              <h3 className="text-sm opacity-40">
                02:30 PM - 03:30 PM • Office visit
              </h3>
              <p className="font-semibold text-base my-2">
                Consultation: surgery preparation
              </p>
              {/* separetor */}
              <div className="h-[1px] w-full bg-dark-gray dark:bg-text-dark/15 mb-3" />
              <div className="flex justify-between doc gap-3">
                <div className="flex gap-3">
                  <img src={Doc1} alt="" className="w-10 h-10 rounded-full" />

                  <div>
                    <p className="text-sm font-medium truncate">
                      Kathryn D.1 Murphy, MD
                    </p>
                    <p className="text-xs opacity-50 truncate">
                      {" "}
                      MD Orthopaedic surgeon
                    </p>
                  </div>
                </div>
                <div className="bg-main-color text-white text-xl rounded-full h-9 w-auto aspect-square flex items-center justify-center ">
                  <AiOutlineMessage />
                </div>
              </div>
            </div>
          </div>

          {/* box */}
          <div className="w-full h-fit flex gap-3 mb-3 bg-white dark:bg-dark-gray-dark dark:text-text-dark rounded-xl p-3 ">
            {/* light */}
            <div className="min-h-full w-[5px] rounded-md bg-khaki"></div>
            {/* content */}
            <div className="w-full h-fit py-1 pr-1">
              <h3 className="text-sm opacity-40">
                02:30 PM - 03:30 PM • Office visit
              </h3>
              <p className="font-semibold text-base my-2">
                Consultation: surgery preparation twenty one memes marathon
              </p>
              {/* separetor */}
              <div className="h-[1px] w-full bg-dark-gray dark:bg-text-dark/15 mb-3" />
              <div className="flex justify-between doc gap-3">
                <div className="flex gap-3">
                  <img src={Doc2} alt="" className="w-10 h-10 rounded-full" />

                  <div>
                    <p className="text-sm font-medium truncate">
                      Kathryn D.3 Murphy, MD
                    </p>
                    <p className="text-xs opacity-50 truncate">
                      {" "}
                      MD Orthopaedic surgeon
                    </p>
                  </div>
                </div>
                <div className="bg-main-color text-white text-xl rounded-full h-9 w-auto aspect-square flex items-center justify-center ">
                  <AiOutlineMessage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;

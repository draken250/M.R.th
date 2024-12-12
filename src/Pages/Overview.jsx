import React from "react";
import Leftbar from "../Components/Leftbar";
import Topbar from "../Components/Topbar";
import Rightbar from "../Components/Rightbar";
import Statistics from "../Components/Statistics";
import { RxMixerHorizontal } from "react-icons/rx";
import { LuChevronDown, LuMoreHorizontal, LuUpload, LuX } from "react-icons/lu";
import { GoHeartFill } from "react-icons/go";
import { Doc2 } from "../assets";

function Overview() {
  return (
    <div className="flex flex-col items-start justify-start bg-main-body dark:bg-main-body-dark">
      <Topbar />
      <div className="w-full flex items-start justify-between">
        <div class="flex w-full h-full">
          <div class="side1 p-4 ml-4 w-2/3  ">
            <div class="intro m-4">
              <h1 class="text-2xl font-bold bg-transparent dark:bg-transparent dark:text-text-dark mb-2 "> Welcome back ,Thierry</h1>
              <p class="text-md opacity-60 bg-transparent dark:bg-transparent dark:text-text-dark mb-6">
                effortlessly records and analyze your Health in one place
              </p>
            </div>
            <div class="stats flex gap-4">
              <div class="heartrate w-3/4 px-4 pt-4 pb-2 bg-gray-100 text-black rounded-3xl ">
                <div className="w-full flex flex-col mb-5">
                  <div className="flex justify-between items-center">
                    <h1 className="text-base">Heart rate</h1>
                    <div className="flex items-center gap-2">
                      <button class="flex items-center justify-center gap-2 px-4 py-2.5 text-sm rounded-full ring-1 ring-stone-200 hover:bg-stone-200">
                        <LuUpload className="text-lg" />
                        <span>Export</span>
                      </button>
                      <button class="flex items-center justify-center gap-2 pl-4 pr-3 py-2.5 text-sm rounded-full ring-1 ring-stone-200 hover:bg-stone-200">
                        <span>Weekly</span>
                        <LuChevronDown className="text-lg" />
                      </button>
                    </div>
                  </div>
                  <h1 className="text-3xl flex items-center gap-2 mb-1">
                    88 <span className="opacity-40">BPM</span>{" "}
                    <GoHeartFill className="text-main-color" />
                  </h1>
                  <h1 className="text-sm opacity-45">12 - 19 Jul 2023</h1>
                </div>
                <Statistics />
              </div>
              <div class="smallerstats w-1/4 min-h-full flex flex-col gap-4">
                <div class="calories bg-[#dfcdff] p-5 text-2xl font-semibold rounded-3xl flex-1 flex flex-col items-start justify-center">
                  245
                  <br />
                  <span className="font-normal text-lg">calories</span>
                </div>
                <div class="steps  bg-[#ddd29d] p-5 text-2xl font-semibold rounded-3xl flex-1 flex flex-col items-start justify-center">
                  7,657
                  <br />
                  <span className="font-normal text-lg">steps</span>
                </div>
                <div class="workouts  bg-[#f0c3e2] p-5 text-2xl font-semibold rounded-3xl flex-1 flex flex-col items-start justify-center">
                  4,96 km
                  <br />
                  <span className="font-normal text-lg">workouts</span>
                </div>
              </div>
            </div>

            {/* <div class="healthbar ">
              <div class="justify-between flex p-4">
                <p class="text-current">
                  Average heart rate: <span class="font-bold">88bpm</span>
                </p>
                <p class="text-current">
                  level: <span class="font-bold">average(69-99)</span>
                </p>
              </div>
              <div class="bg-gradient-to-r from-green-600 to-orange-600 p-6 ms-2 me-2 rounded-xl"></div>
            </div> */}

            <div class="recent p-4 mt-5 ">
              <div class=" flex justify-between">
                <h1 class=" font-bold bg-transparent dark:bg-transparent dark:text-text-dark text-2xl">My recent</h1>
                <p class="text-main-color text-md">see all</p>
              </div>
            </div>

               
              <div className="bg-white dark:bg-dark-gray-dark p-4 mt-4 rounded-3xl w-full "> 
              <table class=" table-auto w-full   space-between">
                <tbody>
                  {[...Array(4)].map((_, index) => (
                    <tr class="space-between ">
                      <td className="py-3">
                        <div class="img">
                          <img
                            class="rounded-full w-12 "
                            src="https://img.freepik.com/free-vector/hand-drawn-fat-person-cartoon-illustration_52683-116942.jpg"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>
                        <div className="title  bg-transparent dark:bg-transparent dark:text-text-dark">
                          Calories burning
                          <br />
                          <span className="text-black/60  bg-transparent dark:bg-transparent dark:text-text-dark">By niko avocado</span>
                        </div>
                      </td>
                      <td>
                        <div className="pages  bg-transparent dark:bg-transparent dark:text-text-dark">22 pages</div>
                      </td>
                      <td className="time  bg-transparent dark:bg-transparent dark:text-text-dark">3hr.17min</td>
                      <td className="level">
                        <button className="bg-yellow-500/60 dark:bg-yellow-500/90 dark:text-text-dark place-content-center  rounded-full  p-1.5 pr-4 pl-4 ">
                          beginner
                        </button>
                      </td>
                      <td className="price  bg-transparent dark:bg-transparent dark:text-text-dark">Free</td>
                      <td>
                        <button className="btn place-content-center       dark:text-text-dark ">open</button>
                      </td>
                      <td className="bg-transparent dark:bg-transparent dark:text-text-dark">...</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              </div>
            </div> 

          <div class="side2  bg-[#c2da61] h-fit p-6 mt-4 mb-4 mr-4 w-1/3 rounded-3xl ">
            <div class="w-full flex flex-col">
              {/* header */}
              <div class="flex justify-between items-center mb-5">
                <button className="h-[42px] w-[42px] bg-stone-100/70 flex items-center justify-center rounded-full text-black cursor-pointer">
                  <LuX />
                </button>
                <span class="ml-2 text-sm text-black font-medium">
                  My daily tasks
                </span>
                <img
                  src={Doc2}
                  alt="Home Workouts"
                  class="h-10 w-10 rounded-full"
                />
              </div>
              {/* title */}
              <h1 class="text-2xl text-black/90 font-semibold leading-7 text-center w-full mx-auto mb-5">
                You have new tasks
                <br /> remaining
              </h1>

              <div class="flex justify-between items-center mb-2">
                <div class="flex items-center gap-1">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/017/609/000/non_2x/minimal-house-icon-website-symbol-site-sign-ui-home-icon-home-creative-icon-minimalist-vector.jpg"
                    alt="Home Workouts"
                    class="h-12 w-12 rounded-full"
                  />
                  <span class="ml-2 text-sm font-semibold text-black/90 flex flex-col gap-0.5">
                    Home workouts
                    <span className="font-normal text-xs text-black/80">
                      Task (3/15)
                    </span>
                  </span>
                </div>
                <p class="text-xl text-black/90">
                  <LuMoreHorizontal />
                </p>
              </div>
              <ul class="mt-2 space-y-2.5">
                <label class="flex items-center justify-between bg-white p-3.5 rounded-2xl shadow-sm cursor-pointer">
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      class="h-4 w-4 border-red-400 accent-main-color text-white"
                    />
                    <span class="ml-2 text-sm text-gray-800 font-medium">
                      Plank
                    </span>
                  </div>
                  <span class="text-xs text-gray-500">00:30</span>
                </label>
                <label class="flex items-center justify-between bg-white p-3.5 rounded-2xl shadow-sm cursor-pointer">
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      class="h-4 w-4 border-red-400 accent-main-color text-white"
                    />
                    <span class="ml-2 text-sm text-gray-800 font-medium">
                      Squats
                    </span>
                  </div>
                  <span class="text-xs text-gray-500">25x</span>
                </label>
                <label class="flex items-center justify-between bg-white p-3.5 rounded-2xl shadow-sm cursor-pointer">
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      class="h-4 w-4 border-red-400 accent-main-color text-white"
                    />
                    <span class="ml-2 text-sm text-gray-800 font-medium">
                      Sit-ups
                    </span>
                  </div>
                  <span class="text-xs text-gray-500">30x</span>
                </label>
                <label class="flex items-center justify-between bg-white opacity-65 pointer-events-none p-3.5 rounded-2xl shadow-sm cursor-pointer">
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      checked={true}
                      class="h-4 w-4 border-red-400 accent-main-color text-white"
                    />
                    <span class="ml-2 text-sm text-gray-800 font-medium line-through">
                      Jumping Jacks
                    </span>
                  </div>
                  <span class="text-xs text-gray-500">40x</span>
                </label>
                <label class="flex items-center justify-between bg-white opacity-40 pointer-events-none p-3.5 rounded-2xl shadow-sm cursor-pointer">
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      checked={true}
                      class="h-4 w-4 border-red-400 accent-main-color text-white"
                    />
                    <span class="ml-2 text-sm text-gray-800 font-medium line-through">
                      Push-ups
                    </span>
                  </div>
                  <span class="text-xs text-gray-500">10x</span>
                </label>
              </ul>
            </div>

            <div class="mt-6 flex flex-col gap-4 w-full">
              <div class="flex justify-between items-center mb-2">
                <div class="flex items-center flex-col gap-1">
                  <h1 class=" text-base font-semibold text-black/90 flex gap-1 items-center">
                    Challenge Invitation
                    <div className="font-medium text-xs h-5 w-5 text-white bg-black/80 rounded-full flex items-center justify-center">
                      8
                    </div>
                  </h1>
                  <span className="font-normal text-xs text-black">
                  From June to December, 2023
                  </span>
                </div>
                <p class="text-xl text-black/90">
                  <LuMoreHorizontal />
                </p>
              </div>
              <div class=" bg-white p-5 rounded-3xl shadow-md text-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWG2zBNcDrhc3te-UGivdPovLx1UdFFe91pg&s"
                  alt="Challenge"
                  class="mx-auto mb-1"
                />
                <p class="text-xl text-gray-800 font-medium">
                  Join our next event #5
                </p>
                <p class="text-xs text-gray-500">25 Jun, 2023</p>
                <div class="mt-6 flex justify-around w-full gap-2">
                  <button class="w-full bg-main-color text-white font-semibold px-4 py-2.5 rounded-2xl text-sm">
                    Accept
                  </button>
                  <button class="w-full bg-gray-300 text-black font-semibold px-4 py-2.5 rounded-2xl text-sm">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;

import React from "react";
import Leftbar from "../Components/Leftbar";
import Topbar from "../Components/Topbar";
import Rightbar from "../Components/Rightbar";
import Statistics from "../Components/Statistics";
import { RxMixerHorizontal } from "react-icons/rx";
import { LuChevronDown, LuUpload } from "react-icons/lu";
import { GoHeartFill } from "react-icons/go";

function Overview() {
  return (
    <div className="flex flex-col items-start justify-start bg-main-body dark:bg-main-body-dark">
      <Topbar />
      <div className="w-full flex items-start justify-between">
        <div class="flex w-full h-full">
          <div class="side1 p-4 ml-4 w-2/3  ">
            <div class="intro m-4">
              <h1 class="text-xl font-bold"> Hi ,orleon studio</h1>
              <p class="text-sm opacity-60">
                effortlessly records and analyze your life
              </p>
            </div>
            <div class="stats flex ">
              <div class="heartrate w-2/3 px-4 pt-4 pb-2 bg-white text-black m-2 rounded-3xl ">
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
                    88 <span className="opacity-40">BPM</span> <GoHeartFill className="text-main-color" />
                  </h1>
                  <h1 className="text-sm opacity-45">12 - 19 Jul 2023</h1>
                </div>
                <Statistics />
              </div>
              <div class="smallerstats w-1/3 min-h-full bg-red-400  ">
                <div class="calories bg-teal-400 p-4 m-2 rounded-3xl">
                  245
                  <br />
                  calories
                </div>
                <div class="steps  bg-orange-400 p-4 m-2 rounded-xl">
                  7,657
                  <br />
                  steps
                </div>
                <div class="workouts  bg-blue-300 p-4 m-2 rounded-xl">
                  4,96km
                  <br />
                  workouts
                </div>
              </div>
            </div>

            <div class="healthbar ">
              <div class="justify-between flex p-4">
                <p class="text-current">
                  Average heart rate: <span class="font-bold">88bpm</span>
                </p>
                <p class="text-current">
                  level: <span class="font-bold">average(69-99)</span>
                </p>
              </div>
              <div class="bg-gradient-to-r from-green-600 to-orange-600 p-6 ms-2 me-2 rounded-xl"></div>
            </div>

            <div class="recent p-4 ">
              <div class=" flex justify-between">
                <h1 class="text-lg font-bold">My recent</h1>
                <p class="text-orange-500">see all</p>
              </div>

              <table class="p-4 table-auto w-full mt-4 space-between rounded-xl">
                <tbody>
                  <tr class="space-between p-6 ">
                    <td>
                      <div class="img">
                        <img
                          class="rounded-full w-12"
                          src="https://img.freepik.com/free-vector/hand-drawn-fat-person-cartoon-illustration_52683-116942.jpg"
                          alt=""
                        />
                      </div>
                    </td>
                    <td>
                      <div class="title">
                        calories burning
                        <br />
                        by niko avocado
                      </div>
                    </td>
                    <td>
                      <div class="pages">22 pages</div>
                    </td>
                    <td class="time">3hr.17min</td>
                    <td class="level">
                      <button class=" place-content-center  rounded-full  p-1.5 pr-4 pl-4 bg-yellow-500">
                        beginner
                      </button>
                    </td>
                    <td class="price">Free</td>
                    <td>
                      <button class="btn place-content-center ">open</button>
                    </td>
                    <td>...</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="side2  bg-green-500 p-4 mt-4 mb-4 mr-4 w-1/3 rounded-xl ">
            <p class=" ">my daily tasks</p>
            <h1>you have 15 new tasks remaining</h1>
            <div>home workouts</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;

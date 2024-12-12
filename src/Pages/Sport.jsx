import React, { useEffect, useRef } from "react";
import Topbar from "../Components/Topbar";
import { Chart } from "chart.js";
import { Bar } from "recharts";
import { LuClock } from "react-icons/lu";
import StatisticDark from "../Components/StatisticDark";

function Sport() {
  // const heartBeatChart = new Chart(document.getElementById("heartBeatChart"), {
  //   type: "line",
  //   data: {
  //     labels: ["", "", "", "", "", "", "", "", ""],
  //     datasets: [
  //       {
  //         data: [89, 90, 88, 91, 87, 89, 90, 88, 89],
  //         backgroundColor: "transparent",
  //         borderColor: "#2196F3",
  //         borderWidth: 2,
  //       },
  //     ],
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //         max: 100,
  //       },
  //       x: {
  //         display: false,
  //       },
  //     },
  //     plugins: {
  //       legend: {
  //         display: false,
  //       },
  //     },
  //   },
  // });

  // const moveChart = new Chart(document.getElementById("moveChart"), {
  //   type: "bar",
  //   data: {
  //     labels: ["Move"],
  //     datasets: [
  //       {
  //         label: "Move",
  //         data: [4],
  //         backgroundColor: "#673AB7",
  //       },
  //     ],
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //         max: 12,
  //       },
  //     },
  //     plugins: {
  //       legend: {
  //         display: false,
  //       },
  //     },
  //   },
  // });

  // const targetChart = new Chart(document.getElementById("targetChart"), {
  //   type: "doughnut",
  //   data: {
  //     labels: ["Consumed", "Remaining"],
  //     datasets: [
  //       {
  //         data: [237, 128],
  //         backgroundColor: ["#FF6B6B", "#D3D3D3"],
  //         borderWidth: 0,
  //       },
  //     ],
  //   },
  //   options: {
  //     cutoutPercentage: 60,
  //     responsive: true,
  //     maintainAspectRatio: false,
  //     legend: {
  //       display: false,
  //     },
  //   },
  // });

  // const standChart = new Chart(document.getElementById("standChart"), {
  //   type: "bar",
  //   data: {
  //     labels: ["Stand"],
  //     datasets: [
  //       {
  //         label: "Stand",
  //         data: [375],
  //         backgroundColor: "#4CAF50",
  //       },
  //     ],
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //         max: 500,
  //       },
  //     },
  //     plugins: {
  //       legend: {
  //         display: false,
  //       },
  //     },
  //   },
  // });

  // const exerciseChart = new Chart(document.getElementById("exerciseChart"), {
  //   type: "bar",
  //   data: {
  //     labels: ["Exercise"],
  //     datasets: [
  //       {
  //         label: "Exercise",
  //         data: [19],
  //         backgroundColor: "#FF9800",
  //       },
  //     ],
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //         max: 30,
  //       },
  //     },
  //     plugins: {
  //       legend: {
  //         display: false,
  //       },
  //     },
  //   },
  // });

  // const ctx = document.getElementById("workoutChart").getContext("2d");

  // const workoutChart = new Chart(ctx, {
  //   type: "bar",
  //   data: {
  //     labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  //     datasets: [
  //       {
  //         label: "Total Calories",
  //         data: [80, 120, 90, 150, 120, 120, 80],
  //         backgroundColor: "#3b82f6", // Blue color
  //       },
  //     ],
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //         ticks: {
  //           stepSize: 20,
  //           callback: function (value, index, ticks) {
  //             return value;
  //           },
  //         },
  //       },
  //     },
  //     plugins: {
  //       title: {
  //         display: true,
  //         text: "Workout Statistic",
  //       },
  //     },
  //   },
  // });

  return (
    <div className="flex flex-col items-start justify-start bg-main-body dark:bg-main-body-dark">
      <Topbar />
      <div className="w-full">
        <div class=" mx-auto p-6 lg:p-10 w-full text-dark-gray-dark dark:text-white">
          <div class=" ">
            <div class="flex items-center justify-between mb-6 ">
              <div class="welcome">
                <p class="text-md text-opacity-50">Goodmorning</p>
                <p class="text-2xl font-medium">Welcome back!</p>
              </div>
              <div class="profile flex gap-9">
                <div class="data">
                  <p class="text-base font-medium opacity-65">Weight balance</p>
                  <p class="bold opacity-65">
                    <span className="font-medium text-xl opacity-100">73</span>
                    kg
                  </p>
                </div>
                <div class="data">
                  <p class="text-base font-medium opacity-65">Heart rate</p>
                  <p class="bold opacity-65">
                    <span className="font-medium text-xl opacity-100">90</span>
                    bpm
                  </p>
                </div>
                <div class="data">
                  <p class="text-base font-medium opacity-65">
                    Hydration level
                  </p>
                  <p class="bold opacity-65">
                    <span className="font-medium text-xl opacity-100">86</span>%
                  </p>
                </div>
                <div class="data">
                  <p class="text-base font-medium opacity-65">Blood Presure</p>
                  <p class="bold opacity-65">
                    <span className="font-medium text-xl opacity-100">11</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class=" flex gap-4">
            <div class="bg-white dark:bg-dark-gray-dark rounded-lg p-6 flex flex-col justify-between w-2/3">
              <div class="flex items-center justify-between">
                <div>
                  <p class=" text-2xl font-medium">Calisthenics Workout</p>
                  <p class=" text-dark-gray-dark/80">
                    the next biggest thing in next door lorem
                  </p>
                </div>
                <div class="flex gap-2">
                  <select
                    class="bg-dark-gray dark:bg-[#383838] items-center px-4 py-2 rounded-md text-sm"
                    name="workout"
                    id=""
                  >
                    <option value="option1">This week</option>
                    <option value="option2">This month</option>
                    <option value="option3">This year</option>
                  </select>

                  {/* <!-- change needed on the color of button --> */}
                  <button class="bg-main-color text-white px-4 py-2 rounded-md text-sm font-medium">
                    + Add Workout
                  </button>
                </div>
              </div>

              <div class="flex gap-2 justify-between items-center mt-4">
                <div class=" w-1/2 p-4 border border-stone-200 dark:border-stone-500/40 rounded-lg shadow-lg space-y-4">
                  {/* <!-- Icon and Progress --> */}
                  <div class="flex justify-between items-center">
                    <div class=" flex flex-col gap-2 ">
                      <img class="w-8 h-8" src="../public/favicon.png" alt="" />
                      <span class="text-sm font-medium">Progress</span>
                      <h3 class="text-lg font-semibold">Upper Body</h3>
                      <div class="flex items-center space-x-4 text-sm ">
                        <div class="flex items-center space-x-1">
                          <span class="bg-dark-gray text-dark-gray-dark dark:bg-[#303030] dark:text-dark-gray/90 px-2 py-1 rounded-md">
                            Biceps
                          </span>
                        </div>
                        <div class="flex items-center space-x-1">
                          <LuClock />
                          <span>2 hours</span>
                        </div>
                      </div>
                    </div>

                    <div class="relative w-24 h-24">
                      <svg
                        class="absolute top-0 left-0 w-24 h-24 p-1 transform -rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 36 36"
                      >
                        <circle
                          class="stroke-stone-300 dark:dark:stroke-[#303030]"
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke-width="3"
                        />
                        <circle
                          class="stroke-[#F29885]"
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke-width="3"
                          stroke-dasharray="101"
                          stroke-dashoffset="59"
                        />
                      </svg>
                      <div class="absolute inset-0 flex items-center justify-center">
                        <span class="text-sm font-bold">59%</span>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Title --> */}

                  {/* <!-- Details --> */}

                  {/* <!-- Button --> */}
                  <button class="w-full bg-dark-gray text-dark-gray-dark dark:bg-[#303030] dark:text-text-dark  py-2 px-4 rounded-md mt-4 flex items-center justify-between">
                    <span>Continue the exercise</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </div>

                <div class="w-1/2 p-4 border border-stone-200 dark:border-stone-500/40 rounded-lg shadow-lg space-y-4">
                  {/* <!-- Icon and Progress --> */}
                  <div class="flex justify-between items-center">
                    <div class=" flex flex-col gap-2 ">
                      <img class="w-8 h-8" src="../public/favicon.png" alt="" />
                      <span class="text-sm font-medium">Progress</span>
                      <h3 class="text-lg font-semibold">Lower Body</h3>
                      <div class="flex items-center space-x-4 text-sm ">
                        <div class="flex items-center space-x-1">
                          <span class="bg-dark-gray text-dark-gray-dark dark:bg-[#303030] dark:text-dark-gray/90 px-2 py-1 rounded-md">
                            Cardio
                          </span>
                        </div>
                        <div class="flex items-center space-x-1">
                          <LuClock />
                          <span>1.5 hours</span>
                        </div>
                      </div>
                    </div>

                    <div class="relative w-24 h-24">
                      <svg
                        class="absolute top-0 left-0 w-24 h-24 p-1 transform -rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 36 36"
                      >
                        <circle
                          class="stroke-stone-300 dark:stroke-[#303030]"
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke-width="3"
                        />
                        <circle
                          class="stroke-blue-500"
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke-width="3"
                          stroke-dasharray="101"
                          stroke-dashoffset="59"
                        />
                      </svg>
                      <div class="absolute inset-0 flex items-center justify-center">
                        <span class="text-sm font-bold">89%</span>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Title --> */}

                  {/* <!-- Details --> */}

                  {/* <!-- Button --> */}
                  <button class="w-full bg-dark-gray text-dark-gray-dark dark:bg-[#303030] dark:text-text-dark  py-2 px-4 rounded-md mt-4 flex items-center justify-between">
                    <span>Continue the exercise</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class=" rounded-lg w-1/3">
              <div class="text-dark-gray-dark dark:text-text-dark rounded-lg">
                <h2 class="text-lg font-medium mb-3 opacity-65">
                  Fitness Goal Building Your Fitness:
                </h2>

                {/* <!-- Fitness Item 1 --> */}
                <div class="flex items-center bg-white dark:bg-dark-gray-dark rounded-lg p-4 mb-3">
                  <div class="bg-dark-gray text-dark-gray-dark dark:bg-[#383838] dark:text-dark-gray text-center text-sm font-bold py-1 px-3 rounded-lg w-16">
                    10 Min
                  </div>
                  <div class="ml-4 flex-1">
                    <h3 class="font-semibold">ABS& Stretch</h3>
                    <p class="text-sm opacity-50">10 min / day</p>
                  </div>
                </div>

                {/* <!-- Fitness Item 2 --> */}
                <div class="flex items-center bg-white dark:bg-dark-gray-dark rounded-lg p-4 mb-3">
                  <div class="bg-dark-gray text-dark-gray-dark dark:bg-[#383838] dark:text-dark-gray text-center text-sm font-bold py-1 px-3 rounded-lg w-16">
                    12 Sets
                  </div>
                  <div class="ml-4 flex-1">
                    <h3 class="font-semibold">Side planks</h3>
                    <p class="text-sm opacity-50">12 sets / day</p>
                  </div>
                </div>

                {/* <!-- Fitness Item 3 --> */}
                <div class="flex items-center bg-white dark:bg-dark-gray-dark rounded-lg p-4 mb-3">
                  <div class="bg-dark-gray text-dark-gray-dark dark:bg-[#383838] dark:text-dark-gray text-center text-sm font-bold py-1 px-3 rounded-lg w-16">
                    10 Sets
                  </div>
                  <div class="ml-4 flex-1">
                    <h3 class="font-semibold">Rope lifting</h3>
                    <p class="text-sm opacity-50 ">10 sets / day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex w-full gap-4">
            <div class="Statistics bg-white dark:bg-dark-gray-dark mt-4 p-4 rounded-lg w-1/2">
              <div class="flex justify-between">
                <h1>Workout Statistics</h1>
                <select
                  class="bg-dark-gray dark:bg-[#383838] items-center px-4 py-2 rounded-md text-sm"
                  name="workout"
                  id=""
                >
                  <option value="option1">This week</option>
                  <option value="option2">This month</option>
                  <option value="option3">This year</option>
                </select>
              </div>
              <div class="workout-chart">
                {/* <canvas id="workoutChart"></canvas> */}
                <StatisticDark />
              </div>
            </div>
            <div class="bg-white dark:bg-dark-gray-dark mt-4 p-4 rounded-lg w-1/2">
              <div class="mb-4 flex justify-between items-center">
                <h1>Run Activity</h1>
                <button class=" flex bg-dark-gray dark:bg-[#383838]  px-6 py-2 rounded-md text-sm gap-2   justify-between">
                  <span>View Details</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>

              <div class="flex justify-between items-center gap-6">
                <div class="w-1/2">
                  <iframe
                    class=" rounded-lg w-full"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12419.922228035053!2d30.101183149999997!3d-1.8814776500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2srw!4v1733970555386!5m2!1sen!2srw"
                    width="250"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div class="w-1/2 flex flex-col gap-2">
                  <p>Yesterday - 6:30 AM -7:30 AM</p>
                  <p>running from home to alu</p>
                  <p>120 kcal. 2.0 km</p>
                  <span class="border-b border-stone-300 dark:border-stone-400/30"></span>
                  <table class=" w-full">
                    <tr>
                      <td>total steps</td>
                      <td>5000</td>
                    </tr>
                    <tr>
                      <td>total calories</td>
                      <td>150</td>
                    </tr>
                    <tr>
                      <td>total time</td>
                      <td>2 hours</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-dark-gray-dark rounded-lg p-6 mt-6">
            <h2 class="text-lg font-semi mb-4">My Exercise</h2>
            <div class="overflow-x-auto">
              <table class="w-full table-auto">
                <thead>
                  <tr class="bg-stone-200 dark:bg-[#383838]">
                    <th class="px-4 py-2 text-left">Name of Exercise</th>
                    <th class="px-4 py-2 text-left">Set</th>
                    <th class="px-4 py-2 text-left">Reps</th>
                    <th class="px-4 py-2 text-left">Weight</th>
                    <th class="px-4 py-2 text-left">Total Calories</th>
                    <th class="px-4 py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-stone-200 dark:border-stone-600/40">
                    <td class="px-4 py-2">Biceps and Chest</td>
                    <td class="px-4 py-2">15 Sets</td>
                    <td class="px-4 py-2">15-20 Repetition</td>
                    <td class="px-4 py-2">50 kg-60 kg</td>
                    <td class="px-4 py-2">150 Cal</td>
                    <td class="px-4 py-2 text-green-700">Complete</td>
                  </tr>
                  <tr class="border-b border-stone-200 dark:border-stone-600/40">
                    <td class="px-4 py-2">Biceps and Chest</td>
                    <td class="px-4 py-2">15 Sets</td>
                    <td class="px-4 py-2">15-20 Repetition</td>
                    <td class="px-4 py-2">50 kg-60 kg</td>
                    <td class="px-4 py-2">150 Cal</td>
                    <td class="px-4 py-2 text-green-700">Complete</td>
                  </tr>
                  <tr class="border-b border-stone-200 dark:border-stone-600/40">
                    <td class="px-4 py-2">Biceps and Chest</td>
                    <td class="px-4 py-2">15 Sets</td>
                    <td class="px-4 py-2">15-20 Repetition</td>
                    <td class="px-4 py-2">50 kg-60 kg</td>
                    <td class="px-4 py-2">150 Cal</td>
                    <td class="px-4 py-2 text-green-700 rounded-lg justify-center">
                      Complete
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sport;

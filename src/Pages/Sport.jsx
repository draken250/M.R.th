import React, { useEffect, useRef } from "react";
import Topbar from "../Components/Topbar";
import { Chart } from "chart.js";

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
      <div>
        <div class="container mx-auto p-6 lg:p-10">
          <div class="container ">
            <div class="flex items-center justify-between mb-6">
              <div class="welcome">
                <p class="text-md">Goodmorning</p>
                <p class="text-2xl">Welcome back!</p>
              </div>
              <div class="profile flex gap-6">
                <div class="data">
                  <p class="text-sm">weight balance</p>
                  <p class="bold">73kg</p>
                </div>
                <div class="data">
                  <p class="text-sm">Heart rate</p>
                  <p class="bold">90bpm</p>
                </div>
                <div class="data">
                  <p class="text-sm">Hydration level</p>
                  <p class="bold">86%</p>
                </div>
                <div class="data">
                  <p class="text-sm">Blood Presure</p>
                  <p class="bold">11</p>
                </div>
              </div>
            </div>
          </div>

          <div class=" flex gap-4">
            <div class="bg-gray-800 rounded-lg p-6 flex flex-col justify-between w-2/3">
              <div class="flex items-center justify-between">
                <div>
                  <p class=" text-2xl font-bold">Calisthenics Workout</p>
                  <p class="text-gray-400">
                    the next biggest thing in next door lorem
                  </p>
                </div>
                <div class="flex gap-2">
                  <select
                    class="bg-transparent hover:bg-gray-600 items-center px-4 py-2 rounded-md text-sm border"
                    name="workout"
                    id=""
                  >
                    <option value="option1">This week</option>
                    <option value="option2">This month</option>
                    <option value="option3">This year</option>
                  </select>

                  {/* <!-- change needed on the color of button --> */}
                  <button class="bg-orange-400 hover:bg-orange-600 px-4 py-2 rounded-md text-sm font-medium">
                    + Add Workout
                  </button>
                </div>
              </div>

              <div class="flex gap-2 justify-between items-center mt-4">
                <div class=" w-1/2 text-white p-4 border border-slate-600 rounded-lg shadow-lg space-y-4">
                  {/* <!-- Icon and Progress --> */}
                  <div class="flex justify-between items-center">
                    <div class=" flex flex-col gap-2 ">
                      <img class="w-8 h-8" src="../public/favicon.png" alt="" />
                      <span class="text-sm font-medium">Progress</span>
                      <h3 class="text-lg font-semibold">Upper Body</h3>
                      <div class="flex items-center space-x-4 text-sm text-gray-400">
                        <div class="flex items-center space-x-1">
                          <span class="bg-gray-500 text-gray-200 px-2 py-1 rounded-md">
                            Biceps
                          </span>
                        </div>
                        <div class="flex items-center space-x-1">
                          <svg
                            xmlns="../../public/clock-lines-svgrepo-com.svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M8.25 15h7.5M8.25 12h7.5M8.25 9h7.5M3.75 15h.008v.008H3.75v-.008zM3.75 12h.008v.008H3.75v-.008zM3.75 9h.008v.008H3.75V9zm16.5 6h.008v.008H20.25v-.008zm0-3h.008v.008H20.25v-.008zm0-3h.008v.008H20.25V9z"
                            />
                          </svg>
                          <span>2 hours</span>
                        </div>
                      </div>
                    </div>

                    <div class="relative w-24 h-24">
                      <svg
                        class="absolute top-0 left-0 w-full h-full transform -rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 36 36"
                      >
                        <circle
                          class="stroke-gray-700"
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke-width="2"
                        />
                        <circle
                          class="stroke-[#F29885]"
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke-width="2"
                          stroke-dasharray="100"
                          stroke-dashoffset="41"
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
                  <button class="w-full bg-[#f0f8ff26] text-white py-2 px-4 rounded-md mt-4 flex items-center justify-between">
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

                <div class="w-1/2 text-white p-4 border border-slate-600 rounded-lg shadow-lg space-y-4">
                  {/* <!-- Icon and Progress --> */}
                  <div class="flex justify-between items-center">
                    <div class=" flex flex-col gap-2 ">
                      <img class="w-8 h-8" src="../public/favicon.png" alt="" />
                      <span class="text-sm font-medium">Progress</span>
                      <h3 class="text-lg font-semibold">Lower Body</h3>
                      <div class="flex items-center space-x-4 text-sm text-gray-400">
                        <div class="flex items-center space-x-1">
                          <span class="bg-gray-500 text-gray-200 px-2 py-1 rounded-md">
                            Cardio
                          </span>
                        </div>
                        <div class="flex items-center space-x-1">
                          <svg
                            xmlns="../../public/clock-lines-svgrepo-com.svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M8.25 15h7.5M8.25 12h7.5M8.25 9h7.5M3.75 15h.008v.008H3.75v-.008zM3.75 12h.008v.008H3.75v-.008zM3.75 9h.008v.008H3.75V9zm16.5 6h.008v.008H20.25v-.008zm0-3h.008v.008H20.25v-.008zm0-3h.008v.008H20.25V9z"
                            />
                          </svg>
                          <span>1.5 hours</span>
                        </div>
                      </div>
                    </div>

                    <div class="relative w-24 h-24">
                      <svg
                        class="absolute top-0 left-0 w-full h-full transform -rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 36 36"
                      >
                        <circle
                          class="stroke-gray-700"
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke-width="2"
                        />
                        <circle
                          class="stroke-blue-500"
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke-width="2"
                          stroke-dasharray="100"
                          stroke-dashoffset="11"
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
                  <button class="w-full bg-[#f0f8ff26] text-white py-2 px-4 rounded-md mt-4 flex items-center justify-between">
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
              <div class="   text-white  rounded-lg">
                <h2 class="text-lg font-semibold mb-4">
                  Fitness Goal Building Your Fitness:
                </h2>

                {/* <!-- Fitness Item 1 --> */}
                <div class="border border-slate-600 flex items-center bg-gray-800 rounded-lg p-4 mb-3">
                  <div class="bg-gray-700 text-center text-sm font-bold text-white py-1 px-3 rounded-lg w-16">
                    10 Min
                  </div>
                  <div class="ml-4 flex-1">
                    <h3 class="font-semibold">ABS& Stretch</h3>
                    <p class="text-sm text-gray-400">10 min / day</p>
                  </div>
                </div>

                {/* <!-- Fitness Item 2 --> */}
                <div class="flex border border-slate-600 items-center bg-gray-800 rounded-lg p-4 mb-3">
                  <div class="bg-gray-700 text-center text-sm font-bold text-white py-1 px-3 rounded-lg w-16">
                    12 Sets
                  </div>
                  <div class="ml-4 flex-1">
                    <h3 class="font-semibold">Side planks</h3>
                    <p class="text-sm text-gray-400">12 sets / day</p>
                  </div>
                </div>

                {/* <!-- Fitness Item 3 --> */}
                <div class="flex border border-slate-600 items-center bg-gray-800 rounded-lg p-4">
                  <div class="bg-gray-700 text-center text-sm font-bold text-white py-1 px-3 rounded-lg w-16">
                    10 Sets
                  </div>
                  <div class="ml-4 flex-1">
                    <h3 class="font-semibold">Rope lifting</h3>
                    <p class="text-sm text-gray-400">10 sets / day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex w-full gap-4">
            <div class="Statistics bg-gray-800 mt-4 p-4 rounded-lg w-1/2">
              <div class="flex justify-between">
                <h1>Workout Statistics</h1>
                <select
                  class="bg-transparent hover:bg-gray-600 items-center px-4 py-2 rounded-md text-sm border"
                  name="workout"
                  id=""
                >
                  <option value="option1">This week</option>
                  <option value="option2">This month</option>
                  <option value="option3">This year</option>
                </select>
              </div>
              <div class="workout-chart">
                <canvas id="workoutChart"></canvas>
              </div>
            </div>
            <div class="bg-gray-800 mt-4 p-4 rounded-lg w-1/2">
              <div class="mb-4 flex justify-between">
                <h1>Run Activity</h1>
                <button class=" flex bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-md text-sm gap-2   justify-between">
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

              <div class="flex justify-between">
                <div class="w-1/2">
                  <iframe
                    class=" rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12419.922228035053!2d30.101183149999997!3d-1.8814776500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2srw!4v1733970555386!5m2!1sen!2srw"
                    width="250"
                    height="250"
                    style={{border:0}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div class="w-1/2 flex flex-col gap-2">
                  <p>Yesterday - 6:30 AM -7:30 AM</p>
                  <p>running from home to alu</p>
                  <p>120 kcal. 2.0 km</p>
                  <span class="border-b border-gray-600"></span>
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

          <div class="bg-gray-800 rounded-lg p-6 mt-6">
            <h2 class="text-xl font-bold mb-4">My Exercise</h2>
            <div class="overflow-x-auto">
              <table class="w-full table-auto">
                <thead>
                  <tr class="bg-gray-700">
                    <th class="px-4 py-2 text-left">Name of Exercise</th>
                    <th class="px-4 py-2 text-left">Set</th>
                    <th class="px-4 py-2 text-left">Reps</th>
                    <th class="px-4 py-2 text-left">Weight</th>
                    <th class="px-4 py-2 text-left">Total Calories</th>
                    <th class="px-4 py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-gray-700">
                    <td class="px-4 py-2">Biceps and Chest</td>
                    <td class="px-4 py-2">15 Sets</td>
                    <td class="px-4 py-2">15-20 Repetition</td>
                    <td class="px-4 py-2">50 kg-60 kg</td>
                    <td class="px-4 py-2">150 Cal</td>
                    <td class="px-4 py-2 text-green-500">Complete</td>
                  </tr>
                  <tr class="border-b border-gray-700">
                    <td class="px-4 py-2">Biceps and Chest</td>
                    <td class="px-4 py-2">15 Sets</td>
                    <td class="px-4 py-2">15-20 Repetition</td>
                    <td class="px-4 py-2">50 kg-60 kg</td>
                    <td class="px-4 py-2">150 Cal</td>
                    <td class="px-4 py-2 text-green-500">Complete</td>
                  </tr>
                  <tr class="border-b border-gray-700">
                    <td class="px-4 py-2">Biceps and Chest</td>
                    <td class="px-4 py-2">15 Sets</td>
                    <td class="px-4 py-2">15-20 Repetition</td>
                    <td class="px-4 py-2">50 kg-60 kg</td>
                    <td class="px-4 py-2">150 Cal</td>
                    <td class="px-4 py-2 text-green-500 bg-gray-500 rounded-lg justify-center">
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

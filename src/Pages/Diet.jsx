import React from "react";
import Topbar from "../Components/Topbar";
import { RxMixerHorizontal } from "react-icons/rx";
import { IoShareSocialOutline } from "react-icons/io5";
import { RiShareFill } from "react-icons/ri";
import { GrBook } from "react-icons/gr";
import { LuCoffee, LuCookie, LuDessert, LuVegan } from "react-icons/lu";
import { BiBowlRice } from "react-icons/bi";
import { PiCookingPot, PiWine } from "react-icons/pi";
import { TbSoup } from "react-icons/tb";

function Diet() {
  return (
    <div className="flex flex-col items-start justify-start bg-main-body dark:bg-main-body-dark">
      <Topbar />
      <div class="min-h-screen h-full flex flex-col w-full text-grey">
        <div class="flex px-5 pb-5 bg-main-body w-full h-full flex-1">
          <aside class="bg-transparent w-56 p-4">
            <ul class="space-y-4">
              <li>
                <a href="#" class="hover:text-gray-400">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-400">
                  Cooking Courses
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-400">
                  Recently Viewed
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-400">
                  Weekly Prep
                </a>
              </li>
              <li>
                <a href="#" class="text-orange-500">
                  Saved Recipes
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-400">
                  Grocery List
                </a>
              </li>
            </ul>
          </aside>

          <main class="flex-1 p-7 bg-white rounded-3xl w-full min-h-full">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 text-gray-800">
              <div>
                <h1 class="text-2xl font-semibold">Saved Recipes</h1>
                <p class="text-gray-400 text-sm">8 recipes</p>
              </div>
              <div class="flex flex-wrap items-center gap-2">
                <button class="flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-full hover:bg-stone-200">
                  <RxMixerHorizontal className="text-lg" />
                  <span>Filters</span>
                </button>
                <button class="flex items-center gap-2 px-4 py-2 text-sm bg-orange-500 text-white rounded-full hover:bg-main-color">
                  <RiShareFill className="text-lg" />
                  Share
                </button>
              </div>
            </div>

            <div class="flex gap-4 mb-8">
              <a
                href="#"
                className="text-sm font-semibold flex flex-col items-center justify-center px-0 min-w-[60px] gap-2 text-orange-500 hover:text-orange-500"
              >
                <GrBook className="text-2xl" />
                All Recipes
              </a>
              <a
                href="#"
                className="text-sm font-medium flex flex-col items-center justify-center px-0 min-w-[60px] gap-2 text-black/90 hover:text-orange-500"
              >
                <LuCoffee className="text-2xl" />
                Breakfasts
              </a>
              <a
                href="#"
                className="text-sm font-medium flex flex-col items-center justify-center px-0 min-w-[60px] gap-2 text-black/90  hover:text-orange-500"
              >
                <BiBowlRice className="text-2xl" />
                Lunches
              </a>
              <a
                href="#"
                className="text-sm font-medium flex flex-col items-center justify-center px-0 min-w-[60px] gap-2 text-black/90  hover:text-orange-500"
              >
                <LuDessert className="text-2xl" />
                Desserts
              </a>
              <a
                href="#"
                className="text-sm font-medium flex flex-col items-center justify-center px-0 min-w-[60px] gap-2 text-black/90  hover:text-orange-500"
              >
                <PiWine className="text-2xl" />
                Dinner
              </a>
              {/* <a
                href="#"
                class="text-sm font-medium text-black/40 hover:text-orange-500"
              >
                Sides
              </a> */}
              <a
                href="#"
                className="text-sm font-medium flex flex-col items-center justify-center px-0 min-w-[60px] gap-2 text-black/90 hover:text-orange-500"
              >
                <LuCookie className="text-2xl" />
                Snacks
              </a>
              <a
                href="#"
                className="text-sm font-medium flex flex-col items-center justify-center px-0 min-w-[60px] gap-2 text-black/90 hover:text-orange-500"
              >
                <TbSoup className="text-2xl" />
                Soups
              </a>
              <a
                href="#"
                className="text-sm font-medium flex flex-col items-center justify-center px-0 min-w-[60px] gap-2 text-black/90 hover:text-orange-500"
              >
                <LuVegan className="text-2xl" />
                Vegan
              </a>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 w-full">
              <div class="bg-gray-100 rounded-2xl overflow-hidden">
                <div class="relative">
                  <img
                    src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken-katsu-curry-d339012.jpg?quality=90&resize=430,390"
                    alt="Recipe"
                    class="w-full h-40 object-cover brightness-90"
                  />
                  <button class="absolute bottom-2 left-2 px-2 py-1 flex items-center gap-1 bg-white shadow text-black/70 text-xs font-medium rounded-full ">
                    <PiCookingPot />
                    30 mins
                  </button>
                </div>
                <div class="p-4">
                  <h2 class="text-lg font-semibold">
                    Salad Caprese Pasta Spaghetti
                  </h2>
                  <p class="text-sm text-gray-400">Fresh Salad</p>
                </div>
              </div>
              <div class="bg-gray-100 rounded-lg overflow-hidden">
                <div class="relative">
                  <img
                    src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&h=350&fit=crop"
                    alt="Recipe"
                    class="w-full h-40 object-cover"
                  />
                  <button class="absolute bottom-2 left-2 px-2 py-1 bg-gray-200 text-black text-xs rounded ">
                    30 mins
                  </button>
                </div>
                <div class="p-4">
                  <h2 class="text-lg font-semibold">
                    Tuscan Panzanella Cherry
                  </h2>
                  <p class="text-sm text-gray-400">Fresh Salad</p>
                </div>
              </div>
              <div class="bg-gray-100 rounded-lg overflow-hidden">
                <div class="relative">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAufvybCKBgrB6OZjyIg60itAzH6s--A315w&s"
                    alt="Recipe"
                    class="w-full h-40 object-cover"
                  />
                  <button class="absolute bottom-2 left-2 px-2 py-1 bg-gray-200 text-black text-xs rounded ">
                    30 mins
                  </button>
                </div>
                <div class="p-4">
                  <h2 class="text-lg font-semibold">
                    Tuscan Panzanella Cherry
                  </h2>
                  <p class="text-sm text-gray-400">Fresh Salad</p>
                </div>
              </div>
              <div class="bg-gray-100 rounded-lg overflow-hidden">
                <div class="relative">
                  <img
                    src="https://www.hauteandhealthyliving.com/wp-content/uploads/2021/12/Healthy-Orange-Chicken-25-500x375.jpg"
                    alt="Recipe"
                    class="w-full h-40 object-cover"
                  />
                  <button class="absolute bottom-2 left-2 px-2 py-1 bg-gray-100 text-black text-xs rounded ">
                    30 mins
                  </button>
                </div>
                <div class="p-4">
                  <h2 class="text-lg font-semibold">
                    Tuscan Panzanella Cherry
                  </h2>
                  <p class="text-sm text-gray-400">Fresh Salad</p>
                </div>
              </div>
              <div class="bg-gray-100 rounded-lg overflow-hidden">
                <div class="relative">
                  <img
                    src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&h=350&fit=crop"
                    alt="Recipe"
                    class="w-full h-40 object-cover"
                  />
                  <button class="absolute bottom-2 left-2 px-2 py-1 bg-gray-200 text-black text-xs rounded ">
                    30 mins
                  </button>
                </div>
                <div class="p-4">
                  <h2 class="text-lg font-semibold">
                    Tuscan Panzanella Cherry
                  </h2>
                  <p class="text-sm text-gray-400">Fresh Salad</p>
                </div>
              </div>
              <div class="bg-gray-100 rounded-lg overflow-hidden">
                <div class="relative">
                  <img
                    src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&h=350&fit=crop"
                    alt="Recipe"
                    class="w-full h-40 object-cover"
                  />
                  <button class="absolute bottom-2 left-2 px-2 py-1 bg-gray-200 text-black text-xs rounded ">
                    30 mins
                  </button>
                </div>
                <div class="p-4">
                  <h2 class="text-lg font-semibold">
                    Tuscan Panzanella Cherry
                  </h2>
                  <p class="text-sm text-gray-400">Fresh Salad</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Diet;

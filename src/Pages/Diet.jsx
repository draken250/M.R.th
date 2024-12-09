import React from "react";
import Topbar from "../Components/Topbar";
import { RxMixerHorizontal } from "react-icons/rx";
import { IoShareSocialOutline } from "react-icons/io5";
import { RiShareFill } from "react-icons/ri";
import { GrBook } from "react-icons/gr";
import { LuCoffee, LuCookie, LuDessert, LuVegan, LuX } from "react-icons/lu";
import { BiBowlRice } from "react-icons/bi";
import { PiCookingPot, PiWine } from "react-icons/pi";
import { TbSoup } from "react-icons/tb";

function Diet() {
  const recipes = [
    {
      id: 1,
      imgSrc:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&h=350&fit=crop",
      title: "Mediterranean Veggie Delight",
      description: "A vibrant mix of fresh vegetables and herbs.",
      time: "25 mins",
    },
    {
      id: 2,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAufvybCKBgrB6OZjyIg60itAzH6s--A315w&s",
      title: "Classic Caprese Salad",
      description: "Tomatoes, mozzarella, and basil at their best.",
      time: "15 mins",
    },
    {
      id: 3,
      imgSrc:
        "https://www.hauteandhealthyliving.com/wp-content/uploads/2021/12/Healthy-Orange-Chicken-25-500x375.jpg",
      title: "Zesty Orange Chicken",
      description: "A tangy and sweet chicken dish.",
      time: "40 mins",
    },
    {
      id: 4,
      imgSrc:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&h=350&fit=crop",
      title: "Hearty Lentil Soup",
      description: "A warm and filling bowl of comfort.",
      time: "50 mins",
    },
    {
      id: 5,
      imgSrc:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&h=350&fit=crop",
      title: "Spicy Thai Noodles",
      description: "A bold and flavorful noodle dish.",
      time: "35 mins",
    },
    {
      id: 6,
      imgSrc:
        "https://tasteofthesouthmagazine.com/wp-content/uploads/2014/08/Summer-Ratatouille.gif",
      title: "Summer Ratatouille",
      description: "A colorful medley of roasted summer vegetables.",
      time: "45 mins",
    },
    {
      id: 7,
      imgSrc:
        "https://www.theslowroasteditalian.com/wp-content/uploads/2023/11/Best-Gooey-Chocolate-Chip-Cookies-Soft-Chewy-Recipe-SQUARE.jpg",
      title: "Chewy Chocolate Chip Cookies",
      description: "Classic cookies with gooey chocolate chunks.",
      time: "20 mins",
    },
    {
      id: 8,
      imgSrc:
        "https://poppopcooks.com/wp-content/uploads/2017/03/Spaghetti-Aglio-e-Olio-with-Chicken-5.jpg",
      title: "Spaghetti Aglio e Olio",
      description: "Simple and flavorful pasta with garlic and olive oil.",
      time: "15 mins",
    },
    {
      id: 9,
      imgSrc:
        "https://ketogasm.com/wp-content/uploads/2018/04/Easy-Keto-Swedish-Meatballs-1-of-6.jpg",
      title: "Keto Meatballs",
      description: "Juicy meatballs in a savory tomato sauce.",
      time: "30 mins",
    },
  ];
  const recipeCategories = [
    { id: 1, category: "High-Protein", icon: <LuX /> },
    { id: 2, category: "Low-Calorie", icon: <LuX /> },
    { id: 3, category: "Gluten-Free", icon: <LuX /> },
    { id: 5, category: "Keto-Friendly", icon: <LuX /> },
    { id: 6, category: "Low-Sugar", icon: <LuX /> },
    { id: 8, category: "Heart-Healthy", icon: <LuX /> },
  ];

  return (
    <div className="flex flex-col items-start justify-start bg-main-body dark:bg-main-body-dark">
      <Topbar />
      <div class="min-h-screen h-full flex flex-col w-full text-grey">
        <div class="flex px-5 pb-5 bg-main-body w-full h-full flex-1">
          <aside class="bg-transparent w-56 p-4">
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-sm">
                  Cooking Courses
                </a>
              </li>
              <li>
                <a href="#" class="text-sm">
                  Recently Viewed
                </a>
              </li>
              <li>
                <a href="#" class="text-sm">
                  Weekly Prep
                </a>
              </li>
              <li>
                <a href="#" class="text-main-color text-sm">
                  Saved Recipes
                </a>
              </li>
              <li>
                <a href="#" class="text-sm">
                  Grocery List
                </a>
              </li>
              {recipeCategories.map((category) => (
                <li key={category.id} className="pl-4">
                  <a href="#" class="hover:text-gray-400 text-sm">
                    {category.category}
                  </a>
                </li>
              ))}
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
                <button class="flex items-center gap-2 px-4 py-2 text-sm bg-main-color text-white rounded-full hover:bg-main-color">
                  <RiShareFill className="text-lg" />
                  Share
                </button>
              </div>
            </div>

            <div class="flex gap-4 mb-8">
              <a
                href="#"
                className="text-sm font-semibold flex flex-col items-center justify-center px-0 min-w-[60px] gap-2 text-main-color hover:text-main-color"
              >
                <GrBook className="text-2xl" />
                All Recipes
              </a>
              <a
                href="#"
                className="text-sm font-medium flex flex-col items-center justify-center px-0 min-w-[60px] gap-2 text-black/90 hover:text-main-color"
              >
                <LuCoffee className="text-2xl" />
                Breakfasts
              </a>
              <a
                href="#"
                className="text-sm font-medium flex flex-col items-center justify-center px-0 min-w-[60px] gap-2 text-black/90  hover:text-main-color"
              >
                <BiBowlRice className="text-2xl" />
                Lunches
              </a>
              <a
                href="#"
                className="text-sm font-medium flex flex-col items-center justify-center px-0 min-w-[60px] gap-2 text-black/90  hover:text-main-color"
              >
                <LuDessert className="text-2xl" />
                Desserts
              </a>
              <a
                href="#"
                className="text-sm font-medium flex flex-col items-center justify-center px-0 min-w-[60px] gap-2 text-black/90  hover:text-main-color"
              >
                <PiWine className="text-2xl" />
                Dinner
              </a>
              {/* <a
                href="#"
                class="text-sm font-medium text-black/40 hover:text-main-color"
              >
                Sides
              </a> */}
              <a
                href="#"
                className="text-sm font-medium flex flex-col items-center justify-center px-0 min-w-[60px] gap-2 text-black/90 hover:text-main-color"
              >
                <LuCookie className="text-2xl" />
                Snacks
              </a>
              <a
                href="#"
                className="text-sm font-medium flex flex-col items-center justify-center px-0 min-w-[60px] gap-2 text-black/90 hover:text-main-color"
              >
                <TbSoup className="text-2xl" />
                Soups
              </a>
              <a
                href="#"
                className="text-sm font-medium flex flex-col items-center justify-center px-0 min-w-[60px] gap-2 text-black/90 hover:text-main-color"
              >
                <LuVegan className="text-2xl" />
                Vegan
              </a>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 w-full">
              {recipes.map((recipe) => (
                <div
                  className="bg-main-body rounded-2xl overflow-hidden"
                  key={recipe.id}
                >
                  <div class="relative">
                    <img
                      src={recipe.imgSrc}
                      class="w-full h-40 object-cover brightness-90"
                    />
                    <button class="absolute bottom-2 left-2 px-2 py-1 flex items-center gap-1 bg-white shadow text-black/70 text-xs font-medium rounded-full ">
                      <PiCookingPot />
                      {recipe.time}
                    </button>
                  </div>
                  <div class="p-4">
                    <h2 class="text-lg font-normal leading-6 mb-2">
                      {recipe.title}
                    </h2>
                    <p class="text-sm text-black/80">{recipe.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Diet;

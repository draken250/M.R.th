import React from "react";
import { MainLogo } from "../assets";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { LuBellDot, LuSearch } from "react-icons/lu";

function Topbar() {
  const location = useLocation();
  return (
    <div className="sticky top-0 w-full py-4 px-5 flex items-center justify-between z-30 bg-main-body/80 dark:bg-main-body-dark/80 backdrop-blur-lg">
      {/* logo */}
      <div className="flex items-center justify-center">
        <img src={MainLogo} className="h-6" />
      </div>
      {/* links */}
      <div className="flex items-center justify-center gap-2">
        <Link
          to="/"
          className={`px-5 py-2.5 rounded-full text-sm ${
            location.pathname === "/"
              ? "bg-main-color text-white"
              : "bg-white dark:bg-dark-gray-dark text-dark-gray-dark dark:text-text-dark"
          }`}
        >
          Overview
        </Link>
        <Link
          to="/Patient_chart"
          className={`px-5 py-2.5 rounded-full text-sm  ${
            location.pathname === "/Patient_chart"
              ? "bg-main-color text-white"
              : "bg-white dark:bg-dark-gray-dark text-dark-gray-dark dark:text-text-dark"
          }`}
        >
          Patient chart
        </Link>
        <Link
          to="/Calendar"
          className={`px-5 py-2.5 rounded-full text-sm  ${
            location.pathname === "/Calendar"
              ? "bg-main-color text-white"
              : "bg-white dark:bg-dark-gray-dark text-dark-gray-dark dark:text-text-dark"
          }`}
        >
          Calendar
        </Link>
        <Link
          to="/Sport"
          className={`px-5 py-2.5 rounded-full text-sm  ${
            location.pathname === "/Sport"
              ? "bg-main-color text-white"
              : "bg-white dark:bg-dark-gray-dark text-dark-gray-dark dark:text-text-dark"
          }`}
        >
          Exercise
        </Link>
        <Link
          to="/Diet"
          className={`px-5 py-2.5 rounded-full text-sm  ${
            location.pathname === "/Diet"
              ? "bg-main-color text-white"
              : "bg-white dark:bg-dark-gray-dark text-dark-gray-dark dark:text-text-dark"
          }`}
        >
          Diet & meals{" "}
        </Link>
      </div>
      {/* profile & notification */}
      <div className="w-fit h-full flex items-center justify-center gap-2">
        <button className="h-[38px] w-auto aspect-square flex items-center justify-center rounded-full bg-white dark:bg-dark-gray-dark dark:text-text-dark text-xl">
          <LuSearch />
        </button>
        <button className="h-[38px] w-auto aspect-square flex items-center justify-center rounded-full bg-white dark:bg-dark-gray-dark dark:text-text-dark text-xl">
          <LuBellDot />
        </button>
        <button className="h-[38px] w-auto aspect-square flex items-center justify-center rounded-full bg-main-color text-white text-xl font-semibold">
          K
        </button>
      </div>
    </div>
  );
}

export default Topbar;

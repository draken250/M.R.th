import React, { useState } from "react";
import { Doc3 } from "../assets";
import { AiOutlineMessage } from "react-icons/ai";
import { LuChevronRight, LuFile } from "react-icons/lu";
import {
  BsCart2,
  BsLayoutSidebarInset,
  BsLayoutSidebarInsetReverse,
} from "react-icons/bs";

function Rightbar() {
  const [width, setWidth] = useState("big");
  const handleWidth = () => {
    if (width === "big") {
      setWidth("small");
    } else {
      setWidth("big");
    }
  };
  const Meds = [
    {
      name: "Ibuprofen",
      desc: "Tablets - 200 mg",
      img: "https://target.scene7.com/is/image/Target/GUEST_be6cd2bf-6aa0-4b87-a746-15495c236bc6?wid=488&hei=488&fmt=pjpeg",
    },
    {
      name: "Omeprazole",
      desc: "Capsules - 20 mg",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1a78apYNd3FYs5t5-45d_Z_qnd6RHg_p0jUxJ764lTleomUX6mhV9A-5rPKfEJ7gjeg8&usqp=CAU",
    },
    {
      name: "Paracetamol",
      desc: "Tablets - 500 mg",
      img: "https://phabcart.imgix.net/cdn/scdn/images/uploads/m0459_web.jpg",
    },
    {
      name: "Saline Spray",
      desc: "Nasal spray - 30 ml",
      img: "https://target.scene7.com/is/image/Target/GUEST_f45b6bb3-ace7-44c0-89eb-7a0a1322b5c5?wid=488&hei=488&fmt=pjpeg",
    },
  ];

  return (
    <div
      className={`px-5 flex flex-col relative text-[#111111] dark:text-text-dark ${
        width === "big" ? "w-[400px]" : "w-[0] transition-all duration-300"
      }`}
    >
      {/* toggler */}
      <button
        onClick={handleWidth}
        className={`absolute top-[10px] ${
          width === "big" ? "left-[-40px]" : "left-[-20px]"
        } text-black/40 hover:text-main-color bg-white dark:bg-dark-gray-dark dark:text-text-dark h-[40px] w-auto flex items-center justify-center text-xl aspect-square rounded-full`}
      >
        <BsLayoutSidebarInsetReverse />
      </button>
      <div
        className={`w-full h-fit flex-col ${
          width === "big" ? "flex" : "hidden"
        }`}
      >
        <div className="flex mb-3 card3 dark:bg-dark-gray-dark dark:text-text-dark ">
          <div className="">
            <h3 className="  font-bold  text-xl capitalize pb-1">fluenza</h3>
            <div className=" flex ">
              <p className=" text-sm font-medium ">
                Last update:{" "}
                <a className="font-normal capitalize text-link-color" href="">
                  thur 21/24 02:30 PM{" "}
                </a>
              </p>
            </div>
            <hr className="bg-dark-gray my-3" />
            <div className="flex flex-col gap-1">
              <p className="uppercase text-sm ">Main Diagnostic:</p>
              <p className=" text-sm font-medium opacity-50">
                {" "}
                Headache with minal scapes from falling from a skyscraper and
                getting a flue
              </p>
            </div>
          </div>
        </div>
        <div className="mb-3 felx flex-col bg-white dark:bg-dark-gray-dark dark:text-text-dark rounded-2xl p-4 ">
          <div className="flex flex-col gap-2">
            <h3 className="  font-medium uppercase text-sm">
              Doctor in charge:
            </h3>
            <div className=" flex gap-3 items-center justify-between ">
              <div className="flex items-center justify-start gap-2">
                <img src={Doc3} className="w-10 h-10 circle" alt="" />
                <div className="">
                  <p className=" text-sm font-semibold ">Dr.Kwizera Elysee</p>
                  <p className=" text-xs">dentistioligist</p>
                </div>
              </div>
              <div className="bg-main-color text-white text-xl rounded-full h-9 w-auto aspect-square flex items-center justify-center ">
                <AiOutlineMessage />
              </div>
            </div>
          </div>
        </div>

        {/* Meds */}
        <div className="mt-4 mb-2 flex justify-between">
          <h2 className=" font-bold">Medication</h2>
          <button className="text-sm flex items-center gap-1 text-link-color">
            Buy Meds <LuChevronRight />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 w-full">
          {/* Med box */}
          {Meds.map((med, index) => (
            <div className="flex flex-col gap-2 w-full bg-white dark:bg-dark-gray-dark dark:text-text-dark rounded-2xl p-3">
              <div className="flex w-full items-center justify-between">
                <div className="">
                  <h3 className=" font-semibold text-sm capitalize">
                    {med.name}
                  </h3>
                  <p className=" flex justify-between text-sm opacity-50">
                    {med.desc}
                  </p>
                </div>
                <div className="text-xl flex items-center gap-1 text-main-color">
                  <BsCart2 />
                </div>
              </div>
              <div className="prdimg w-full h-[150px] overflow-clip rounded-xl">
                <img
                  src={med.img}
                  className="w-full h-fit min-h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 mb-2 flex justify-between">
          <h2 className=" font-bold clear-start">Additional documentation</h2>
        </div>
        <div className="bg-white dark:bg-dark-gray-dark dark:text-text-dark mb-2 flex items-center w-full p-1 rounded-full ">
          <div className=" flex gap-3 items-center ">
            <div className="bg-dark-gray dark:bg-text-dark/10 dark:text-text-dark h-9 w-auto aspect-square rounded-full flex items-center justify-center">
              <LuFile className="opacity-40" />
            </div>
            <div className="">
              <p className=" text-sm font-medium "> Notes: Home made Meals</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-gray-dark dark:text-text-dark mb-2 flex items-center w-full p-1 rounded-full ">
          <div className=" flex gap-3 items-center ">
            <div className="bg-dark-gray dark:bg-text-dark/10 dark:text-text-dark h-9 w-auto aspect-square rounded-full flex items-center justify-center">
              <LuFile className="opacity-40" />
            </div>
            <div className="">
              <p className=" text-sm font-medium "> Notes: Home made Meals</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-gray-dark dark:text-text-dark mb-2 flex items-center w-full p-1 rounded-full ">
          <div className=" flex gap-3 items-center ">
            <div className="bg-dark-gray dark:bg-text-dark/10 dark:text-text-dark h-9 w-auto aspect-square rounded-full flex items-center justify-center">
              <LuFile className="opacity-40" />
            </div>
            <div className="">
              <p className=" text-sm font-medium "> Notes: Home made Meals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;

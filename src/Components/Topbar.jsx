import React from 'react'
import { MainLogo } from '../assets'
import { Link } from 'react-router-dom'
import { LuBellDot, LuSearch } from 'react-icons/lu'

function Topbar() {
  return (
    <div className='sticky top-0 w-full py-4 px-5 flex items-center justify-between z-30 bg-main-body/80 dark:bg-main-body-dark/80 backdrop-blur-lg'>
        {/* logo */}
        <div className='flex items-center justify-center'>
            <img src={MainLogo} className="h-6" />
        </div>
        {/* links */}
        <div className='flex items-center justify-center gap-2'>
            <Link to="/" className='px-5 py-2.5 rounded-full bg-main-color text-white text-sm'>Overview</Link>
            <Link to="/Patient_chart" className='px-5 py-2.5 rounded-full bg-white dark:bg-dark-gray-dark dark:text-text-dark text-sm'>Patient chart</Link>
            <Link to="/Calendar" className='px-5 py-2.5 rounded-full bg-white dark:bg-dark-gray-dark dark:text-text-dark text-sm'>Calendar</Link>
            <Link to="/Sport" className='px-5 py-2.5 rounded-full bg-white dark:bg-dark-gray-dark dark:text-text-dark text-sm'>Exercise</Link>
            <Link to="/Diet" className='px-5 py-2.5 rounded-full bg-white dark:bg-dark-gray-dark dark:text-text-dark text-sm'>Culinary Health </Link>
        </div>
        {/* profile & notification */}
        <div className='w-fit h-full flex items-center justify-center gap-2'>
            <button className='h-[38px] w-auto aspect-square flex items-center justify-center rounded-full bg-white dark:bg-dark-gray-dark dark:text-text-dark text-xl'>
                <LuSearch />
            </button>
            <button className='h-[38px] w-auto aspect-square flex items-center justify-center rounded-full bg-white dark:bg-dark-gray-dark dark:text-text-dark text-xl'>
                <LuBellDot />
            </button>
            <button className='h-[38px] w-auto aspect-square flex items-center justify-center rounded-full bg-main-color text-white text-xl font-semibold'>
                K
            </button>
        </div>
    </div>
  )
}

export default Topbar
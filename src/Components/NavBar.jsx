import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import ThemeContext  from '../Context/theme';

const NavBar = () => {
    const theme = useContext(ThemeContext);

    
        console.log(theme);

    

  return (
    <div className={`absolute top-0 left-0 w-full flex gap-80 justify-around items-center p-4 ${theme === "dark" ? "bg-[#0f172a]" : "bg-gray-100"}  z-20 border-b-2 border-white`}>
        <span className='text-indigo-500 text-2xl font-bold'>SkillSprint</span>
      <ul className='flex space-x-4 dark:text-gray-900 text-white'>
        <li className='hover:text-indigo-500 cursor-pointer text-xl'>Home</li>
        <li className='hover:text-indigo-500 cursor-pointer text-xl'>Courses</li>
        <li className='hover:text-indigo-500 cursor-pointer text-xl'>About</li>
        <li className='hover:text-indigo-500 cursor-pointer text-xl'>Contact</li>
      </ul>
    </div>
  )
}

export default NavBar

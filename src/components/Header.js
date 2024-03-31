import React, { useState } from 'react';
import BarsIconSvg from '../utils/SVG/BarsIconSvg';
import UserIconSvg from '../utils/SVG/UserIconSvg';

//this is the header component

const Header = () => {
    const [searchText,setSearchText] = useState("DJI phantom");
    const clearSearch = () => {
        setSearchText("");
    }
  return (
    <div className='bg-white flex justify-between mt-4 mb-2'>

      <div><h3 className='text-lg text-[#CF2D2D] font-bold mx-8'>BookUsNow</h3></div>
      
      <div className='flex'>
      <div className='bg-black text-white px-2 hidden sm:inline sm:flex'>
      <label htmlFor="categoriesButton" className="cursor-pointer my-auto">
      <BarsIconSvg />
    </label>
      <button id="categoriesButton">Categories</button>
      </div>
        
        <div className='border-gray-300 border-2 border-r-0 px-1  hidden sm:inline-block'>
            <input className='focus:border-none hidden sm:inline my-1 w-72 ' value={searchText} onFocus={clearSearch}  onChange={(e)=>{setSearchText(e.target.value)}}/>
        </div>
        <button className='mr-0 sm:mr-64 sm:border-2 border-gray-300 sm:border-l-0'>🔎</button>
        <button className='px-2 m-1'>🩶 <span className='hidden sm:inline'>Favorites</span></button>
        <button className='border-gray-400 sm:border-2 px-2 m-1 rounded-md'><span className='inline sm:hidden'> <UserIconSvg /></span><span className='hidden sm:inline'>Sign In</span></button>
      </div>
      {/* <div className='mx-6 '>
     
       
      </div> */}
    </div>
  )
}

export default Header;

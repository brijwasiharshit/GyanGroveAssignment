import React from 'react';
import Location from './Location';

// This component contains the navigation menus and the location bar.
const Nav = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between my-2 text-[#989090]'>
      <div className='flex-shrink-0 sm:mr-4'>
        <Location />
      </div>
      <div className='mt-2 sm:mt-0 justify-center sm:ml-0'>
        <ul className='flex flex-wrap gap-2 sm:gap-4 sm:flex-nowrap overflow-x-auto'>
          <li className='sm:text-gray ml-1 text-sm'>Live Shows</li>
          <li className='sm:text-gray text-sm'>Streams</li>
          <li className='sm:text-gray text-sm'>Movies</li>
          <li className='sm:text-gray text-sm'>Plays</li>
          <li className='sm:text-gray text-sm'>Events</li>
          <li className='sm:text-gray text-sm'>Sports</li>
          <li className='sm:text-gray text-sm'>Activities</li>
        </ul>
      </div>
      <span></span>
    </div>
  )
}

export default Nav;

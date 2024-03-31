import React from 'react';
import Location from './Location';

//this component contains the navigation menus and the location bar.
const Nav = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between my-2 text-[#989090]'>
      <div className='flex-shrink-0 sm:mr-4'>
        <Location />
      </div>
      <div className='mt-2 sm:mt-0 justify-center ml-1 sm:ml-0'>
        <ul className='flex flex-wrap gap-4 sm:gap-4 sm:flex-nowrap'>
          <li className='sm:text-gray mx-1'>Live Shows</li>
          <li className='sm:text-gray'>Streams</li>
          <li className='sm:text-gray'>Movies</li>
          <li className='sm:text-gray'>Plays</li>
          <li className='sm:text-gray'>Events</li>
          <li className='sm:text-gray'>Sports</li>
          <li className='sm:text-gray'>Activities</li>
        </ul>
      </div>
      <span></span>
    </div>
  )
}

export default Nav;

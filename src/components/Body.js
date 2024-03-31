import React, { useEffect, useState } from 'react';
import Recommended from './Recommended';
import Upcoming from './Upcoming';

const Body = () => {
  return (
    <div
      className="py-24"
      style={{
        backgroundImage: `url(images/Banner.svg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        width: '100%',
        height: '100vh'
      }}
    >
      <p className='text-white text-xl sm:text-5xl w-6/12 mx-auto leading-10 font-bold sm:leading-loose'>
        Discover Exciting Events Happening Near You - Stay Tuned for Updates!
      </p>
      <p className='text-white text-sm sm:text-lg  w-8/12 mx-auto leading-8 text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </p>
      <Recommended />
      <Upcoming />
    </div>
  );
};

export default Body;

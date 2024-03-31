import React from 'react';
import LocationIconSvg from '../utils/SVG/LocationIconSvg';
import ChevronRight from '../utils/SVG/ChevronRight';

const Location = () => {
  return (
    <div className='flex gap-1 mx-6'>
      <LocationIconSvg />
      <p className='text-sm text-[#989090]'>Mumbai, India</p>
      <ChevronRight />
    </div>
  )
}

export default Location;

import React from 'react';
import useGoogleDriveThumbnail from '../utils/Hooks/UseGoogleDriveThumbnail';
import useDateFormat from '../utils/Hooks/useDateFormatter';

//this is the card component for recommended card

const RecCard = ({ data }) => {
    const thumbnailUrl = useGoogleDriveThumbnail(data.imgUrl);

    return (
        <div className='relative border-gray-700'>
            <img className='w-72 h-96 rounded-md' src={thumbnailUrl} style={{ margin: '-4px' }} alt="Event" />
            <label className='absolute bottom-3 left-2 right-0 text-white pb-2 pl-2'>
                <div>
                    <span className=" w-4 font-semibold ml-4 sm:ml-2 text-lg">Make Agree</span>
                    <span className="text-xs ml-6 inline-block ">{useDateFormat(data.date)}</span>
                </div>
                <div className='flex justify-between text-sm'>
                    <span className='ml-2'>{data.cityName}</span>
                    <div className='mr-5'>
                        <span>{data.weather} | </span>
                        <span className='text-sm'>{Math.floor(data.distanceKm / 100)} Km </span>
                    </div>
                    <span></span>
                </div>
            </label>
            <h2 className='absolute bottom-0 left-0 mb-2 ml-2 text-yellow-300'></h2>
        </div>
    );
};

export default RecCard;

import React from 'react';
import LocationIconSvg from '../utils/SVG/LocationIconSvg';
import useDateFormat from '../utils/Hooks/useDateFormatter';
import ShimmerImg from './ImageLoader';
import useGoogleDriveThumbnail from '../utils/Hooks/UseGoogleDriveThumbnail';

//this is the card component for upcoming events card.

const UpcCard = ({ data }) => {
    const thumbnailUrl = useGoogleDriveThumbnail(data.imgUrl);

    return (
        <div className='relative m-6 border border-[#B0BABF] w-96'>
            <div className="overflow-hidden">
                <img className='w-full h-full object-cover rounded-lg' src={thumbnailUrl} alt={<ShimmerImg />} />
                <label className='absolute bottom-14 left-[14px] bg-black  text-white p-2 text-center w-11/12 rounded-lg  rounded-t-none mr-5'>
                    {useDateFormat(data.date)}
                </label>
            </div>
            <h2 className='font-bold text-lg mx-2'>{data.eventName}</h2>
            <div className='flex justify-between text-[#989090] mx-2'>
                <div className='flex'>
                    <LocationIconSvg />
                    <h4>{data.cityName} </h4>
                </div>
                <div>
                    <span>{data.weather} | </span>
                    <span>{Math.floor(data.distanceKm / 100)} Km</span>
                </div>
            </div>
        </div>
    )
}

export default UpcCard;

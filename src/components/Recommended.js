import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RecCard from './RecCard';
import ImageLoader from './ImageLoader';
import useRecommendedEvents from '../utils/Hooks/useRecommendedEvents';

//this component contains the logic to fetch the card components using user-defined-hook and display all cards
const Recommended = () => {
    const { recommendedEvents, loading } = useRecommendedEvents();

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='mt-36 w-10/12 mx-auto'>
            <div className='flex justify-between'>
                <h2 className='text-white font-semibold text-xl my-2 cursor-pointer'>Recommended Shows ➜</h2>
                <h2 className='text-white underline my-2 cursor-pointer sm:mr-8'>See All</h2>
            </div>
            {loading ? (
                <ImageLoader />
            ) : (
                <Carousel responsive={responsive} customButtonGroup={null}>
                    {recommendedEvents.map((ev) => (
                        <RecCard key={ev.id} data={ev} />
                    ))}
                </Carousel>
            )}
        </div>
    );
};

export default Recommended;

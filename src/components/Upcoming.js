import React, { useEffect, useState } from 'react';
import UpcCard from './UpcCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import ImageLoader from './ImageLoader';

//this component contains the logic to fetch upcoming events from api
const Upcoming = () => {
    const [upcomingEventsList, setUpcomingEventsList] = useState(null);
    const [totalEvents, setTotalEvents] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchUpcomingEvents();
    }, []);

    //fetching first list of upcoming events
    const fetchUpcomingEvents = async () => {
        try {
            const response = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json();
            setUpcomingEventsList(json.events);
            setTotalEvents(json.totalEvents);
        } catch (error) {
            console.error('Error fetching upcoming events:', error);
        }
    }

    //fetching more upcoming events
    const fetchMoreData = async () => {
        const nextPage = page + 1;
        const response = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${nextPage}&type=upcoming`);
        const json = await response.json();
        setUpcomingEventsList(prevEvents => prevEvents.concat(json.events));
        setPage(nextPage);
    };

    return (
        upcomingEventsList === null ? <h1 className='text-2xl text-white'>Loading</h1> :
            <div>
                <div className='ml-14 text-lg font-semibold mt-4'>
                    <h2>Upcoming Events ➜</h2>
                </div>
                <InfiniteScroll
                    dataLength={upcomingEventsList.length} // This is an important field to render the next data
                    next={fetchMoreData}
                    hasMore={upcomingEventsList.length !== totalEvents}
                    loader={<ImageLoader />}
                >
                    <div className='flex flex-wrap m-8'>
                        {
                            upcomingEventsList.map((ev, index) => (
                                <UpcCard key={index} data={ev} />
                            ))
                        }
                    </div>
                </InfiniteScroll>
            </div>
    )
}

export default Upcoming;

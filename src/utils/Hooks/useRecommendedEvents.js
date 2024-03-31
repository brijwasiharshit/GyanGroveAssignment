import { useState, useEffect } from 'react';

const useRecommendedEvents = () => {
    const [recommendedEvents, setRecommendedEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRecommendedEvents = async () => {
        try {
            const response = await fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json();
            setRecommendedEvents(json.events);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecommendedEvents();
    }, []);

    return { recommendedEvents, loading, error };
};

export default useRecommendedEvents;

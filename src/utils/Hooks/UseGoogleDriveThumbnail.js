import { useState, useEffect } from 'react';

const useGoogleDriveThumbnail = (imgUrl) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(null);

    useEffect(() => {
        const fetchThumbnail = async () => {
            try {
                const parts = imgUrl.split('/');
                const id = parts[parts.length - 2];
                const thumbnailUrl = `https://drive.google.com/thumbnail?id=${id}`;
                setThumbnailUrl(thumbnailUrl);
            } catch (error) {
                console.error("Error fetching Google Drive thumbnail:", error);
                setThumbnailUrl(null);
            }
        };

        fetchThumbnail();

        // Clean-up function
        return () => setThumbnailUrl(null);
    }, [imgUrl]);

    return thumbnailUrl;
};

export default useGoogleDriveThumbnail;

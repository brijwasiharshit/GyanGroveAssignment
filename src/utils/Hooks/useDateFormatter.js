import { useState, useEffect } from 'react';

const useDateFormat = (initialDate) => {
    const [formattedDate, setFormattedDate] = useState("");

    useEffect(() => {
        const formatDate = (dateString) => {
            const date = new Date(dateString);
            const options = { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            return date.toLocaleDateString('en-US', options);
        };

        if (initialDate) {
            setFormattedDate(formatDate(initialDate));
        }
    }, [initialDate]);

    return formattedDate;
};

export default useDateFormat;

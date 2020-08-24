import { useState, useEffect } from "react";

export const useClock = () => {
    
    const formatDate = () => 
    new Date().toLocaleString(undefined, {
        weekday:"long",
        hour:"2-digit",
        minute: "2-digit",
        second: "2-digit",
        day:"numeric",
        month:"long",
    });


    const [showDate, setShowDate] = useState( formatDate() );

    useEffect(() => {
        const intervalId = setInterval( () => {
        setShowDate(formatDate());
    }, 1000);

    return () => {clearInterval(intervalId);
    };
    }, []);

    return showDate;
};;
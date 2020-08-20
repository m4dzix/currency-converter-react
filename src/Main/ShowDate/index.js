import React, {useState, useEffect} from 'react';
import './style.css';

const formatDate = (showDate) => 
    showDate.toLocaleString(undefined, {
        weekday:"long",
        hour:"2-digit",
        minute: "2-digit",
        second: "2-digit",
        day:"numeric",
        month:"long",
    });


const ShowDate = () => {
    
    const [showDate, setShowDate] = useState( new Date() );

    useEffect(() => {
        const intervalId = setInterval( () => {
        setShowDate(new Date());
    }, 1000);

    return () => {clearInterval(intervalId);
    };
    }, []);

return(

<p className = "form__showDate">
 Aktualna data i godzina:{formatDate(showDate)}
</p>
);
}

export default ShowDate;
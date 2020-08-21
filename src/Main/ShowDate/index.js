import React, {useState, useEffect} from 'react';
import { StyledDate } from "./styled"


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

<StyledDate>
 Aktualna data i godzina:{formatDate(showDate)}
</StyledDate>
);
}

export default ShowDate;
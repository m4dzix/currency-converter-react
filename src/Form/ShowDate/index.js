import React, {useState, useEffect} from 'react';
import './style.css'

const ShowDate = () => {
    
    const [showDate, setShowDate] = useState( new Date().toLocaleString());

    useEffect(() => {
        const intervalId = setInterval( () => {
        setShowDate( showDate => new Date().toLocaleString() )
    }, 1000);

    return () => {clearInterval(intervalId)
    };
    }, []);

return(

<p className = "form__showDate">
 Aktualna data i godzina: {showDate}
</p>
);
}

export default ShowDate;
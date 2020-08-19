import React, {useState, useEffect} from 'react';
import './style.css'

const ShowDate = () => {
    
    const [showDate, setShowDate] = useState( new Date().toLocaleString());

    useEffect(() => {
        setInterval(()=>{
        setShowDate( new Date().toLocaleString(), 1000)
    })
   
});

return(

<p class = "form__showDate">
 Aktualna godzina i data: {showDate}
</p>
);
}

export default ShowDate;
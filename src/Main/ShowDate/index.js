import React from "react";
import {useClock} from "../useClock";
import { StyledDate } from "./styled";


const ShowDate = () => {

    const clock = useClock();

return (

    <StyledDate>
    Aktualna data i godzina:{clock}
    </StyledDate>
    );
    };

export default ShowDate;
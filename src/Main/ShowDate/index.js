import React from "react";
import {useCurrentDate} from "../useCurrentDate";
import { StyledDate } from "./styled";


const ShowDate = () => {

    const clock = useCurrentDate();

return (

    <StyledDate>
        Aktualna data i godzina:{" "}{clock}
    </StyledDate>
    );
    };

export default ShowDate;
import React, {useEffect} from 'react';
import './../../style.css'
import './../../../SharedComponent/style.css'
import {AppString} from "../../../../Assets/String/AppString";
//mui components
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import {Card} from "@mui/material";
//components
import AccordionHeader from "../../../SharedComponent/AccordionHeader";
import Filters from "./Filters";
//redux
import { setIsOpenFilterAccordion} from "../../../../Slices/Notification/notifSlice";
import {useDispatch} from "react-redux";
import {useIsOpenFilterAccordion} from "../../../../CustomHook/UseReduxData";

const FilterAccordion = () => {
    const isOpenFilter = useIsOpenFilterAccordion()
    const dispatch = useDispatch()

    return (
        <Card className='accordion-card'>
            <Accordion expanded={isOpenFilter}>
                <AccordionHeader onClick={() => dispatch(setIsOpenFilterAccordion(!isOpenFilter))}
                                 title={AppString.filter}
                                 text={AppString.filterAccordionText}
                />
                <AccordionDetails>
                    <Filters/>
                </AccordionDetails>
            </Accordion>
        </Card>
    );
};

export default FilterAccordion;

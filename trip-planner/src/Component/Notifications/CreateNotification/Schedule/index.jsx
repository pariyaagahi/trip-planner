import React from 'react';
import {Card} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionHeader from "../../../SharedComponent/AccordionHeader";
import {AppString} from "../../../../Assets/String/AppString";
import AccordionDetails from "@mui/material/AccordionDetails";
import {useDispatch} from "react-redux";
import {setIsOpenScheduleAccordion} from "../../../../Slices/Notification/notifSlice";
import Schedule from "./Schedule";
import {useIsOpenScheduleAccordion} from "../../../../CustomHook/UseReduxData";
import './../../../SharedComponent/style.css'
import './../../style.css'

const ScheduleAccordion = () => {
    const isOpenSchedule = useIsOpenScheduleAccordion()
    const dispatch = useDispatch()

    return (
        <Card className='accordion-card'>
            <Accordion expanded={isOpenSchedule}>
                <AccordionHeader onClick={() => dispatch(setIsOpenScheduleAccordion(!isOpenSchedule))}
                                 title={AppString.schedule}
                                 text={AppString.scheduleAccordionText}/>
                <AccordionDetails>
                    <Schedule/>
                </AccordionDetails>
            </Accordion>
        </Card>
    );
};

export default ScheduleAccordion;

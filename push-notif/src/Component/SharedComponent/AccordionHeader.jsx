import React from 'react';
import './style.css'
//mui components
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

const AccordionHeader = (props) => {

    return (
        <AccordionSummary
            dir={'rtl'}
            onClick={props.onClick}
            className='accordion-summary'
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1bh-content"
            id="panel1a-header"
        >
            <Typography
                className='accordion-summary-title'>
                {props.title}
            </Typography>
            <Typography
                className='accordion-summary-text'>
                {props.text}
            </Typography>
        </AccordionSummary>
    );
};

export default AccordionHeader;

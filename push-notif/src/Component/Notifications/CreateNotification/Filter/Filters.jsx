import React from 'react';
//mui components
import {Grid} from "@mui/material";
import Stack from "@mui/material/Stack";
//components
import TerminalNumber from "./TerminalNumber";
import AppType from "./AppType";
import BusinessCategory from "./BusinessCategory";
import MerchantType from "./MerchantType";
import Province from "./Province";
import Psp from "./Psp";
import ResidencyType from "./ResidencyType";
import TerminalType from "./TerminalType";
import NationalCode from "./NationalCode";

const Filters = () => {
    return (
        <Grid container direction='row-reverse'>
            <Grid item xs={4} className='accordion-grid'>
                <Stack spacing={-2}>
                    <AppType/>
                    <BusinessCategory/>
                    <div style={{marginTop: '-8px'}}>
                        <Psp/>
                    </div>
                </Stack>
            </Grid>
            <Grid item xs={4} className='accordion-grid'>
                <Stack spacing={-1}>
                    <Province/>
                    <MerchantType/>
                    <ResidencyType/>
                </Stack>
            </Grid>
            <Grid item xs={4} className='accordion-grid'>
                <Stack spacing={-1}>
                    <TerminalType/>
                    <TerminalNumber/>
                    <div style={{marginTop: '5px'}}>
                        <NationalCode/>

                    </div>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default Filters;

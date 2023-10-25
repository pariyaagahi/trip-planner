import * as React from 'react'
import {useState} from "react";
//mui
import TextField from '@mui/material/TextField'
import AdapterJalali from '@date-io/date-fns-jalali'
import {DatePicker} from '@mui/x-date-pickers/DatePicker'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {Grid} from "@mui/material";
//style
import './style.css'
//types
import {DatePickerProps} from "../Types/common";

export default function CustomDatePicker(props: DatePickerProps) {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <Grid container direction='row-reverse'>
            <p className='date-picker-label'>{props.label}</p>
            {/*@ts-ignore*/}
            <LocalizationProvider dateAdapter={AdapterJalali}>
                <DatePicker
                    open={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    disabled={props.disabled}
                    mask="____/__/__"
                    value={props.value}
                    onChange={props.onChange}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            onClick={(e) => setOpen(true)}
                            sx={{marginTop: '12px'}}
                            // inputProps={{
                            //     placeholder: 'روز/ماه/سال',
                            // }}
                            InputProps={{
                                ...params.InputProps,
                                style: {
                                    fontFamily: 'FarhangFaNum-Medium',
                                    width: '128px',
                                    height: '25px',
                                    fontSize: '14px',
                                },
                            }}
                        />
                    )}
                />
            </LocalizationProvider>
        </Grid>
    )
}

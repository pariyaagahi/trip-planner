import * as React from 'react'
import TextField from '@mui/material/TextField'
import AdapterJalali from '@date-io/date-fns-jalali'
import {DatePicker} from '@mui/x-date-pickers/DatePicker'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {Grid} from "@mui/material";
import {useState} from "react";
import './style.css'

export default function CustomDatePicker(props) {
    const [open, setOpen] = useState(false)
    return (
        <Grid container direction='row-reverse'>
            <p className='text'>{props.label}</p>
            <LocalizationProvider dateAdapter={AdapterJalali}>
                <DatePicker
                    open={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    disabled={props.disabled}
                    mask="____/__/__"
                    value={props.value}
                    onChange={props.onChange}
                    inputProps={{
                        placeholder: '',
                    }}
                    renderInput={(params) => (
                        <TextField
                            onClick={(e) => setOpen(true)}
                            sx={{marginRight: '10px', marginTop: '12px'}}
                            {...params}
                            InputProps={{
                                ...params.InputProps,
                                style: {
                                    fontFamily: 'FarhangFaNum-Medium',
                                    width: '130px',
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

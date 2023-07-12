import * as React from 'react'
import TextField from '@mui/material/TextField'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {TimePicker} from '@mui/x-date-pickers/TimePicker'
import faIR from 'date-fns/locale/fa-IR'
import {Grid} from "@mui/material";
import {useState} from "react";

export default function CustomTimePicker(props) {
    const [open, setOpen] = useState(false)
    return (
        <Grid container direction='row-reverse'>
            <p className='text'>
                {props.label}
            </p>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={faIR}>
                <TimePicker
                    open={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
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
                                placeholder: '',
                                style: {
                                    fontFamily: 'FarhangFaNum-Medium',
                                    width: '130px',
                                    height: '25px',
                                },
                            }}
                        />
                    )}
                />
            </LocalizationProvider>
        </Grid>
    )
}

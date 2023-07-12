import React from 'react';
import './style.css'
//mui components
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import {Grid} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    option: {
        fontSize: "13px"
    }
});

const ComboBox = (props) => {
    const classes = useStyles();
    return (
        <Grid container direction='row-reverse'>
            <p className='text'>
                {props.label}
            </p>
            <Autocomplete
                classes={{option: classes.option}}
                // clearOnBlur={false}
                sx={{marginRight: props.marginRight, marginTop: '14px'}}
                noOptionsText="موجود نیست"
                dir="rtl"
                value={props.value || null}
                onChange={props.onChange}
                getOptionLabel={(option) => option?.value || ''}
                id="controllable-states-demo"
                options={props.options || []}
                clearIcon={false}
                isOptionEqualToValue={(option, value) => {
                    return option !== value
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        size="small"
                        InputProps={{
                            ...params.InputProps,
                            style: {
                                fontFamily: 'FarhangFaNum-Medium',
                                height: '25px',
                                width: props.width,
                                paddingRight: '30px',
                                paddingTop: '2px',
                                fontSize: '14px',
                            },
                        }}
                    />
                )}
                ListboxProps={{
                    style: {
                        direction: 'rtl',
                        fontFamily: 'FarhangFaNum-Medium',
                        fontSize: '14px',
                    },
                }}
            />
        </Grid>
    );
};

export default ComboBox;

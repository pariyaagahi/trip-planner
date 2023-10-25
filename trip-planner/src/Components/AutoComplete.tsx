import React from 'react';
//mui
import {TextField, Autocomplete} from "@mui/material";
//rtl
import {CacheProvider} from "@emotion/react";
//types
import {AutoCompleteProps} from "../Types/common";
//string
import {AppString} from "../Assets/String/AppString";
//style
import './style.css'
//helper
import {cacheRtl} from "../Helpers/common";

const CustomAutoComplete = (props: AutoCompleteProps) => {
    return (
            <CacheProvider value={cacheRtl}>
                <Autocomplete
                    sx={props.sx}
                    id="size-small-standard"
                    size="small"
                    dir="rtl"
                    options={props.options || []}
                    noOptionsText={AppString.notAvailable}
                    value={props.value}
                    onChange={props.onChange}
                    getOptionLabel={(option) => option?.value  || ''}
                    defaultValue={props.defaultValue}
                    isOptionEqualToValue={(option, value) => {
                        return option !== value
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label={props.label}
                            placeholder={props.placeHolder}
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
            </CacheProvider>
    );
};
export default CustomAutoComplete;

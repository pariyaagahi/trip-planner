import React, {useState} from 'react';
//components
import {default as AutoComplete} from "../../../Components/AutoComplete";
//types
import {OptionType} from "../../../Types/common";
//string
import {AppString} from "../../../Assets/String/AppString";

const top100Films = [
    {value: 'انتخاب اول', key: 1994},
    {value: 'انتخاب دوم', key: 1972},
    {value: 'انتخاب سوم', key: 1974}
];

const EventType = () => {
    const [value, setValue] = useState<OptionType | null>(null)

    return (
        <AutoComplete options={top100Films} label={AppString.eventType} placeHolder={AppString.choose} value={value}
                      onChange={(event, newValue) => {
                          setValue(newValue)
                      }} sx={{width: '350px'}}/>
    );
};

export default EventType;

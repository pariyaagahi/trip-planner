import React from 'react';
import {useDispatch} from "react-redux";
import {setSearchSenderValue} from "../../../../../Slices/Notification/notifSlice";
import ComboBox from "../../../../SharedComponent/ComboBox";
import {AppString} from "../../../../../Assets/String/AppString";
import {useSender} from "../../../../../CustomHook/UseReduxData";

const SearchSender = () => {
    const [Sender, setSender] = React.useState('')
    const Senders = useSender()
    const dispatch = useDispatch()

    return (
        <>
            <ComboBox
                width="180px"
                options={Senders}
                value={Sender || ''}
                onChange={(event, newValue) => {
                    setSender(newValue || '')
                    dispatch(setSearchSenderValue(newValue?.key))
                }}
                label={'*' + AppString.sender}
                marginRight='10px'
            />
        </>
    );
};

export default SearchSender;

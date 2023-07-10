import React from 'react';
import ComboBox from "../../../../SharedComponent/ComboBox";
import {AppString} from "../../../../../Assets/String/AppString";
//redux
import {useDispatch} from "react-redux";
import {setSearchServiceTypeValue,
} from "../../../../../Slices/Notification/notifSlice";
import {useServiceType} from "../../../../../CustomHook/UseReduxData";

const SearchServiceType = () => {
    const [ServiceType, setServiceType] = React.useState('')
    const serviceTypes = useServiceType()
    const dispatch = useDispatch()

    return (
        <>
            <ComboBox
                width="130px"
                options={serviceTypes}
                value={ServiceType || ''}
                onChange={(event, newValue) => {
                    setServiceType(newValue || '')
                    dispatch(setSearchServiceTypeValue(newValue?.key))
                }}
                label={'*' + AppString.serviceType}
                marginRight='10px'
            />
        </>
    );
};

export default SearchServiceType;

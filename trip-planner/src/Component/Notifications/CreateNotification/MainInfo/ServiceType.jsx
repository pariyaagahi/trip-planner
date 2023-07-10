import React, {useEffect} from 'react';
import ComboBox from "../../../SharedComponent/ComboBox";
import {AppString} from "../../../../Assets/String/AppString";
//redux
import {
    isHideNotifTitle, setAppTypeErrMsg,
    setIsHideNotifTitle,
    setServiceTypeErrMsg, setServiceTypeValue,
} from "../../../../Slices/Notification/notifSlice";
import {useDispatch} from "react-redux";
import {
    useServiceTypeErrMsg,
    useServiceType,
    useSelectedServiceType,
    useIsEditIconClicked,
    useClearNotifDetailInput, useIsHideNotifTitle
} from "../../../../CustomHook/UseReduxData";

const ServiceType = () => {
    const [ServiceType, setServiceType] = React.useState('')
    const errMsg = useServiceTypeErrMsg()
    const serviceTypes = useServiceType()
    const serviceTypeKey = useSelectedServiceType()
    const isEditClicked = useIsEditIconClicked()
    const clearInput = useClearNotifDetailInput()
    const dispatch = useDispatch()


    React.useEffect(() => {
        if (serviceTypes !== [] && serviceTypeKey !== '' && serviceTypeKey !== null) {
            switch (serviceTypeKey?.toString()) {
                case serviceTypes[0]?.key:
                    dispatch(setIsHideNotifTitle(true))
                    dispatch(setAppTypeErrMsg(""))
                    break;
                case serviceTypes[1]?.key:
                    dispatch(setIsHideNotifTitle(false))
                    dispatch(setAppTypeErrMsg(""))
                    break;
                case serviceTypes[2]?.key:
                    dispatch(setIsHideNotifTitle(false))
                    dispatch(setAppTypeErrMsg(""))
                    break;
                case serviceTypes[3]?.key:
                    dispatch(setIsHideNotifTitle(false))
                    dispatch(setIsHideNotifTitle(false))
                    break;
                default :
                    dispatch(setAppTypeErrMsg(""))
                    dispatch(setIsHideNotifTitle(false))
            }
        }
    }, [ServiceType]);

    useEffect(() => {
        if (serviceTypeKey !== null && serviceTypeKey !== '' && serviceTypes && serviceTypes !== []) {
            setServiceType({
                key: serviceTypeKey,
                value: serviceTypes?.filter((item) => item?.key == serviceTypeKey)[0]?.value
            })
        }
    }, [isEditClicked])

    useEffect(() => {
        if (clearInput) {
            setServiceType('')
            dispatch(setServiceTypeValue(null))
        }
    }, [clearInput])


    return (
        <>
            <ComboBox
                width="130px"
                options={serviceTypes}
                value={ServiceType || ''}
                onChange={(event, newValue) => {
                    setServiceType(newValue || '')
                    dispatch(setServiceTypeValue(newValue?.key))
                    dispatch(setServiceTypeErrMsg(""))
                }}
                label={'*' + AppString.serviceType}
                marginRight='10px'
            />
            <p className='service-type-err-msg'>
                {errMsg}
            </p>
        </>
    );
};

export default ServiceType;

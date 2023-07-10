import React, {useEffect} from 'react';
import ComboBox from "../../../SharedComponent/ComboBox";
import {AppString} from "../../../../Assets/String/AppString";
//redux
import {useDispatch} from "react-redux";
import {
    setAppTypeErrMsg, setAppTypeValue,
} from "../../../../Slices/Notification/notifSlice";
import {
    useAppTypeErrMsg,
    useIsEditIconClicked,
    useSelectedAppType,
    useClearNotifDetailInput,
    useAppType
} from "../../../../CustomHook/UseReduxData";

const AppType = () => {
    const [AppType, setAppType] = React.useState('')
    const clearInput = useClearNotifDetailInput()
    const isEditClicked = useIsEditIconClicked()
    const appTypeKey = useSelectedAppType()
    const errMsg = useAppTypeErrMsg()
    const appTypes = useAppType()
    const dispatch = useDispatch()

    useEffect(() => {
        if (appTypeKey !== null && appTypeKey !== '' && appTypes && appTypes !== []) {
            setAppType({
                    key: appTypeKey,
                    value: appTypes?.filter((item) => item?.key == appTypeKey)[0]?.value
                }
            )
        }
    }, [isEditClicked])

    useEffect(() => {
        if (clearInput) {
            setAppType('')
            dispatch(setAppTypeValue(null))
        }
    }, [clearInput])

    return (
        <div>
            <ComboBox
                width="180px"
                options={appTypes}
                value={AppType || ''}
                onChange={(event, newValue) => {
                    setAppType(newValue || '')
                    dispatch(setAppTypeValue(newValue?.key))
                    dispatch(setAppTypeErrMsg(''))
                }}
                label={AppString.appType}
                marginRight='26px'
            />
            <p className='app-type-err-msg'>
                {errMsg}
            </p>
        </div>
    );
};

export default AppType;

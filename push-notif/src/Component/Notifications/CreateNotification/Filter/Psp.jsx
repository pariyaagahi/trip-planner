import React, {useEffect} from 'react';
import ComboBox from "../../../SharedComponent/ComboBox";
import {AppString} from "../../../../Assets/String/AppString";
//redux
import {useDispatch, useSelector} from "react-redux";
import {clearNotifDetailInput, setPspValue} from "../../../../Slices/Notification/notifSlice";
import {useIsEditIconClicked, usePsp, useSelectedPsp} from "../../../../CustomHook/UseReduxData";

const Psp = () => {
    const clearInput = useSelector(clearNotifDetailInput)
    const [Psp, setPsp] = React.useState('')
    const isEditClicked = useIsEditIconClicked()
    const pspKey = useSelectedPsp()
    const psps = usePsp()
    const dispatch = useDispatch()

    useEffect(() => {
        if (pspKey !== null && pspKey !== '' && psps && psps !== []) {
            setPsp({
                key: pspKey,
                value: psps?.filter((item) => item?.key == pspKey)[0]?.value
            })
        }
    }, [isEditClicked])

    useEffect(() => {
        if (clearInput === true) {
            setPsp('')
            dispatch(setPspValue(null))
        }
    }, [clearInput])

    return (
        <ComboBox
            width="180px"
            options={psps}
            value={Psp || ''}
            onChange={(event, newValue) => {
                setPsp(newValue || '')
                dispatch(setPspValue(newValue?.key))
            }}
            label={AppString.psp}
            marginRight='13px'
        />
    );
};

export default Psp;

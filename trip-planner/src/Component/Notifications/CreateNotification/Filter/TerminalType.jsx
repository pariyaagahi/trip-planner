import React, {useEffect} from 'react';
import ComboBox from "../../../SharedComponent/ComboBox";
import {AppString} from "../../../../Assets/String/AppString";
import {useDispatch} from "react-redux";
import {
    useClearNotifDetailInput,
    useIsEditIconClicked,
    useSelectedTerminalType, useTerminalType
} from "../../../../CustomHook/UseReduxData";
import {setTerminalTypeValue} from "../../../../Slices/Notification/notifSlice";

const TerminalType = () => {
    const [TerminalType, setTerminalType] = React.useState('')
    const terminalTypeKey = useSelectedTerminalType()
    const clearInput = useClearNotifDetailInput()
    const isEditClicked = useIsEditIconClicked()
    const terminalTypes = useTerminalType()
    const dispatch = useDispatch()

    useEffect(() => {
        if (terminalTypeKey !== null && terminalTypeKey !== '' && terminalTypes && terminalTypes !== []) {
            setTerminalType({
                key: terminalTypeKey,
                value: terminalTypes?.filter((item) => item?.key == terminalTypeKey)[0]?.value
            })
        }
    }, [isEditClicked])

    useEffect(() => {
        if (clearInput) {
            setTerminalType('')
            dispatch(setTerminalTypeValue(null))
        }
    }, [clearInput])

    return (
        <ComboBox
            width="180px"
            options={terminalTypes}
            value={TerminalType || ''}
            onChange={(event, newValue) => {
                setTerminalType(newValue || '')
                dispatch(setTerminalTypeValue(newValue?.key))
            }}
            label={AppString.terminalType}
            marginRight='20px'
        />
    );
};

export default TerminalType;

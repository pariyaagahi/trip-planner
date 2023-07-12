import React, {useEffect} from 'react';
import ComboBox from "../../../SharedComponent/ComboBox";
import {AppString} from "../../../../Assets/String/AppString";
//redux
import {useDispatch} from "react-redux";
import {
    useClearNotifDetailInput,
    useIsEditIconClicked,
    useResidencyType,
    useSelectedResidencyType
} from "../../../../CustomHook/UseReduxData";
import {setResidencyTypeValue} from "../../../../Slices/Notification/notifSlice";

const ResidencyType = () => {
    const [ResidencyType, setResidencyType] = React.useState('')
    const clearInput = useClearNotifDetailInput()
    const isEditClicked = useIsEditIconClicked()
    const residencyTypes = useResidencyType()
    const residencyTypeKey = useSelectedResidencyType()
    const dispatch = useDispatch()

    useEffect(() => {
        if (residencyTypeKey !== null && residencyTypeKey !== '' && residencyTypes && residencyTypes !== []) {
            setResidencyType({
                key: residencyTypeKey,
                value: residencyTypes?.filter((item) => item?.key == residencyTypeKey)[0]?.value
            })
        }
    }, [isEditClicked])

    useEffect(() => {
        if (clearInput) {
            setResidencyType('')
            dispatch(setResidencyTypeValue(null))
        }
    }, [clearInput])

    return (
        <ComboBox
            width="180px"
            options={residencyTypes}
            value={ResidencyType || ''}
            onChange={(event, newValue) => {
                setResidencyType(newValue || '')
                dispatch(setResidencyTypeValue(newValue?.key))
            }}
            label={AppString.residencyType}
            marginRight='61px'
        />
    );
};

export default ResidencyType;

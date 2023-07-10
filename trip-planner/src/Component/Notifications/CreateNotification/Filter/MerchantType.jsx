import React, {useEffect} from 'react';
import ComboBox from "../../../SharedComponent/ComboBox";
import {AppString} from "../../../../Assets/String/AppString";
//redux
import {useDispatch} from "react-redux";
import {
    useClearNotifDetailInput,
    useIsEditIconClicked, useMerchantType,
    useSelectedMerchantType
} from "../../../../CustomHook/UseReduxData";
import {setMerchantTypeValue} from "../../../../Slices/Notification/notifSlice";

const MerchantType = () => {
    const [MerchantType, setMerchantType] = React.useState('')
    const merchantTypeKey = useSelectedMerchantType()
    const clearInput = useClearNotifDetailInput()
    const isEditClicked = useIsEditIconClicked()
    const merchantTypes = useMerchantType()
    const dispatch = useDispatch()

    useEffect(() => {
        if (merchantTypeKey !== null && merchantTypeKey !== '' && merchantTypes && merchantTypes !== []) {
            setMerchantType({
                key: merchantTypeKey,
                value: merchantTypes?.filter((item) => item?.key == merchantTypeKey)[0]?.value
            })
        }
    }, [isEditClicked])

    useEffect(() => {
        if (clearInput) {
            setMerchantType('')
            dispatch(setMerchantTypeValue(null))
        }
    }, [clearInput])

    return (
        <ComboBox
            width="180px"
            options={merchantTypes}
            value={MerchantType || ''}
            onChange={(event, newValue) => {
                setMerchantType(newValue || '')
                dispatch(setMerchantTypeValue(newValue?.key))
            }}
            label={AppString.merchantType}
            marginRight='32px'
        />
    );
};

export default MerchantType;

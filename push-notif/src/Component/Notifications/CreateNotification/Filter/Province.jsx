import React, {useEffect} from 'react';
import ComboBox from "../../../SharedComponent/ComboBox";
import {AppString} from "../../../../Assets/String/AppString";
//redux
import {useDispatch} from "react-redux";
import {
    useClearNotifDetailInput,
    useIsEditIconClicked,
    useProvince,
    useSelectedProvince
} from "../../../../CustomHook/UseReduxData";
import {setProvinceValue} from "../../../../Slices/Notification/notifSlice";


const Province = () => {
    const [Province, setProvince] = React.useState('')
    const clearInput = useClearNotifDetailInput()
    const isEditClicked = useIsEditIconClicked()
    const provinceKey = useSelectedProvince()
    const provinces = useProvince()
    const dispatch = useDispatch()

    useEffect(() => {
        if (provinceKey !== null && provinceKey !== '' && provinces && provinces !== []) {
            setProvince({
                key: provinceKey,
                value: provinces?.filter((item) => item?.key == provinceKey)[0]?.value
            })
        }
    }, [isEditClicked])

    useEffect(() => {
        if (clearInput) {
            setProvince('')
            dispatch(setProvinceValue(null))
        }
    }, [clearInput])

    return (
        <ComboBox
            width="180px"
            options={provinces}
            value={Province || ''}
            onChange={(event, newValue) => {
                setProvince(newValue || '')
                dispatch(setProvinceValue(newValue?.key))
            }}
            label={AppString.province}
            marginRight='60px'
        />
    );
};

export default Province;

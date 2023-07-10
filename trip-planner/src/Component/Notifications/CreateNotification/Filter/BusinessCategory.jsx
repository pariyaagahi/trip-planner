import React, {useEffect} from 'react';
import ComboBox from "../../../SharedComponent/ComboBox";
import {AppString} from "../../../../Assets/String/AppString";
//redux
import {useDispatch} from "react-redux";
import {
    useBusinessCategory,
    useClearNotifDetailInput, useIsEditIconClicked,
    useSelectedBusinessCategory
} from "../../../../CustomHook/UseReduxData";
import {setBusinessCategoryValue} from "../../../../Slices/Notification/notifSlice";

const BusinessCategory = () => {
    const [BusinessCategorie, setBusinessCategory] = React.useState('')
    const businessCategorieKey = useSelectedBusinessCategory()
    const businessCategories = useBusinessCategory()
    const clearInput = useClearNotifDetailInput()
    const isEditClicked = useIsEditIconClicked()
    const dispatch = useDispatch()

    useEffect(() => {
        if (businessCategorieKey !== null && businessCategorieKey !== '' && businessCategories && businessCategories !== []) {
            setBusinessCategory({
                key: businessCategorieKey,
                value: businessCategories?.filter((item) => item?.key == businessCategorieKey)[0]?.value
            })
        }
    }, [isEditClicked])

    useEffect(() => {
        if (clearInput) {
            setBusinessCategory('')
            dispatch(setBusinessCategoryValue(null))

        }
    }, [clearInput])

    return (
        <ComboBox
            width="180px"
            options={businessCategories}
            value={BusinessCategorie || ''}
            onChange={(event, newValue) => {
                setBusinessCategory(newValue || '')
                dispatch(setBusinessCategoryValue(newValue?.key))
            }}
            label={AppString.businessCategory}
            marginRight='63px'
        />
    );
};

export default BusinessCategory;

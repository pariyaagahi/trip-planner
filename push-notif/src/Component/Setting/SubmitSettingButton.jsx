import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import {AppString} from "../../Assets/String/AppString";
import {useDispatch} from "react-redux";
import {
    useHasUpdateSettingPermission, useIpAddressValidLoadMaster, useIpAddressValidSaveMaster,
    useIsActiveAlarm,
    useIsActiveEmail, useIsActiveLoadMaster,
    useIsActiveNotification, useIsActiveSaveMaster,
    useIsActiveSms,
    useIsSubmitSettingClicked
} from "../../CustomHook/UseReduxData";
import {
    getSettingBaseConfig,
    setIsOpenSubmitSettingDialogBox,
    setIsSubmitSettingClicked,
    updateSetting
} from "../../Slices/Setting/settingSlice";
import {logOut} from "../../Slices/Authentication/authSlice";
import {setIsOpenSnackbar, setSnackbarMessage} from "../../Slices/Notification/notifSlice";
import {useNavigate} from "react-router-dom";

const SubmitSettingButton = () => {
    const regexExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
    const dispatch = useDispatch()
    const [hasLoadMasterIpError, setHasLoadMasterIpError] = useState(false)
    const [hasSaveMasterIpError, setHasSaveMasterIpError] = useState(false)
    const iSubmitSettingClicked = useIsSubmitSettingClicked()
    const hasUpdateSettingPermission = useHasUpdateSettingPermission()
    const [isSettingConfigLoaded, setIsSettingConfigLoaded] = useState(false)
    const ipAddressValidLoadMaster = useIpAddressValidLoadMaster()
    const ipAddressValidSaveMaster = useIpAddressValidSaveMaster()
    const activeSms = useIsActiveSms()
    const activeNotification = useIsActiveNotification()
    const activeEmail = useIsActiveEmail()
    const activeAlarm = useIsActiveAlarm()
    const activeLoadMaster = useIsActiveLoadMaster()
    const activeSaveMaster = useIsActiveSaveMaster()
    const ipLoadMaster = useIpAddressValidLoadMaster()
    const ipSaveMaster = useIpAddressValidSaveMaster()
    const navigate = useNavigate()

    function handleSubmitSetting() {
        dispatch(setIsSubmitSettingClicked(!iSubmitSettingClicked))
    }

    useEffect(() => {
        dispatch(getSettingBaseConfig())
            .unwrap()
            .then(() => {
                setIsSettingConfigLoaded(true)
            })
            .catch((error) => {
                setIsSettingConfigLoaded(false)
            })
    }, [])

    useEffect(() => {
        if (!regexExp.test(ipSaveMaster.toString())) {
            setHasSaveMasterIpError(true)
        } else {
            setHasSaveMasterIpError(false)
        }
    }, [ipSaveMaster])

    useEffect(() => {
        if (!regexExp.test(ipLoadMaster.toString())) {
            setHasLoadMasterIpError(true)
        } else {
            setHasLoadMasterIpError(false)
        }
    }, [ipLoadMaster])

    useEffect(() => {
        if (isSettingConfigLoaded) {
            if (!hasLoadMasterIpError && !hasSaveMasterIpError) {
                dispatch(updateSetting({
                    activeSms,
                    activeNotification,
                    activeEmail,
                    activeAlarm,
                    activeLoadMaster,
                    activeSaveMaster,
                    ipAddressValidLoadMaster,
                    ipAddressValidSaveMaster
                }))
                    .unwrap()
                    .then(() => {
                        dispatch(setIsOpenSubmitSettingDialogBox(true))
                    })
                    .catch((error) => {
                        dispatch(setIsOpenSubmitSettingDialogBox(false))
                        dispatch(setIsOpenSnackbar(true))
                        dispatch(setSnackbarMessage(error?.response?.data.message))
                    })
            } else if (hasLoadMasterIpError) {
                dispatch(setIsOpenSnackbar(true))
                dispatch(setSnackbarMessage(AppString.invalidLoadMasterIpError))
            } else if (hasSaveMasterIpError) {
                dispatch(setIsOpenSnackbar(true))
                dispatch(setSnackbarMessage(AppString.invalidSaveMasterIpError))
            }
        }
    }, [iSubmitSettingClicked])

    return (
        <Button
            disabled={!hasUpdateSettingPermission}
            onClick={handleSubmitSetting}
            variant="contained"
            className='setting-submit-button'
        >
            {AppString.submitSettingButtonText}
        </Button>
    );
};

export default SubmitSettingButton;
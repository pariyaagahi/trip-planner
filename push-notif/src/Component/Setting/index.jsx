import React, {useEffect} from 'react';
import ActivateServicesSetting from "./ActiveService";
import SubmitSettingButton from "./SubmitSettingButton";
import Snackbar from "../SharedComponent/Snackbar";
import {
    useIsOpenSubmitSettingDialogBox,
    useSnackbarMessage
} from "../../CustomHook/UseReduxData";
import DialogBox from "../SharedComponent/DialogBox";
import {AppString} from "../../Assets/String/AppString";
import {useDispatch} from "react-redux";
import {setIsOpenSnackbar} from "../../Slices/Notification/notifSlice";
import {setIsOpenSubmitSettingDialogBox} from "../../Slices/Setting/settingSlice";
import ActiveJobSetting from './ActiveJob/index'
import IpConfigSetting from "./IpConfig";

const Setting = () => {
    const message = useSnackbarMessage()
    const dispatch = useDispatch()
    const isOpenDialogBox = useIsOpenSubmitSettingDialogBox()

    function handleSubmit() {
        dispatch(setIsOpenSubmitSettingDialogBox(false))
    }

    useEffect(()=>{
        dispatch(setIsOpenSnackbar(false))
    },[])

    return (
        <div>
            <ActivateServicesSetting/>
            <ActiveJobSetting/>
            <IpConfigSetting/>
            <SubmitSettingButton/>
            <Snackbar message={message}/>
            <DialogBox
                showAcceptButton
                showCheckIcon
                open={isOpenDialogBox}
                text={AppString.successUpdateSettingDialogText}
                acceptButtonText={AppString.accept}
                handleOnclickAcceptButton={() => handleSubmit()}
            />
        </div>
    );
};

export default Setting;

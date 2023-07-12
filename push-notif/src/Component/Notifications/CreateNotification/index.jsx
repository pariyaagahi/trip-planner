import React from 'react';
//components
import FilterAccordion from "./Filter";
import MainInfo from "./MainInfo";
import ScheduleAccordion from "./Schedule";
import DialogBox from "../../SharedComponent/DialogBox";
//redux
import {useDispatch} from "react-redux";
import {
    setIsOpenCreateNotifDialogBox,
    setClearNotifDetailInput,
    setIsOpenEditNotifDialogBox,
    setSelectedRequestMasterId, clearErrorMsg, setIsEditIconClicked, setIsOpenCreateNotification,
} from "../../../Slices/Notification/notifSlice";
import {AppString} from "../../../Assets/String/AppString";
import {
    useEditNotifErrorMsg, useIsEditIconClicked,
    useIsOpenCreateNotifDialogBox,
    useIsOpenEditNotifDialogBox,
    useSaveNotifErrorMsg, useSelectedRequestMasterId
} from "../../../CustomHook/UseReduxData";

const CreateNotification = () => {
    const dispatch = useDispatch()
    const saveErrMsg = useSaveNotifErrorMsg()
    const editErrMsg = useEditNotifErrorMsg()
    const isEditClicked = useIsEditIconClicked()

    const requestMasterId = useSelectedRequestMasterId()

    const isOpenCreateNotifDialog = useIsOpenCreateNotifDialogBox()
    const isOpenEditNotifDialog = useIsOpenEditNotifDialogBox()

    function handleSubmit() {
        dispatch(setIsOpenCreateNotifDialogBox(false))
        dispatch(setClearNotifDetailInput(false))
        window.location.reload(true);
    }

    function handleEdit() {
        dispatch(setIsOpenEditNotifDialogBox(false))
        dispatch(setSelectedRequestMasterId(null))
        dispatch(setClearNotifDetailInput(false))
        window.location.reload(true);
    }

    return (
        <div className='create-notification-div'>
            <div className='create-notif-every-section'>
                <MainInfo/>
            </div>
            <div className='create-notif-every-section' id='scrollTo'>
                <FilterAccordion/>
            </div>
            <div>
                <ScheduleAccordion/>
            </div>
            <div className='create-notif-error-msg'>
                <p>
                    {
                        requestMasterId && isEditClicked !== null ?
                            editErrMsg
                            :
                            saveErrMsg
                    }
                </p>
            </div>
            {/*<div>*/}
            {/*    {*/}
            {/*        requestMasterId && isEditClicked !== null ?*/}
            {/*            <EditButton/>*/}
            {/*            :*/}
            {/*            <SubmitButton/>*/}
            {/*    }*/}
            {/*</div>*/}
            <div>
                <DialogBox
                    showAcceptButton
                    showCheckIcon
                    open={isOpenCreateNotifDialog}
                    text={AppString.successCreateNotifDialogText}
                    acceptButtonText={AppString.accept}
                    handleOnclickAcceptButton={() => handleSubmit()}
                />
            </div>
            <div>
                <DialogBox
                    showAcceptButton
                    showCheckIcon
                    open={isOpenEditNotifDialog}
                    text={AppString.successEditNotifDialogText}
                    acceptButtonText={AppString.accept}
                    handleOnclickAcceptButton={() => handleEdit()}
                />
            </div>
        </div>
    );
};

export default CreateNotification;

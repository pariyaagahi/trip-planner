import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
    clearErrorMsg,
    setClearNotifDetailInput, setIsEditIconClicked,
    setIsOpenCreateNotification, setIsOpenFilterAccordion, setIsOpenScheduleAccordion,
    setSelectedRequestMasterId
} from "../../Slices/Notification/notifSlice";
import {
    useIsEditIconClicked,
    useIsOpenCreateNotification,
    useSelectedRequestMasterId
} from "../../CustomHook/UseReduxData";
import {useDispatch} from "react-redux";
import './style.css'
import EditButton from "./CreateNotification/EditButton";
import SubmitButton from "./CreateNotification/SubmitButton";

const useStyles = makeStyles((theme) => ({
    openCloseCreateNotif: {
        display: 'flex',
        justifyContent: 'end',
    },
    submitNotif: {
        display: 'flex',
        justifyContent: 'start'
    },
    container: {
        width: '100%',
        margin: '5px',
        display: "flex",
        "&>div": {
            flexGrow: "1"
        }
    }
}));

const StickyHeader = () => {
    const [stickyHeader, setStickyHeader] = useState(undefined);
    const [hideSubmitNotifIcon, setHideSubmitNotifIcon] = useState(false)
    const isOpenCreateNotif = useIsOpenCreateNotification()
    const requestMasterId = useSelectedRequestMasterId()
    const isEditClicked = useIsEditIconClicked()
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        const chatEl = document.querySelector('.stickyHeader').getBoundingClientRect();
        setStickyHeader(chatEl.top);
        setHideSubmitNotifIcon(true)
    }, []);

    useEffect(() => {
        if (!stickyHeader) return;
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, [stickyHeader]);

    const isSticky = (e) => {
        const chatEl = document.querySelector('.stickyHeader');
        const scrollTop = window.scrollY;
        if (scrollTop >= stickyHeader - 10) {
            chatEl.classList.add('is-sticky');
        } else {
            chatEl.classList.remove('is-sticky');
        }
    };

    function onClickCreateNotif() {
        dispatch(setSelectedRequestMasterId(null))
        dispatch(setClearNotifDetailInput(true))
        dispatch(clearErrorMsg())
        dispatch(setIsEditIconClicked(null))
        dispatch(setIsOpenCreateNotification(false))
        dispatch(setIsOpenFilterAccordion(false))
        dispatch(setIsOpenScheduleAccordion(false))
        dispatch(setIsOpenCreateNotification(!isOpenCreateNotif))
    }

    function onClickCancelEditing() {
        dispatch(setSelectedRequestMasterId(null))
        dispatch(setClearNotifDetailInput(true))
        dispatch(clearErrorMsg())
        dispatch(setIsEditIconClicked(null))
        dispatch(setIsOpenCreateNotification(false))
    }

    useEffect(() => {
        if (isOpenCreateNotif) {
            setHideSubmitNotifIcon(false)
        } else {
            setHideSubmitNotifIcon(true)
        }
    }, [isOpenCreateNotif])

    return (
        <div style={{
            display: 'flex',
            width: '100%'
        }}>
            <div className={classes.container}>
                {!hideSubmitNotifIcon &&
                    <div className={classes.submitNotif}>
                        {
                            requestMasterId && isEditClicked !== null ?
                                <EditButton/>
                                :
                                <SubmitButton/>
                        }
                    </div>
                }
                <div className={classes.openCloseCreateNotif}>
                    {!requestMasterId && isEditClicked === null ?
                        !isOpenCreateNotif ? (
                            <AddCircleOutlineIcon className="create-notification-icon" onClick={onClickCreateNotif}/>
                        ) : (
                            <RemoveCircleOutlineIcon className="create-notification-icon" onClick={onClickCreateNotif}/>
                        ) : requestMasterId && isEditClicked === null ?
                            !isOpenCreateNotif ? (
                                <AddCircleOutlineIcon className="create-notification-icon"
                                                      onClick={onClickCreateNotif}/>
                            ) : (
                                <RemoveCircleOutlineIcon className="create-notification-icon"
                                                         onClick={onClickCreateNotif}/>
                            ) : <HighlightOffIcon className="create-notification-icon" onClick={onClickCancelEditing}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default StickyHeader;

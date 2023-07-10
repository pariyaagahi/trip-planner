import React, {useEffect, useState} from 'react';
import Snackbar from "../SharedComponent/Snackbar";
import './style.css'
//mui components
import {Stack} from '@mui/material'
import NotificationList from "./NotificationList";
//redux data
import {useDispatch} from "react-redux";
import {
    clearErrorMsg, setClearNotifDetailInput, setIsEditIconClicked, setIsOpenCreateNotification,
    setIsOpenSnackbar, setSelectedRequestMasterId
} from "../../Slices/Notification/notifSlice";
import {loadTable} from "../../Slices/MainLayout/MainSlice";
import CreateNotification from "./CreateNotification";
import {
    useHasSaveRequestPermission,
    useIsBaseDataLoaded,
    useIsOpenCreateNotification,
    useIsSearchButtonClicked,
    usePageNumber,
    useSearchEndDate,
    useSearchStartDate,
    useSelectedSearchSender,
    useSelectedSearchServiceType,
    useSnackbarMessage
} from "../../CustomHook/UseReduxData";
import StickyHeader from "./StickyHeader";
import {logOut} from "../../Slices/Authentication/authSlice";
import {useNavigate} from "react-router-dom";
import {permissions} from "../../App/permissions";

const Notifications = () => {
        const dispatch = useDispatch();
        const isOpenCreateNotif = useIsOpenCreateNotification()
        const serviceType = useSelectedSearchServiceType()
        const startDateSend = parseInt(useSearchStartDate()?.toString())
        const endDateSend = parseInt(useSearchEndDate()?.toString())
        const userId = parseInt(useSelectedSearchSender()?.toString())
        const page = usePageNumber()
        const message = useSnackbarMessage()
        const isSearchButtonClicked = useIsSearchButtonClicked()
        const isBaseDataLoaded = useIsBaseDataLoaded()
        const [isDataLoaded, setIsDataLoaded] = useState(false)
        const hasSavePermission = useHasSaveRequestPermission()
        const navigate = useNavigate()
        const size = 10


        React.useEffect(() => {
            dispatch(setIsOpenSnackbar(false))
            if (isBaseDataLoaded) {
                dispatch(loadTable({page, size}))
                    .unwrap()
                    .then(() => {
                        setIsDataLoaded(true)
                    }).catch((error) => {
                    setIsDataLoaded(false)
                })
            }
        }, [isBaseDataLoaded]);

        React.useEffect(() => {
            if (isDataLoaded) {
                dispatch(loadTable({page, size, userId, serviceType, startDateSend, endDateSend}))
                    .unwrap()
                    .then(() => {
                    }).catch((error) => {
                })
            }
        }, [isSearchButtonClicked])

        React.useEffect(() => {
            if (isDataLoaded) {
                dispatch(loadTable({page, size, userId, serviceType, startDateSend, endDateSend}))
                    .unwrap()
                    .then(() => {
                    }).catch((error) => {
                })
            }
        }, [page])

        React.useEffect(() => {
            dispatch(setSelectedRequestMasterId(null))
            dispatch(setClearNotifDetailInput(true))
            dispatch(clearErrorMsg())
            dispatch(setIsEditIconClicked(null))
            dispatch(setIsOpenCreateNotification(false))
        }, [])

        return (
            <Stack className='notifications-layout'>
                {hasSavePermission &&
                    <div className="stickyHeader">
                        <StickyHeader/>
                    </div>}
                {isOpenCreateNotif ? <CreateNotification/> : null}
                <NotificationList/>
                <Snackbar message={message}/>
            </Stack>
        );
    }
;

export default Notifications;

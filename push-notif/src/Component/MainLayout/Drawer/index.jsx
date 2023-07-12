import React, {useEffect} from 'react';
import {AppString} from "../../../Assets/String/AppString";
//redux data
import {useDispatch} from "react-redux";
import {logOut} from "../../../Slices/Authentication/authSlice";
//mui components
import {Drawer} from "@mui/material";
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import LogoutIcon from "@mui/icons-material/Logout";
//components
import AccountItem from "./DrawerItem/AccountItem";
import DrawerItem from "./DrawerItem/DrawerItem";
//icons
import DashboardIcon from '@mui/icons-material/Dashboard'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import SettingsIcon from '@mui/icons-material/Settings'
import {
    useHasLoadDashboardPermission,
    useHasLoadSettingPermission,
    useHasLoadTablePermission
} from "../../../CustomHook/UseReduxData";
import Form from "../../SharedComponent/Form";

const AppDrawer = (props) => {
    const drawerWidth = 260
    const hasLoadDashboardPermission = useHasLoadDashboardPermission()
    const hasLoadNotifPagePermission = useHasLoadTablePermission()
    const hasLoadSettingPermission = useHasLoadSettingPermission()

    useEffect(() => {
        // Respond to the `storage` event : to reload page when token is invalid
        function storageEventHandler(event) {
            if (event.key === "token") {
                if (event.newValue === null) {
                    window.location.replace('http://172.24.66.76:8086/')
                }
            }
        }

        //listen to local storage
        window.addEventListener("storage", storageEventHandler);
        return () => {
            window.removeEventListener("storage", storageEventHandler);
        };
    }, []);


    return (
        <Drawer
            className="drawer"
            sx={{
                width: drawerWidth,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    borderColor: '#989898'
                },
            }}
            variant="persistent"
            anchor="right"
            open={props.open}
        >
            <List>
                <AccountItem/>
                <Divider className='drawer-list-item-divider'/>
                {hasLoadDashboardPermission &&
                    <>
                        <DrawerItem to="/dashboard" icon={<DashboardIcon/>} title={AppString.dashboard}/>
                        <Divider className='drawer-list-item-divider'/>
                    </>
                }
                {hasLoadNotifPagePermission &&
                    <>
                        <DrawerItem to="/notification" icon={<NotificationsActiveIcon/>}
                                    title={AppString.notifications}/>
                        <Divider className='drawer-list-item-divider'/>
                    </>
                }

                {hasLoadSettingPermission &&
                    <>
                        <DrawerItem to="/setting" icon={<SettingsIcon/>} title={AppString.setting}/>
                        <Divider className='drawer-list-item-divider'/>
                    </>
                }

                <Form>
                    <DrawerItem to='http://172.24.66.76:8086/' icon={<LogoutIcon/>} title={AppString.logout}/>
                </Form>

                <Divider className='drawer-list-item-divider'/>
            </List>
        </Drawer>
    );
};

export default AppDrawer;

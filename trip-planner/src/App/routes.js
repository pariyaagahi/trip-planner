import React from 'react';
import RequireAuth from "./RequireAuth";

//react-router-dom
import {Routes, Route} from 'react-router-dom'

//components
import Login from "./../Component/Login/index";
import NotFound from "./../Component/NotFound/index";
import Dashboard from "../Component/Dashboard";
import Notifications from "../Component/Notifications";
import MainLayout from "../Component/MainLayout";
import Setting from "../Component/Setting";
import Empty from "../Component/MainLayout/Empty";
import {
    useHasLoadDashboardPermission,
    useHasLoadSettingPermission,
    useHasLoadTablePermission
} from "../CustomHook/UseReduxData";

const AppRoutes = () => {
    const hasLoadDashboardPermission = useHasLoadDashboardPermission()
    const hasLoadNotifPagePermission = useHasLoadTablePermission()
    const hasLoadSettingPagePermission = useHasLoadSettingPermission()
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Login/>}/>
            <Route element={<RequireAuth/>}>
                <Route element={<MainLayout/>}>
                    <Route path="/dashboard" element={hasLoadDashboardPermission ? <Dashboard/> : <Empty/>}/>
                    <Route path="/notification" element={hasLoadNotifPagePermission ? <Notifications/> : <Empty/>}/>
                    <Route path="/setting" element={hasLoadSettingPagePermission ? <Setting/> : <Empty/>}/>
                </Route>
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRoutes;

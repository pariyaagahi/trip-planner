import React, {useEffect, useRef} from 'react';
//react-router-dom
import {Outlet, useNavigate} from "react-router-dom";
//components
import AppDrawer from "./Drawer";
import Navbar from "./Navbar";
import {Main, DrawerHeader} from "./Content"
//redux data
import {logOut, refreshToken} from "../../Slices/Authentication/authSlice";
import {useDispatch} from "react-redux";
import {getUserInfo, loadData} from "../../Slices/MainLayout/MainSlice";

const MainLayout = () => {
        const [isDrawerOpen, setIsDrawerOpen] = React.useState(true)
        const dispatch = useDispatch();
        const type = 1
        const navigate = useNavigate()
        const intervalRef = useRef();

        function handleToggleDrawer() {
            setIsDrawerOpen(!isDrawerOpen)
        }

        function getUserInformation() {
            dispatch(getUserInfo()).unwrap().then(() => {
            }).catch((error => {
            }))
        }

        function loadBaseData() {
            dispatch(loadData())
                .unwrap()
                .then(() => {
                }).catch((error) => {
            })
        }

        function handleRefreshToken() {
            const interval = setInterval(() =>
                    dispatch(refreshToken()).unwrap().then(() => {
                    }).catch((e) => {
                        dispatch(logOut()).unwrap().then(() => {
                            // window.localStorage.clear();
                            // window.location.replace('http://172.24.66.76:8086/');
                        }).catch((error) => {
                        })
                    }), 10000
                )
            ;
            intervalRef.current = interval
            return () => clearInterval(interval)
        }

        React.useLayoutEffect(() => {
                handleRefreshToken();
                getUserInformation();
                loadBaseData();
            }, []
        );

        return (
            <div>
                <Navbar open={isDrawerOpen} onClickMenuIcon={() => handleToggleDrawer()}/>
                <Main open={isDrawerOpen} id="componentToScrollTo">
                    <DrawerHeader/>
                    <Outlet/>
                </Main>
                <AppDrawer open={isDrawerOpen}/>
            </div>
        );
    }
;

export default MainLayout;

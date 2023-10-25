import React, {useEffect} from 'react';
//react router dom
import {Outlet} from "react-router-dom";
//components
import Navbar from "./Navbar";
import {Main, DrawerHeader} from "./Content";
import AppDrawer from "./Drawer";
import {useAppSelector} from "../../CustomHook/reduxHook";
import Snackbar from "../../Components/Snackbar";
//hooks
import {useAppDispatch} from "../../CustomHook/reduxHook";
import {getBaseData} from "../../Store/Common/commonAction";

const MainLayout = () => {
    //useState
    const [isOpenDrawer, setIsOpenDrawer] = React.useState<boolean>(false)

    //useSelector
    const {snackBarMessage} = useAppSelector(state => state.common)

    //useDispatch
    const dispatch = useAppDispatch()

    //useEffect
    useEffect(() => {
        dispatch(getBaseData()).unwrap().then((res: any) => {
            console.log(res)
        }).catch(() => {
            console.log('error')
        })

    }, [])

    //function
    function handleToggleDrawer() {
        setIsOpenDrawer(!isOpenDrawer)
    }

    return (
        <div>
            <Navbar open={isOpenDrawer} onClick={() => handleToggleDrawer()}/>
            <Main open={isOpenDrawer}>
                <DrawerHeader/>
                <Outlet/>
            </Main>
            <AppDrawer open={isOpenDrawer}/>
            <Snackbar message={snackBarMessage}/>
        </div>
    );
};

export default MainLayout;

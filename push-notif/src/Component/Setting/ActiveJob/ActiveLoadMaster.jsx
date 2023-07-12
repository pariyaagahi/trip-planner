import React from 'react';
import {useHasUpdateSettingPermission, useIsActiveLoadMaster} from "../../../CustomHook/UseReduxData";
import {useDispatch} from "react-redux";
import {Grid} from "@mui/material";
import {AppString} from "../../../Assets/String/AppString";
import Switch from "../../SharedComponent/Switch";
import {setIsActiveLoadMaster} from "../../../Slices/MainLayout/MainSlice";

const ActiveLoadMaster = () => {
    const hasUpdateSettingPermission = useHasUpdateSettingPermission()
    const isActiveLoadMaster = useIsActiveLoadMaster()
    const dispatch = useDispatch()
    return (
        <Grid container direction="row-reverse">
            <p className='setting-item-for-activate-load-master'>
                {AppString.activeLoadMaster}
            </p>
            <Switch
                disabled={!hasUpdateSettingPermission}
                sx={{marginRight: '50px', marginTop: '15px'}}
                checked={isActiveLoadMaster}
                onChange={() => {
                    dispatch(setIsActiveLoadMaster((!isActiveLoadMaster)))
                }}
            />
        </Grid>
    );
};

export default ActiveLoadMaster;

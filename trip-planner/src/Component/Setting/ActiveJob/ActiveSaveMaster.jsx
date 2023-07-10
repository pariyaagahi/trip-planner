import React from 'react';
import {useHasUpdateSettingPermission, useIsActiveSaveMaster} from "../../../CustomHook/UseReduxData";
import {useDispatch} from "react-redux";
import {Grid} from "@mui/material";
import {AppString} from "../../../Assets/String/AppString";
import Switch from "../../SharedComponent/Switch";
import {setIsActiveSaveMaster} from "../../../Slices/MainLayout/MainSlice";

const ActiveSaveMaster = () => {
    const hasUpdateSettingPermission = useHasUpdateSettingPermission()
    const isActiveSaveMaster = useIsActiveSaveMaster()
    const dispatch = useDispatch()
    return (
        <Grid container direction="row-reverse">
            <p className='setting-item-for-activate-save-master'>
                {AppString.activeSaveMaster}
            </p>
            <Switch
                disabled={!hasUpdateSettingPermission}
                sx={{marginRight: '130px', marginTop: '15px'}}
                checked={isActiveSaveMaster}
                onChange={() => {
                    dispatch(setIsActiveSaveMaster((!isActiveSaveMaster)))
                }}
            />
        </Grid>
    );
};

export default ActiveSaveMaster;

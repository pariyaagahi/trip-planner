import React, {useRef} from 'react';
import {Grid} from "@mui/material";
import {AppString} from "../../../Assets/String/AppString";
import {useHasUpdateSettingPermission, useIpAddressValidLoadMaster} from "../../../CustomHook/UseReduxData";
import {useDispatch} from "react-redux";
import {setIpAddressValidLoadMaster} from "../../../Slices/MainLayout/MainSlice";

const IpValidLoadMaster = () => {
    const hasUpdateSettingPermission = useHasUpdateSettingPermission()
    const ref = useRef(null)
    const dispatch = useDispatch()
    const ip = useIpAddressValidLoadMaster()
    return (
        <div>
            <Grid container style={{marginTop: '-10px'}}>
                <textarea readOnly={!hasUpdateSettingPermission}
                          className='setting-ip-text-area' rows='1' wrap='off'
                          defaultValue={ip}
                          ref={ref}
                          onBlur={() => {
                              dispatch(setIpAddressValidLoadMaster(ref.current.value))
                          }}
                          onKeyDown={(e) => {
                              if (e.keyCode === 13) {
                                  e.preventDefault()
                              }
                          }}
                />
                <p className='text' style={{marginLeft: '22px'}}>
                    {AppString.settingLoadMasterIp}
                </p>
            </Grid>
        </div>
    );
};

export default IpValidLoadMaster;

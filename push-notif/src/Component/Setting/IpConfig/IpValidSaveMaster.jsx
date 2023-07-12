import React, {useRef} from 'react';
import {Grid} from "@mui/material";
import {AppString} from "../../../Assets/String/AppString";
import {useDispatch} from "react-redux";
import {useHasUpdateSettingPermission, useIpAddressValidSaveMaster} from "../../../CustomHook/UseReduxData";
import {setIpAddressValidSaveMaster} from "../../../Slices/MainLayout/MainSlice";

const IpValidSaveMaster = () => {
    const hasUpdateSettingPermission = useHasUpdateSettingPermission()
    const ref = useRef(null)
    const dispatch = useDispatch()
    const ip = useIpAddressValidSaveMaster()
    return (
        <div>
            <Grid container style={{marginTop: '-10px'}}>
                <textarea
                    onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                            e.preventDefault()
                        }

                    }}
                    readOnly={!hasUpdateSettingPermission}
                          className='setting-ip-text-area' rows='1' wrap='off'
                          defaultValue={ip}
                          ref={ref}
                          onBlur={() => {
                              dispatch(setIpAddressValidSaveMaster(ref.current.value))
                          }}

                />
                <p className='text' style={{marginLeft: '75px'}}>
                    {AppString.settingSaveMasterIp}
                </p>
            </Grid>
        </div>
    );
};

export default IpValidSaveMaster;

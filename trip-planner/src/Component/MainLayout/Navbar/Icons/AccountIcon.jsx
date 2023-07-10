import React from 'react';
import '../style.css'
import {AppString} from "../../../../Assets/String/AppString";
//mui components
import PopupState, {bindMenu, bindTrigger} from "material-ui-popup-state";
import {IconButton, Menu, MenuItem} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
//redux data
import {useSelector} from "react-redux";
import {userInformation} from "../../../../Slices/MainLayout/MainSlice";

const AccountIcon = () => {
    const {firstName, lastName} = useSelector(userInformation)

    function handleLogout() {
        window.location.replace('http://172.24.66.76:8086/');
    }

    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <IconButton variant="contained" {...bindTrigger(popupState)}>
                        <AccountCircleIcon className="account-icon"/>
                    </IconButton>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem disabled={true} className="navbar-account-menu-items">
                            {firstName}{' '}{lastName}
                        </MenuItem>
                        <MenuItem className="navbar-account-menu-items" onClick={handleLogout}>
                            {AppString.logout}
                            <LogoutIcon
                                style={{marginLeft: '5px', fontSize: '14px'}}
                            />
                        </MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
};

export default AccountIcon;

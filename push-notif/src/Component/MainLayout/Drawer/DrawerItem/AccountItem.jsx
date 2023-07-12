import React, {useEffect} from 'react';
import './../style.css'
//mui components
import ListItem from "@mui/material/ListItem";
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ListItemText from '@mui/material/ListItemText'
//redux data
import {userInformation} from "../../../../Slices/MainLayout/MainSlice";
import {useSelector} from "react-redux";

const AccountItem = () => {
    const {firstName, lastName} = useSelector(userInformation)

    return (
        <ListItem className="drawer-account-item">
            <AccountCircleIcon className="drawer-account-icon"/>
            <ListItemText className="drawer-account-item-text">
                <p className="drawer-account-item-username">
                    {firstName}{' '}{lastName}
                </p>
            </ListItemText>
        </ListItem>
    );
};

export default AccountItem;

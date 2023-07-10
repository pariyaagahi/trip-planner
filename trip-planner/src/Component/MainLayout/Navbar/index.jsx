import React from 'react';
import {AppBar} from "../Content";
//icons
import AccountIcon from "./Icons/AccountIcon";

//mui components
import Toolbar from '@mui/material/Toolbar'
import MenuAppIcon from "./Icons/MenuAppIcon";

const Navbar = (props) => {

    return (
        <AppBar className="appbar" open={props.open}>
            <Toolbar className="toolbar">
              <AccountIcon/>
                <div className="navbar-middle-div"/>
                <MenuAppIcon onClick={props.onClickMenuIcon}/>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

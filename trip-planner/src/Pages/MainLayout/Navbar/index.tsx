import React from 'react';
//components
import {AppBar} from "../Content";
import MenuAppIcon from "./Icons/MenuAppIcon";
//mui components
import Toolbar from '@mui/material/Toolbar'
//types
import {NavbarProps} from "../../../Types/mainLayout";
//style
import './../style.css'

const Navbar = (props: NavbarProps) => {
    return (
        <AppBar className="appbar" open={props.open}>
            <Toolbar className="toolbar">
                <div>
                    .
                </div>
                <div className="navbar-middle-div"/>
                <MenuAppIcon onClick={props.onClick}/>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

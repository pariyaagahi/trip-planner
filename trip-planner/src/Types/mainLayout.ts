import React from "react";
import {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar/AppBar";

export interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

export interface NavbarProps extends AppBarProps {
    onClick: React.MouseEventHandler
}

export interface DrawerProps {
    to: string
    onClick?: React.MouseEventHandler
    title: string
    icon: React.ReactNode
}
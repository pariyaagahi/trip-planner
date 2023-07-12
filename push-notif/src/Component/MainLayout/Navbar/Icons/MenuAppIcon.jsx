import React from 'react';
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

const MenuAppIcon = (props) => {
    return (
        <IconButton
            aria-label="open drawer"
            edge="start"
            className="menu-icon-button"
            onClick={props.onClick}
        >
            <MenuIcon className="menu-icon"/>
        </IconButton>
    );
};

export default MenuAppIcon;

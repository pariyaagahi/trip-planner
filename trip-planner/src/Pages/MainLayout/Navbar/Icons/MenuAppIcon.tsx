import React from 'react';
//mui components
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
//styles
import './../../style.css'

const MenuAppIcon = ({onClick}: { onClick?: React.MouseEventHandler }) => {
    return (
        <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={onClick}
        >
            <MenuIcon className="menu-icon-button"
            />
        </IconButton>
    );
};

export default MenuAppIcon;

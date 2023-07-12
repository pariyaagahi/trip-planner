import React from 'react';
import {Link, useLocation} from 'react-router-dom'
import './../style.css'
//mui components
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'


const DrawerItem = (props) => {
    const location = useLocation()
    const path = location.pathname
    return (
        <ListItem
            disablePadding
            component={Link}
            to={props.to}
            button
            selected={props.to === path}
            onClick={props.onClick}
        >
            <ListItemButton className='drawer-item'>
                <ListItemIcon className="drawer-item-icon">
                    {props.icon}
                </ListItemIcon>
                <ListItemText
                    disableTypography={true}
                    primary={props.title}
                    className="drawer-item-text"
                />
            </ListItemButton>
        </ListItem>
    );
};

export default DrawerItem;

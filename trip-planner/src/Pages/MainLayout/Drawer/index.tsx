import React from 'react';
//components
import DrawerItem from "./DrawerItem";
import {drawerWidth} from "../Content";
//mui
import DashboardIcon from '@mui/icons-material/Dashboard';
import {Divider} from "@mui/material";
import {Drawer} from "@mui/material";
import List from '@mui/material/List'
//string
import {AppString} from "../../../Assets/String/AppString";
//style
import './../style.css'

const AppDrawer = ({open}: { open: boolean }) => {
    return (
        <Drawer
            className="drawer"
            sx={{
                width: drawerWidth,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    backgroundColor: '#74909a',
                },
            }}
            variant="persistent"
            anchor="right"
            open={open}
        >
            <List>
                <>
                    <DrawerItem to="/" icon={<DashboardIcon/>} title={AppString.home}/>
                    <Divider className='drawer-list-item-divider'/>
                </>
                <>
                    <DrawerItem to="/add-event" icon={<DashboardIcon/>} title={AppString.addEvent}/>
                    <Divider className='drawer-list-item-divider'/>
                </>
                <>
                    <DrawerItem to="/auth" icon={<DashboardIcon/>} title={AppString.account}/>
                    <Divider className='drawer-list-item-divider'/>
                </>
            </List>
        </Drawer>

    );
};

export default AppDrawer;

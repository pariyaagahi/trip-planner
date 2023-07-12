import React, {useState} from 'react';
import './../style.css'
import {AppString} from "../../../Assets/String/AppString";
//components
import Search from "./Search/SearchItem";
import NotificationTable from "./NotificationTable";
//mui components
import FilterListIcon from '@mui/icons-material/FilterList';
import {Button} from "@mui/material";
// import RefreshIcon from "@mui/icons-material/Refresh";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    fixedWidthContainerFilterDiv: {
        display: 'flex',
        justifyContent: 'end',
    },
    fixedWidthContainerRefreshDiv: {
        display: 'flex',
        justifyContent: 'start'
    },
    container: {
        width: '100%',
        margin: '10px',
        display: "flex",
        "&>div": {
            flexGrow: "1"
        }
    }
}));

const NotificationList = () => {
    const [showSearchBar, setShowSearchBar] = useState(false)
    const classes = useStyles();

    // function handleRefresh() {
    //     window.location.reload(true);
    // }

    return (
        <div className='notification-list'>
            <div className='filter-btn-for-search-bar-div'>
                <div className={classes.container}>
                    {/*<div className={classes.fixedWidthContainerRefreshDiv}>*/}
                    {/*    <RefreshIcon className='notif-list-refresh-icon' onClick={handleRefresh}/>*/}
                    {/*</div>*/}
                    <div className={classes.fixedWidthContainerFilterDiv}>
                        <Button className='filter-btn-for-search-bar'
                                onClick={() => {
                                    setShowSearchBar(!showSearchBar)
                                }}>
                            {AppString.filter}
                            <FilterListIcon className='filter-btn-icon-for-search-bar' container
                                            style={{justifyContent: 'flex-start'}}/>
                        </Button>
                    </div>
                </div>
            </div>
            {showSearchBar ?
                <div className='search-bar-div'>
                    <Search/>
                </div> :
                <div className='search-bar-div-hidden'/>
            }
            <NotificationTable/>
        </div>
    );
};

export default NotificationList;

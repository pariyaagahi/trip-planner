import React from 'react';
import {AppString} from "../../../../../Assets/String/AppString";
//mui component
import Button from "@mui/material/Button";
//redux
import {
    useIsSearchButtonClicked,
} from "../../../../../CustomHook/UseReduxData";
import {useDispatch} from "react-redux";
import {setIsSearchButtonClicked} from "../../../../../Slices/Notification/notifSlice";

const SearchButton = () => {
    const dispatch = useDispatch()
    const isSearchButtonClicked = useIsSearchButtonClicked()

    function onClickSearch() {
        dispatch(setIsSearchButtonClicked(!isSearchButtonClicked))
    }

    return (
        <Button
            onClick={onClickSearch}
            variant="contained"
            className='search-btn'>
            {AppString.search}
        </Button>
    );
};

export default SearchButton;

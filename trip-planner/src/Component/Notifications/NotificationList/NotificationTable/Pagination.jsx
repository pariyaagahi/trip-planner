import React from 'react';
import './../../style.css'
//mui components
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import IconButton from '@mui/material/IconButton'
import {useDispatch} from "react-redux";
import {useHasNextPage, usePageNumber} from "../../../../CustomHook/UseReduxData";
import {setPageNumber} from "../../../../Slices/Notification/notifSlice";

const Pagination = () => {
    const dispatch = useDispatch()
    const pageNumber = usePageNumber()
    const nextPage = useHasNextPage()

    return (
        <div>
            <IconButton disabled={!nextPage} onClick={() => {
                dispatch(() => {
                    dispatch(setPageNumber(pageNumber + 1))
                })
            }}>
                <NavigateNextIcon/>
            </IconButton>
            {pageNumber + 1}
            <IconButton
                disabled={pageNumber === 0 ? true : false}
                onClick={() => {
                    dispatch(setPageNumber(pageNumber - 1))
                }}
            >
                <NavigateBeforeIcon/>
            </IconButton>
        </div>
    );
};

export default Pagination;

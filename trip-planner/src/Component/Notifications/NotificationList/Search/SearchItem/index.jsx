import React from 'react';
import '../../../style.css'
//components
import SearchServiceType from "./searchServiceType";
import SearchSender from "./searchSender";
import SearchStartDate from "./searchStartDate";
import SearchEndDate from "./searchEndDate";
import SearchButton from "./searchButton";
//mui components
import {Grid} from "@mui/material";


const Search = () => {

    return (
        <div className='search-div'>
            <Grid container direction='row-reverse' spacing={1} className='search-item-grid'>
                <div className='search-item-combobox-div'>
                    <SearchServiceType/>
                </div>
                <div className='search-item-combobox-div'>
                    <SearchSender/>
                </div>
                <div className='search-item-combobox-div'>
                    <SearchStartDate/>
                </div>
                <div className='search-item-combobox-div'>
                    <SearchEndDate/>
                </div>
                <SearchButton/>
            </Grid>
        </div>
    );
};

export default Search;

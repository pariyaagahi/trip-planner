import React from 'react';
//components
import TopEvents from "./TopBar";
//style
import './style.css'

const MainPage = () => {
    return (
        <div className='main-page-layout'>
           <div className='main-page-container-div'>
               <TopEvents/>
           </div>
        </div>
    );
};

export default MainPage;

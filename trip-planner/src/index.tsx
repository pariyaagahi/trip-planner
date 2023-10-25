import React from 'react';
//react router dom
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
//style
import './index.css';
//component
import App from './App';
//web vitals
import reportWebVitals from './reportWebVitals';
//fonts
import './Assets/Font/FarhangFaNum-Black.ttf';
import './Assets/Font/FarhangFaNum-Bold.ttf';
import './Assets/Font/FarhangFaNum-DemiBold.ttf';
import './Assets/Font/FarhangFaNum-ExtraBold.ttf';
import './Assets/Font/FarhangFaNum-ExtraLight.ttf';
import './Assets/Font/FarhangFaNum-Light.ttf';
import './Assets/Font/FarhangFaNum-Medium.ttf';
import './Assets/Font/FarhangFaNum-Regular.ttf';
import './Assets/Font/FarhangFaNum-Thin.ttf';
//redux-toolkit
import {Provider} from "react-redux";
import {store} from "./Store";
//mui
import { StyledEngineProvider } from "@mui/material/styles";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <StyledEngineProvider injectFirst>
            <App/>
            </StyledEngineProvider>
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

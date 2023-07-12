import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './App/store';
import { StyledEngineProvider } from "@mui/material/styles";
import './Assets/Font/FarhangFaNum-Black.ttf';
import './Assets/Font/FarhangFaNum-Bold.ttf';
import './Assets/Font/FarhangFaNum-DemiBold.ttf';
import './Assets/Font/FarhangFaNum-ExtraBold.ttf';
import './Assets/Font/FarhangFaNum-ExtraLight.ttf';
import './Assets/Font/FarhangFaNum-Light.ttf';
import './Assets/Font/FarhangFaNum-Medium.ttf';
import './Assets/Font/FarhangFaNum-Regular.ttf';
import './Assets/Font/FarhangFaNum-Thin.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
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

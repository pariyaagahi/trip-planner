import React, {useEffect} from 'react';
//string
import './style.css'
//string
import {AppString} from "../../Assets/String/AppString";
//component
import RegisterForm from "./Register/Components/Form"
import LoginForm from "./Login/Components/Form";
//redux
import {useAppDispatch, useAppSelector} from "../../CustomHook/reduxHook";
import {setIsLoginTabClicked, setIsRegisterTabClicked} from "../../Store/Authentication/authSlice";

const Authentication = () => {
    //useDispatch
    const dispatch = useAppDispatch()

    //useSelector
    const {isLoginTabClicked, isRegisterTabClicked} = useAppSelector(state => state.authentication)

    return (
        <>
            <div className="login-wrap">
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked readOnly
                           onClick={(event => {
                               dispatch(setIsLoginTabClicked(!isLoginTabClicked))
                           })}/><label
                    htmlFor="tab-1"
                    className="tab">{AppString.login}</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2"
                                                                                          className="tab"
                                                                                          onClick={(event => {
                                                                                              dispatch(setIsRegisterTabClicked(!isRegisterTabClicked))
                                                                                          })}
                >{AppString.register}</label>
                    <div className="login-form">
                        <div className='sign-in-htm'>
                            <LoginForm/>
                        </div>
                        <div className='sign-up-htm'>
                            <RegisterForm/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Authentication;

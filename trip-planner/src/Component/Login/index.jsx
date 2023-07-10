//react-router-dom
import {useNavigate, useSearchParams} from "react-router-dom";
//image
import shaparakLogo from '../../Assets/Image/shaparakLogo.svg'

//string bundle
import {AppString} from "../../Assets/String/AppString";

//hooks
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";

//style and theme
import './style.css'
import {CacheProvider} from '@emotion/react'
import {ThemeProvider} from '@mui/material/styles'
import {cacheRtl, rtlTheme} from './style'

//materialUi components
import Box from '@mui/material/Box'
import {CircularProgress, Grid, IconButton, InputAdornment, Stack} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'

//authSlice functions
//authSlice values
import {getCaptcha, getCaptchaValue, login, refreshToken} from "../../Slices/Authentication/authSlice"

//components
import TextInput from "./TextInput";
import {Captcha, RefreshCaptchaIcon} from "./Captcha";
import ErrorMessage from "./ErrorMessage";
import SubmitButton from "./SubmitButton";
import {
    useHasLoadDashboardPermission,
    useHasLoadSettingPermission,
    useHasLoadTablePermission
} from "../../CustomHook/UseReduxData";
import {getUserInfo} from "../../Slices/MainLayout/MainSlice";

const Login = () => {

    const [searchParams] = useSearchParams();


    //useDispatches
    const dispatch = useDispatch();

    //useSelectors
    const {captchaId} = useSelector(getCaptchaValue)
    // const token = useSelector(getToken)

    //useNavigates
    const navigate = useNavigate()

    //useStates
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [captchaInput, setCaptchaInput] = useState('')
    const [errorMessage, setErrorMessage] = useState("")
    const [showProgressBar, setShowProgressBar] = useState(false)
    const [isPermissionReady, setIsPermissionReady] = useState(false)
    const hasLoadDashboardPermission = useHasLoadDashboardPermission()
    const hasLoadNotifPagePermission = useHasLoadTablePermission()
    const hasLoadSettingPagePermission = useHasLoadSettingPermission()

    function removeInputs() {
        setUsername('')
        setPassword('')
        setCaptchaInput('')
    }

    function getUserInformation() {
        dispatch(getUserInfo()).unwrap().then(() => {
            setErrorMessage("")
            setShowProgressBar(false)
            setIsPermissionReady(true)
        }).catch((error) => {
            if (error?.response?.status === 401) {
                setErrorMessage(AppString.noPermissionToLogin)
            }
            setShowProgressBar(false)
            setIsPermissionReady(false)
        })
    }

    function doSubmit() {
        setShowProgressBar(true)
        dispatch(login({username, password, captchaId, captchaInput}))
            .unwrap()
            .then(() => {
                getUserInformation()
            })
            .catch((error) => {
                setShowProgressBar(false)
                setErrorMessage(error?.response?.data?.message)
                handleGetCaptcha()
            })
        removeInputs()
    }

    useEffect(() => {
        if (isPermissionReady) {
            checkPermissions()
        }
    }, [isPermissionReady])

    function checkPermissions() {
        if (hasLoadDashboardPermission) {
            navigate('/dashboard')
        } else if (hasLoadNotifPagePermission) {
            navigate('/notification')
        } else if (hasLoadSettingPagePermission) {
            navigate('/setting')
        } else {
            navigate('*')
        }
    }

    function onEnterKeyPress(event) {
        if (event.key === 'Enter') {
            doSubmit()
        }
    }

    function handleGetCaptcha() {
        dispatch(getCaptcha())
    }

    function getTokenFromSearchParams(callback) {
        debugger
        window.localStorage.setItem('token', searchParams?.get('AppToken'))
        window.localStorage.setItem('refresh-token', searchParams?.get('AppRefreshToken'))
        debugger
        callback()
    }

    function handleAutoLogin() {
        console.log('handle auto login : ' + window.localStorage.getItem('token'))
        debugger
        if (window.localStorage.getItem('token') !== 'null'
            && window.localStorage.getItem('token') !== null
            && window.localStorage.getItem('refresh-token') !== 'null'
            && window.localStorage.getItem('refresh-token') !== null
        ) {
            debugger
            dispatch(refreshToken()).unwrap().then((response) => {
                debugger
                console.log('auto login refresh token : ' + JSON.stringify(response))
                debugger
                getUserInformation();
            }).catch(() => {
                //toDo
            })
        }
        debugger
    }

    // useEffect(() => {
    //     if (searchParams.size != 0) {
    //         getTokenFromSearchParams(handleAutoLogin);
    //     }
    // }, [searchParams , localStorage])

    //useEffects
    useEffect(() => {
        dispatch(getCaptcha()).unwrap().then(() => {
            if (searchParams.size != 0) {
                getTokenFromSearchParams(handleAutoLogin);
            }
        }).catch(() => {
            //ToDo
        });
    }, []);

    const setPasswordVisibility = {
        startAdornment: (
            <InputAdornment position="start" className="pass-input-adornment">
                <IconButton
                    tabIndex={-1}
                    aria-label="toggle password visibility"
                    onClick={() => {
                        setShowPassword((show) => !show)
                    }}
                    edge="start"
                >
                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                </IconButton>
            </InputAdornment>
        )
    }

    return (
        <>
            <div className='login-page'>
                <div className='login'>
                    <Grid container direction='row-reverse'>
                        <div className='login-content'>
                            <div className='shaparak-logo-div'>
                                <img src={shaparakLogo} alt={AppString.loginTitle} className='shaparak-logo'/>
                            </div>
                            <p className='login-text'>
                                {AppString.loginText}
                            </p>
                            <hr className='login-hr'/>
                            <p className='login-welcome'>
                                {AppString.welcome}
                            </p>
                        </div>
                        <div className='login-form'>
                            <CacheProvider value={cacheRtl}>
                                <ThemeProvider theme={rtlTheme}>
                                    <div>
                                        <Stack alignItems="center">
                                            <p className='login-title'>
                                                {AppString.loginTitle}
                                            </p>
                                            <Box m={2}>
                                                <TextInput
                                                    value={username}
                                                    onChange={(event) => {
                                                        setUsername(event.target.value)
                                                        setErrorMessage('')
                                                    }}
                                                    onKeyPress={(event) => onEnterKeyPress(event)}
                                                    label={AppString.username}
                                                    type="text"
                                                />
                                            </Box>
                                            <Box m={2}>
                                                <TextInput
                                                    value={password}
                                                    onChange={(event) => {
                                                        setPassword(event.target.value)
                                                        setErrorMessage('')
                                                    }}
                                                    onKeyPress={(event) => onEnterKeyPress(event)}
                                                    InputProps={setPasswordVisibility}
                                                    label={AppString.password}
                                                    type={showPassword ? 'text' : 'password'}
                                                />
                                            </Box>
                                            <div>
                                                <Grid container spacing={1}>
                                                    <Grid item>
                                                        <Captcha/>
                                                    </Grid>
                                                    <Grid item>
                                                        <RefreshCaptchaIcon onClick={handleGetCaptcha}/>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            <TextInput
                                                value={captchaInput}
                                                onChange={(event) => {
                                                    setCaptchaInput(event.target.value)
                                                    setErrorMessage('')
                                                }}
                                                onKeyPress={(event) => onEnterKeyPress(event)}
                                                style={{marginTop: '20px'}}
                                                type="text"
                                                placeholder={AppString.captchaPlaceHolder}
                                            />

                                            <ErrorMessage
                                                errMsg={errorMessage}
                                            />
                                            {!showProgressBar ? (
                                                <SubmitButton onClick={doSubmit}/>
                                            ) : (
                                                <CircularProgress style={{marginTop: '50px'}}/>
                                            )}
                                        </Stack>
                                    </div>
                                </ThemeProvider>
                            </CacheProvider>
                        </div>
                    </Grid>
                </div>

            </div>
        </>
    );
};

export default Login;

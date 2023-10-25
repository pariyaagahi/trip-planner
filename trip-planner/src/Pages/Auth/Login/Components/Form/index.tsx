import * as React from "react";

//style
import "./../../../style.css"
import {cacheRtl, InputLabelProps, InputProps, InputSx, rtlTheme} from "../../../style";

//hooks
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../../../CustomHook/reduxHook";
import {useEffect, useState} from "react";

//yup
import {yupResolver} from "@hookform/resolvers/yup";

//types
import {LoginInputType} from "../../../../../Types/authentication";

//helpers
import {loginSchema} from "../../../../../Helpers/loginValidation";

//string
import {AppString} from "../../../../../Assets/String/AppString";

//redux
import {login} from "../../../../../Store/Authentication/authAction";
import {setIsOpenSnackBar, setSnackbarMessage} from "../../../../../Store/Common/commonSlice";

//mui
import {CircularProgress, TextField} from "@mui/material";
import {CacheProvider} from "@emotion/react";
import {ThemeProvider} from "@mui/material";
import {IconButton, InputAdornment} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'

//components
import Snackbar from "../../../../../Components/Snackbar";
import {useNavigate} from "react-router-dom";

export default function Form() {

    //useSelector
    const {isRegisterTabClicked} = useAppSelector(state => state.authentication)

    //useState
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showProgressBar, setShowProgressBar] = useState(false)

    //useDispatch
    const dispatch = useAppDispatch()

    //useNavigate
    const navigate = useNavigate()

    //useForm
    const {resetField, register, handleSubmit, formState: {errors}} = useForm<LoginInputType>({
        resolver: yupResolver(loginSchema)
    });

    //useEffect
    useEffect(() => {
        resetField('username')
        resetField("password")
    }, [isRegisterTabClicked])

    //functions
    const onSubmit = handleSubmit((values: LoginInputType, event) => {
        event?.preventDefault();
        setShowProgressBar(true)
        callLoginApi(values, event)
    });

    function callLoginApi(values: LoginInputType, event: React.BaseSyntheticEvent | undefined) {
        event?.preventDefault();
        dispatch(login(values)).unwrap().then((res: any) => {
            event?.target?.reset();
            setShowProgressBar(false)
        }).catch((error) => {
            dispatch(setSnackbarMessage("کاربر یافت نشد"))
            setShowProgressBar(false)
        }).then(() => {
            dispatch(setIsOpenSnackBar(true))
            dispatch(setSnackbarMessage("ورود شما با موفقیت انجام شد"))
            setTimeout(() => {
                navigate('/')
            }, 2000)
        })
    }

    //inner component
    const passwordInputProps = {
        style: {
            fontFamily: 'FarhangFaNum-Thin',
            // color: 'white',
            color: 'black'
        },
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
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={rtlTheme}>
                <form onSubmit={onSubmit}>
                    <div className='inputs_container'>
                        <TextField
                            inputProps={{maxLength: 19}}
                            size='small' label={AppString.username}
                            InputProps={{style: InputProps}}
                            InputLabelProps={{style: InputLabelProps}}
                            sx={InputSx}
                            className='login-input'
                            {...register("username")}
                            type='text'/>
                        {errors.username && <p className='error-text'>{errors.username.message}</p>}

                        <TextField
                            inputProps={{maxLength: 19}}
                            size='small' label={AppString.password}
                            InputProps={passwordInputProps}
                            InputLabelProps={{style: InputLabelProps}}
                            sx={InputSx}
                            className='login-input'
                            {...register("password")}
                            type={showPassword ? 'text' : 'password'}/>
                        {errors.password &&
                            <p className='error-text' style={{marginBottom: '10px'}}>{errors.password.message}</p>}
                        <div>
                            {!showProgressBar ? (
                                <input value={AppString.login} type="submit" className="login-button"/>
                            ) : (
                                <CircularProgress style={{marginTop: '15px', width: '30px'}}/>
                            )}
                        </div>
                    </div>
                </form>
            </ThemeProvider>
        </CacheProvider>
    );
}
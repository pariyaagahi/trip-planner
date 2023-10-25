import * as React from "react";

//style
import "./../../../style.css"
import {cacheRtl, InputLabelProps, InputProps, InputSx, rtlTheme} from "../../../style";

//hooks
import {useAppDispatch, useAppSelector} from "../../../../../CustomHook/reduxHook";
import {useForm} from "react-hook-form";
import {useEffect, useRef, useState} from "react";

//yup
import {yupResolver} from "@hookform/resolvers/yup";

//types
import {RegisterInputType} from "../../../../../Types/authentication";

//helpers
import {registerSchema} from "../../../../../Helpers/registerValidation";

//mui
import {CircularProgress, IconButton, InputAdornment, TextField} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {CacheProvider} from "@emotion/react";
import {ThemeProvider} from "@mui/material";

//string
import {AppString} from "../../../../../Assets/String/AppString";

//redux
import {register as Register} from "../../../../../Store/Authentication/authAction";
import {setIsOpenSnackBar, setSnackbarMessage} from "../../../../../Store/Common/commonSlice";

//components
import Snackbar from "../../../../../Components/Snackbar";

export default function Form() {
    //useSelector
    const {snackBarMessage} = useAppSelector(state => state.common)
    const {isLoginTabClicked} = useAppSelector(state => state.authentication)

    //useState
    const [showProgressBar, setShowProgressBar] = useState(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    //useDispatch
    const dispatch = useAppDispatch()

    //useForm
    const {resetField, register, handleSubmit, formState: {errors}} = useForm<RegisterInputType>({
        resolver: yupResolver(registerSchema)
    });

    //useEffect
    useEffect(() => {
        resetField('firstName')
        resetField("lastName")
        resetField('username')
        resetField("password")
        resetField('repeatPassword')
        resetField('phoneNumber')
    }, [isLoginTabClicked])

    //function
    const onSubmit = handleSubmit((values: RegisterInputType, event) => {
        event?.preventDefault();
        setShowProgressBar(true)
        callRegisterApi(values, event)
    });

    function callRegisterApi(values: RegisterInputType, event: React.BaseSyntheticEvent | undefined) {
        dispatch(Register(values)).unwrap().then((res: any) => {
            event?.target?.reset();
            dispatch(setSnackbarMessage(res?.message))
            setShowProgressBar(false)
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        }).catch((error) => {
            console.log(error)
            setShowProgressBar(false)
        }).then(() => {
            dispatch(setIsOpenSnackBar(true))
        })
    }

    //inner component
    const passwordInputProps = {
        style: {
            fontFamily: 'FarhangFaNum-Thin',
            // color: 'white',
            color:'black'
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
                <form onSubmit={onSubmit} autoComplete="new-password">
                    <div className='inputs_container'>
                        <TextField
                            type='text'
                            {...register("firstName")}
                            size='small' label={AppString.firstName}
                            inputProps={{maxLength: 19}}
                            InputProps={{style: InputProps}}
                            InputLabelProps={{style: InputLabelProps}}
                            sx={InputSx}
                        />
                        {errors.firstName && <p className='error-text'>{errors.firstName.message}</p>}

                        <TextField
                            {...register("lastName")}
                            size='small' label={AppString.lastName}
                            inputProps={{maxLength: 19}}
                            InputProps={{style: InputProps}}
                            InputLabelProps={{style: InputLabelProps}}
                            sx={InputSx}
                            type='text'/>
                        {errors.lastName && <p className='error-text'>{errors.lastName.message}</p>}

                        <TextField
                            {...register("username")}
                            size='small' label={AppString.username}
                            inputProps={{maxLength: 19}}
                            InputProps={{style: InputProps}}
                            InputLabelProps={{style: InputLabelProps}}
                            sx={InputSx}
                            type='text'/>
                        {errors.username && <p className='error-text'>{errors.username.message}</p>}

                        <TextField
                            {...register("password")}
                            size='small' label={AppString.password}
                            inputProps={{maxLength: 19}}
                            InputProps={passwordInputProps}
                            InputLabelProps={{style: InputLabelProps}}
                            sx={InputSx}
                            type={showPassword ? 'text' : 'password'}/>
                        {errors.password && <p className='error-text'>{errors.password.message}</p>}

                        <TextField
                            {...register("repeatPassword")}
                            size='small' label={AppString.repeatPassword}
                            inputProps={{maxLength: 19}}
                            InputProps={passwordInputProps}
                            InputLabelProps={{style: InputLabelProps}}
                            sx={InputSx}
                            type={showPassword ? 'text' : 'password'}
                        />
                        {errors.repeatPassword && <p className='error-text'>{errors.repeatPassword.message}</p>}

                        <TextField
                            {...register("phoneNumber")}
                            size='small' label={AppString.phoneNumber}
                            inputProps={{maxLength: 11}}
                            InputProps={{style: InputProps}}
                            InputLabelProps={{style: InputLabelProps}}
                            sx={InputSx}
                        />
                        <div>
                            {!showProgressBar ? (
                                <input value={AppString.Register} type="submit" className="login-button"/>
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
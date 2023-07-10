import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import {prefixer} from 'stylis'
import {createTheme} from "@mui/material/styles";


export const loginInputProps = {
    fontFamily: 'FarhangFaNum-Medium',
    height: '25px'
}
export const loginInputLabelProps = {
    fontFamily: 'FarhangFaNum-Bold',
    fontSize: "14px"
}
export const loginInputSx = {
    width: '250px',
    '& .MuiInputLabel-root': {},
    '& .MuiOutlinedInput-root': {
        '& > fieldset': {borderColor: '#063C73'},
    }
}
export const loginErrorBoxSx = {
    paddingRight: '10px',
    paddingLeft: '10px',
    width: '250px',
    height: '20px',
    fontSize:'15px',
    marginTop: '10px'
}
export const refreshCaptchaSx = {
    fontSize: '30px'
}
export const loginSubmitBtnStyle = {
    width: '100px',
    fontFamily: 'FarhangFaNum-Bold',
    marginTop: '40px',
    backgroundColor: '#09678d'
}
export const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
})
export const rtlTheme = createTheme({direction: 'rtl'})


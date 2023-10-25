import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import {prefixer} from 'stylis'
import {createTheme} from "@mui/material/styles";

export const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
})
export const rtlTheme = createTheme({direction: 'rtl'})

export const InputLabelProps = {
    fontFamily: 'FarhangFaNum-Regular',
    fontSize: "17px",
    // color: 'white',
    color:'black'
}

export const InputProps = {
    fontFamily: 'FarhangFaNum-Regular',
    // color: 'white',
    color:'black'
}

export const InputSx = {
    width: '95%', marginTop: '20px', borderRadius: '5px',
    '& .MuiInputLabel-root': {},
    '& .MuiOutlinedInput-root': {}
}
import React, {useState} from 'react';

const Form = ({children}) => {
    const [token, setToken] = useState('')
    const [refreshToken, setRefreshToken] = useState('')

    function goToPortal() {
        debugger
        setToken(localStorage.getItem('token'))
        setRefreshToken(localStorage.getItem('refresh-token'))
        debugger
        return true;
    }

    return (
        <form name='form' action='http://172.24.66.76:8086/'
              onSubmit={goToPortal}>
            <input type="hidden" name="origin" value='pushNotificationApp'/>
            <input type="hidden" name="AppToken" value={token}/>
            <input type="hidden" name="AppRefreshToken" value={refreshToken}/>
            <button type="submit" className='form-button'>
                {children}
            </button>
        </form>
    );
};

export default Form;

import {Outlet} from 'react-router-dom'

const RequireAuth = () => {
    return window.localStorage.getItem('token') !== null ? (
        <Outlet/>
    ) : window.location.replace('http://172.24.66.76:8086/')

}

export default RequireAuth

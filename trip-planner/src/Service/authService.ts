import {Buffer} from "buffer";
//axios
import axios from "axios";
//base url
import {AUTH__LOCAL_BASE_URL} from "./BaseUrl";
//type
import {LoginInputType, RegisterInputType} from "../Types/authentication";

const login = (input: LoginInputType) => {
    const base64 = Buffer.from(`${input.username}:${input.password}`, 'utf8').toString('base64')
    var config = {
        method: 'get',
        url: `${AUTH__LOCAL_BASE_URL}/login`,
        headers: {
            Authorization: `Basic ${base64}`
        },
    }
    return axios(config).then(function (response) {
        localStorage.setItem('token', response?.data?.access_token)
        localStorage.setItem('refresh-token', response?.data?.refresh_token)
        return response.data;
    })
}

const register = (input: RegisterInputType) => {
    var data = JSON.stringify({
        "firstName": input.firstName,
        "lastName": input.lastName,
        "userName": input.username,
        "mobileNumber": input.phoneNumber,
        "password": input.password,
        "mail": ""
    });
    var config = {
        method: 'post',
        url: `${AUTH__LOCAL_BASE_URL}/v1/user/save`,
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    }
    return axios(config).then(function (response) {
        return response.data;
    })
}

const AuthService = {
    login,register
}
export default AuthService;
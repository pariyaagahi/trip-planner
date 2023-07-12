import axios from "axios"
import {Buffer} from 'buffer'

const BASE_URL = "http://172.24.66.75:8091/authentication/api"

const getCaptcha = () => {
    var config = {
        method: 'get',
        url: `${BASE_URL}/v1/user/getCaptcha`,
    }
    return axios(config).then(function (response) {
        return response.data;
    })
}

const login = (username, password, captchaId, captchaInput) => {
    const base64 = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    var qs = require('qs')
    var data = qs.stringify({
        captchaId: captchaId,
        answer: captchaInput
    })
    var config = {
        method: 'post',
        url: `${BASE_URL}/login`,
        headers: {
            Authorization: `Basic ${base64}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data,
    }
    return axios(config).then(function (response) {
        localStorage.setItem('token', response?.data?.access_token)
        localStorage.setItem('refresh-token', response?.data?.refresh_token)
        return response.data;
    })
}

const refreshToken = () => {
    var config = {
        method: 'get',
        url: `${BASE_URL}/v1/token/refresh`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${window.localStorage.getItem('refresh-token')}`,
        },
    }
    return axios(config).then(function (response) {
        localStorage.setItem('token', response?.data?.data?.token)
        localStorage.setItem('refresh-token', response?.data?.data?.refreshToken)
        return response?.data;
    })
}

const logOut = () => {
    var config = {
        method: 'get',
        url: `${BASE_URL}/logout`,
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
    }
    axios(config).then(function (response) {
        return response.data;
    })
}

const AuthService = {
    getCaptcha,
    login,
    logOut,
    refreshToken
}
export default AuthService;

import axios from "axios"

const BASE_URL = "http://172.24.66.75:8091/notification/api/v1"

const loadData = () => {
    var data = {};
    var config = {
        method: 'post',
        url: `${BASE_URL}/baseData/load`,
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
        data: data
    }
    return axios(config)
        .then(function (response) {
            return response.data;
        })
}
const save = (serviceType, title, body, appType, categoryCode, pspCode, provinceId, terminalTypeCode, merchantTypeCode, terminalNumber, residencyTypeCode, nationalCode, startDateSend, startTimeSend, endDateSend, endTimeSend) => {
    var data = JSON.stringify({
        "serviceType": serviceType,
        "title": title,
        "body": body,
        "appType": appType,
        "businessCategoryId": categoryCode,
        "pspId": pspCode,
        "provinceId": provinceId,
        "terminalType": terminalTypeCode,
        "merchantType": merchantTypeCode,
        "terminalNumber": terminalNumber,
        "residencyType": residencyTypeCode,
        "nationalCode": nationalCode,
        "startDateSend": startDateSend,
        "startTimeSend": startTimeSend,
        "endDateSend": endDateSend,
        "endTimeSend": endTimeSend
    });

    var config = {
        method: 'post',
        url: `${BASE_URL}/request/save`,
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        data: data,
    };

    return axios(config)
        .then(function (response) {
            return response.data;
        })
}
const loadTable = (page, size, userId, serviceType, startDateSend, endDateSend) => {
    var data = JSON.stringify({
        "page": page,
        "size": size,
        "userId": userId ? userId : undefined,
        "serviceType": serviceType ? serviceType : undefined,
        "startDateSend": startDateSend ? startDateSend : undefined,
        "endDateSend": endDateSend ? endDateSend : undefined
    });
    var config = {
        method: 'post',
        url: `${BASE_URL}/request/load`,
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        data: data
    };
    return axios(config)
        .then(function (response) {
            return response.data;
        })
}
const cancel = (requestMasterId) => {
    var FormData = require('form-data');
    var data = new FormData();
    data.append('requestMasterId', requestMasterId);
    var config = {
        method: 'get',
        url: `${BASE_URL}/request/cancelNotification`,
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
        data: data
    };
    return axios(config)
        .then(function (response) {
            return response.data;
        })
}
const deleteNotif = (requestMasterId) => {
    var FormData = require('form-data');
    var data = new FormData();
    data.append('requestMasterId', requestMasterId);
    var config = {
        method: 'get',
        url: `${BASE_URL}/request/delete`,
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
        data: data
    };
    return axios(config)
        .then(function (response) {
            return response.data;
        })
}
const edit = (requestMasterId, serviceType, title, body, appType, businessCategoryId, pspId, provinceId, terminalType, merchantType, terminalNumber, residencyType, nationalCode, startDateSend, startTimeSend, endDateSend, endTimeSend) => {
    var data = JSON.stringify({
        "requestMasterId": requestMasterId,
        "serviceType": serviceType,
        "title": title,
        "body": body,
        "appType": appType,
        "businessCategoryId": businessCategoryId,
        "pspId": pspId,
        "provinceId": provinceId,
        "terminalType": terminalType,
        "merchantType": merchantType,
        "terminalNumber": terminalNumber,
        "residencyType": residencyType,
        "nationalCode": nationalCode,
        "startDateSend": startDateSend,
        "startTimeSend": startTimeSend,
        "endDateSend": endDateSend,
        "endTimeSend": endTimeSend
    });

    var config = {
        method: 'post',
        url: `${BASE_URL}/request/update`,
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        data: data,
    };

    console.log('update data is : ' + data)
    return axios(config)
        .then(function (response) {
            return response?.data;
        })
}
const pauseAndResume = (requestMasterId, status) => {
    var data = JSON.stringify({
        "requestMasterId": requestMasterId,
        "status": status
    });

    var config = {
        method: 'post',
        url: `${BASE_URL}/request/pauseAndResume`,
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        data: data
    };

    return axios(config)
        .then(function (response) {
            return response;
        })
}
const getUserInfo = () => {
    var config = {
        method: 'get',
        url: `${BASE_URL}/user/getUserInfo`,
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
    }
    return axios(config).then(function (response) {
        return response.data;
    })
}

const NotifService = {
    loadData, save, loadTable, cancel, deleteNotif, edit, pauseAndResume, getUserInfo
}
export default NotifService;

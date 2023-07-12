import axios from "axios";

const BASE_URL = "http://172.24.66.75:8091/notification/api/v1/setting"

const getSettingBaseConfig = () => {
    var config = {
        method: 'get',
        url: `${BASE_URL}/load`,
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
    };
    return axios(config).then(function (response) {
        return response.data;
    });
}
const updateSetting = (activeSms, activeNotification, activeEmail, activeAlarm, activeLoadMaster, activeSaveMaster , ipAddressValidLoadMaster , ipAddressValidSaveMaster) => {
    var data = JSON.stringify({
        activeSms: activeSms,
        activeNotification: activeNotification,
        activeEmail: activeEmail,
        activeAlarm: activeAlarm,
        activeLoadMaster: activeLoadMaster,
        activeSaveMaster: activeSaveMaster,
        ipAddressValidLoadMaster : ipAddressValidLoadMaster,
        ipAddressValidSaveMaster : ipAddressValidSaveMaster
    });
    var config = {
        method: 'post',
        url: `${BASE_URL}/update`,
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

const SettingService = {
    getSettingBaseConfig, updateSetting
}
export default SettingService;
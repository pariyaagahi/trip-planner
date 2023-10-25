import {EVENT_MANAGEMENT_BASE_URL} from "./BaseUrl";
import axios from "axios";

const getBaseData = () => {
    var data = '';
    var config = {
        method: 'post',
        url: `${EVENT_MANAGEMENT_BASE_URL}/v1/baseData/activity/list`,
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`
        },
        data: data
    };
    return axios(config)
        .then(function (response) {
        })
        .catch(function (error) {
        });

}

const BaseDataService = {
    getBaseData
}
export default BaseDataService;
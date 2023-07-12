import axios from "axios";

const BASE_URL = "http://172.24.66.75:8091/notification/api/v1/dashboard"

const loadDashboard = (scheduleChoice, startDateSend, endDateSend) => {
    var data = JSON.stringify({
        "scheduleChoiceEnum": scheduleChoice,
        "startDateSend": scheduleChoice === "3" ? startDateSend : undefined,
        "endDateSend": scheduleChoice === "3" ? endDateSend : undefined

    });
    var config = {
        method: 'post',
        url: `${BASE_URL}/load`,
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

const DashboardService = {
    loadDashboard
}
export default DashboardService;

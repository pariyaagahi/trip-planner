import React from 'react'
import Highcharts from 'highcharts/highstock'
import PieChart from 'highcharts-react-official'
import colors from 'react-multi-date-picker/plugins/colors'
import {AppString} from "../../Assets/String/AppString";
import {
    useAlarmTotalCount,
    useEmailTotalCount,
    useNotificationTotalCount,
    useSmsTotalCount
} from "../../CustomHook/UseReduxData";
import Box from "@mui/material/Box";

const CustomPieChart = () => {
    const smsTotalCount = useSmsTotalCount()
    const emailTotalCount = useEmailTotalCount()
    const notificationTotalCount = useNotificationTotalCount()
    const alarmTotalCount = useAlarmTotalCount()

    const options = {
        series: [
            {
                name: `${AppString.count}`,
                data: [
                    {name: `${AppString.sms}`, y: smsTotalCount ? smsTotalCount : 0},
                    {name: `${AppString.notification}`, y: notificationTotalCount ? notificationTotalCount : 0},
                    {name: `${AppString.email}`, y: emailTotalCount ? emailTotalCount : 0},
                    {name: `${AppString.alarm}`, y: alarmTotalCount ? alarmTotalCount : 0}
                ],
            },
        ],
        colors: ['#3fb568', '#6d96c1', '#f48d5e', '#c3c33b'],
        chart: {
            // plotBackgroundColor: '#d3d3d3',
            // plotBorderWidth: '1px',
            plotShadow: false,
            type: 'pie',
            // width: 678,
            height: 315,
        },
        stops: [
            [0, colors],
            [1, Highcharts.color(colors).brighten(-0.3).get('rgb')], // darken
        ],
        title: {
            text: '',
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}</b>',
            style: {fontFamily: 'FarhangFaNum-Regular'},
        },
        accessibility: {
            point: {
                valueSuffix: '%',
            },
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: %{point.percentage:.1f} ',
                    connectorColor: 'silver',
                    style: {fontFamily: 'FarhangFaNum-Regular'},
                    size: '50px',
                },
            },
        },
        credits: {
            enabled: false,
        },
    }


    return (
        <Box boxShadow={5} style={{ borderTop: '1px solid #cfcfcf'}}>
            <PieChart highcharts={Highcharts} options={options}/>
        </Box>
    )
}
export default CustomPieChart

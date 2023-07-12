import React from 'react';
import {AppString} from "../../Assets/String/AppString";
import {useNotificationGaugePercent} from "../../CustomHook/UseReduxData";
import GaugeChart from "../SharedComponent/GaugeChart";

const NotificationGauge = () => {
    const percent = useNotificationGaugePercent()
    return (
        <div>
            <GaugeChart id="gauge-chart6"
                        animate={false}
                        nrOfLevels={20}
                        percent={percent ? percent / 100 : 0}
                        needleColor="rgb(149, 193, 240)"
                        colors={['#3a628e', 'rgba(161,196,216,0.56)']}
                        hideText
                        gaugeText={`% ${AppString.notificationGaugeText} ${percent ? percent : 0}`}
            />
        </div>
    );
};

export default NotificationGauge;

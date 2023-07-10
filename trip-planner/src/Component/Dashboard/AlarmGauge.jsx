import React from 'react';
import {AppString} from "../../Assets/String/AppString";
import {useAlarmGaugePercent} from "../../CustomHook/UseReduxData";
import GaugeChart from "../SharedComponent/GaugeChart";

const AlarmGauge = () => {
    const percent = useAlarmGaugePercent()
    return (
        <div>
            <GaugeChart id="gauge-chart6"
                        animate={false}
                        nrOfLevels={20}
                        percent={percent ? percent / 100 : 0}
                        needleColor="rgb(149, 193, 240)"
                        colors={['#b5b52e', '#cacaca']}
                        hideText
                        gaugeText={`% ${AppString.alarmGaugeText} ${percent ? percent : 0}`}
            />
        </div>
    );
};

export default AlarmGauge;

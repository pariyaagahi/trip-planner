import React from 'react';
import {AppString} from "../../Assets/String/AppString";
import {useSmsGaugePercent} from "../../CustomHook/UseReduxData";
import GaugeChart from "../SharedComponent/GaugeChart";

const SmsGauge = () => {
    const percent = useSmsGaugePercent()
    return (
        <div>
            <GaugeChart id="gauge-chart6"
                        animate={false}
                        nrOfLevels={20}
                        percent={percent ? percent / 100 : 0}
                        needleColor="rgb(149, 193, 240)"
                        colors={['#e66228','#fdcab2']}
                        hideText
                        gaugeText={`% ${AppString.smsGaugeText} ${percent ? percent : 0}`}
            />
        </div>
    );
};

export default SmsGauge;

import React from 'react';
import {AppString} from "../../Assets/String/AppString";
import {useEmailGaugePercent} from "../../CustomHook/UseReduxData";
import GaugeChart from "../SharedComponent/GaugeChart";

const EmailGauge = () => {
    const percent = useEmailGaugePercent()
    return (
        <div>
            <GaugeChart id="gauge-chart6"
                        animate={false}
                        nrOfLevels={20}
                        percent={percent ? percent / 100 : 0}
                        needleColor="rgb(149, 193, 240)"
                        colors={['#229449','#bec8be']}
                        hideText
                        gaugeText={`% ${AppString.emailGaugeText} ${percent ? percent : 0}`}
            />
        </div>
    );
};

export default EmailGauge;

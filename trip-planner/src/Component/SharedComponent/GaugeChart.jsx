import React from 'react';
import GaugeChart from 'react-gauge-chart';
import './style.css'

const CustomGauge = (props) => {
    return (
        <div>
            <GaugeChart id={props.id}
                        animate={props.animate}
                        nrOfLevels={props.nrOfLevels}
                        percent={props.percent}
                        needleColor={props.needleColor}
                        colors={props.colors}
                        hideText
            />
            <p className='gauge-text'>
                {props.gaugeText}
            </p>
        </div>
    );
};

export default CustomGauge;

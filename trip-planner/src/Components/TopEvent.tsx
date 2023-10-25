import React from 'react';
//image
import pic from './../Assets/Image/trip2.jpg'
//mui
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const CustomTopEvent = () => {
    return (
        <div style={{width: 75, height: 100, fontFamily: 'FarhangFaNum-Thin'}}>
            <img style={{width: 68, height: 69, borderRadius: 51}} src={pic}/>
            <div style={{marginTop: '5px'}}>
                توچال
            </div>
        </div>
    );
};

export default CustomTopEvent;

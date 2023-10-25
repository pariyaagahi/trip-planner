import React from 'react';
//mui
import AddIcon from '@mui/icons-material/Add';
import {IconButton} from "@mui/material";

const AddEventButton = () => {
    return (
        <div style={{width: 75, height: 75}}>
            <div style={{
                width: 68,
                height: 69,
                borderRadius: 51,
                backgroundColor: '#738f99',
            }}>
                <div style={{paddingTop: '11px'}}>
                    <IconButton>
                        <AddIcon sx={{fill: 'white', fontSize: '30px'}}/>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default AddEventButton;

import React, {useState} from 'react';
//component
import LoadingButton from "../../../Components/LoadingButton";
//mui
import SaveIcon from '@mui/icons-material/Save';
import {AppString} from "../../../Assets/String/AppString";

const Button = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    return (
        <div>
            <LoadingButton onClick={() => {
                setIsLoading(!isLoading)
            }} btnText={AppString.saveEvent} loading={isLoading} startIcon={<SaveIcon/>}/>
        </div>
    );
};

export default Button;

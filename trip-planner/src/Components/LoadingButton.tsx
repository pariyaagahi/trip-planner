import React, {FC} from 'react';
//mui
import LoadingButton from '@mui/lab/LoadingButton';
//type
import {LoadingButtonProps, LoadingButtonOptionalProps} from "../Types/common"
//style
import './style.css'

const defaultProps: LoadingButtonOptionalProps = {
    color: "secondary"
}

const CustomLoadingButton: FC<LoadingButtonProps> = (props: LoadingButtonProps) => {

    return (
        <div>
            <LoadingButton
                size="small"
                // color={props.color}
                className='loading-btn'
                onClick={props.onClick}
                loading={props.loading}
                loadingPosition="start"
                startIcon={props.startIcon}
                variant="contained"
            >
                <span>{props.btnText}</span>
            </LoadingButton>
        </div>
    );
};
CustomLoadingButton.defaultProps = defaultProps;
export default CustomLoadingButton;


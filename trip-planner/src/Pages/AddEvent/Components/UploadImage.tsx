import React, {useState} from 'react';
//components
import UploadFileInput from "../../../Components/UploadFileInput";
//mui
import {Grid} from "@mui/material";
//style
import './../style.css'
//string
import {AppString} from "../../../Assets/String/AppString";

const UploadImage = () => {
    //useState
    const [imageUrl, setImageUrl] = useState<any>(null);

    //function
    const handleFileUpload = (event: any) => {
        const file = event?.target?.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImageUrl(reader?.result);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div>
            <Grid container direction='row-reverse' spacing={1}>
                <Grid item>
                    <div className='upload-file-label'>
                        {AppString.eventPic}
                    </div>
                </Grid>
                <Grid item>
                    <div>
                        <UploadFileInput onChange={handleFileUpload}/>
                    </div>
                </Grid>
            </Grid>
            <div className='upload-event-image-div'>
                {imageUrl &&
                    <img className='upload-event-image-container' src={imageUrl} alt="Uploaded Image"/>}
            </div>
        </div>
    );
};

export default UploadImage;

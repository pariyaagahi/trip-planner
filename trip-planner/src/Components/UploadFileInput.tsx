//mui
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {Container} from "@mui/material";
import UploadIcon from '@mui/icons-material/Upload';
//string
import {AppString} from "../Assets/String/AppString";
//style
import './style.css'
//type
import {UploadFileInputProps} from "../Types/common";

export default function UploadFileInput(props: UploadFileInputProps) {

    return (
        <Container maxWidth="md">
            <Stack direction="row" alignItems="center" spacing={2}>
                <label htmlFor="upload-image">
                    <Button className='upload-btn' variant="contained" component="span">
                        {AppString.upload}
                        <UploadIcon className='upload-icon'/>
                    </Button>
                    <input
                        id="upload-image"
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={props.onChange}
                    />
                </label>
            </Stack>
        </Container>
    );
}
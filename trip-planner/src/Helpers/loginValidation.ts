//yup
import * as yup from "yup";
//string
import {AppString} from "../Assets/String/AppString";

export const loginSchema = yup.object().shape({
    username: yup.string()
        .required(AppString.usernameValidationText),
    password: yup.string()
        .required(AppString.passwordValidationText)
});
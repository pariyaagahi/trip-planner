//yup
import * as yup from "yup";
//string
import {AppString} from "../Assets/String/AppString";

export const registerSchema = yup.object().shape({
    firstName: yup.string()
        .required(AppString.firstNameValidationText)
        .min(2, AppString.minCharValidationText),
    lastName: yup.string()
        .required(AppString.lastNameValidationText)
        .min(2, AppString.minCharValidationText),
    username: yup.string()
        .required(AppString.usernameValidationText)
        .min(5, AppString.minUsernamePassCharValidationText),
    password: yup.string()
        .required(AppString.passwordValidationText)
        .min(5, AppString.minUsernamePassCharValidationText),
    repeatPassword: yup.string()
        .required(AppString.passwordValidationText)
        .oneOf([yup.ref("password")], AppString.repeatPassNotMatchValidationText)
});
//yup
import * as yup from "yup";

export const AddUserSchema = yup.object().shape({
    firstName: yup.string().required(),
    username: yup.string()
        .required('Username is required')
        .min(6, 'Username must be at least 6 characters'),
    lastName: yup.string().required(),
});
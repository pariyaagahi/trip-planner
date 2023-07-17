import * as React from "react";
//hooks
import {useForm} from "react-hook-form";

//yup
import {yupResolver} from "@hookform/resolvers/yup";

//types
import {LoginInputType} from "../../Types/authentication";

//helpers
import {AddUserSchema} from "../../Helpers/loginValidation";

export default function Login() {

    const {register, handleSubmit, formState: {errors}} = useForm<LoginInputType>({
        resolver: yupResolver(AddUserSchema)
    });

    const onSubmit = (data: LoginInputType) => {
        console.log(JSON.stringify(data, null, 2));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>User Name</label>
                <input {...register("username")} />
                {errors.username && <p>{errors.username.message}</p>}
            </div>
            <div>
                <label>First Name</label>
                <input {...register("firstName")} />
                {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>
            <div>
                <label>Last Name</label>
                <input {...register("lastName")} />
                {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>
            <input type="submit"/>
        </form>
    );
}
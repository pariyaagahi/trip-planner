export interface LoginInputType {
    username: string
    password: string
}

export interface RegisterInputType extends LoginInputType {
    firstName: string
    lastName: string
    phoneNumber?: string
    repeatPassword: string
}

export interface AuthState {
    isLoginTabClicked: boolean
    isRegisterTabClicked: boolean
}
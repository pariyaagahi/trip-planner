import React from "react";
import {Dayjs} from 'dayjs';

export interface MessageType {
    message: string
}

export interface SnackbarProps extends MessageType {
}

export interface BaseDataType {
    "activityId": number,
    "nameFa": string,
    "name": string,
    "picId": number,
    "pic": string
}

export interface BaseState {
    isOpenSnackBar: boolean
    snackBarMessage: string
    baseData: BaseDataType[]
}

export interface OptionType {
    key: number | null,
    value: string | null
}

export interface AutoCompleteProps {
    options: OptionType[]
    defaultValue?: OptionType
    label?: string
    placeHolder?: string
    value: OptionType | null
    onChange: (event: any, newValue: OptionType | null) => void
    sx?: React.CSSProperties
}

export interface TextFieldProps {
    sx?: React.CSSProperties
    label?: string
    inputRef: React.RefObject<HTMLInputElement>
}

export interface UploadFileInputProps {
    onChange: (event: any) => void
}

export interface DatePickerProps extends UploadFileInputProps {
    label: string
    value: Dayjs | null
    disabled?: boolean
}

export interface LoadingButtonOptionalProps {
    color?: any
}

export interface LoadingButtonRequiredProps {
    onClick: (event: any) => void
    loading: boolean
    startIcon: React.ReactNode
    btnText: string
}

export interface LoadingButtonProps extends LoadingButtonRequiredProps, LoadingButtonOptionalProps {
}

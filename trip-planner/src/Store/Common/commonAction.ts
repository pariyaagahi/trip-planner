import {createAsyncThunk} from "@reduxjs/toolkit";
import {BaseDataType, MessageType} from "../../Types/common";
import BaseDataService from "../../Service/baseDataService";


export const getBaseData = createAsyncThunk<BaseDataType[], void, { rejectValue: MessageType }>("baseData/getBaseData",
    async (_, thunkApi) => {
        try {
            const response: any = await BaseDataService.getBaseData()
            return response?.data;
        } catch (error) {
            return thunkApi.rejectWithValue({message: ''})
        }
    })
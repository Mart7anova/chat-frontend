import {createAsyncThunk} from "@reduxjs/toolkit";
import {socketApi} from "api";

export const sendName = createAsyncThunk(
    'chat/sendName',
        (name: string) => {
            socketApi.sendName(name)
        }
)
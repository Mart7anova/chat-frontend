import {createAsyncThunk} from "@reduxjs/toolkit";
import {socketApi} from "api";

export const sendMessage = createAsyncThunk(
    'chat/sendMessage',
    (message: string) => {
        socketApi.sendMessage(message)
    }
)
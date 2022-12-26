import {createAsyncThunk} from "@reduxjs/toolkit";
import {socketApi} from "api";

export const destroyConnection = createAsyncThunk(
    'chat/destroyConnection',
    () => {
        socketApi.destroyConnection()
    }
)
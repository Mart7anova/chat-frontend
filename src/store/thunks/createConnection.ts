import {createAsyncThunk} from "@reduxjs/toolkit";
import {socketApi} from "api";
import {MessageType} from "types";
import {setClientName, setMessages, setNewMessage} from "store/slices";

export const createConnection = createAsyncThunk(
    'chat/createConnection',
    (_, {dispatch}) => {
        socketApi.createConnection()
        socketApi.subscribe(
            (name: string)=>{
                dispatch(setClientName(name))
            },
            (messages: MessageType []) => {
                dispatch(setMessages(messages))
            },
            (message: MessageType) => {
                dispatch(setNewMessage(message))
            }
        )
    }
)
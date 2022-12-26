import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MessageType} from "types";

const initialState = {
    messages: [] as MessageType[],
    clientName: ''
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setClientName: (state, action: PayloadAction<string>) => {
            state.clientName = action.payload
        },
        setMessages: (state, action: PayloadAction<MessageType[]>) => {
            state.messages = action.payload
        },
        setNewMessage: (state, action: PayloadAction<MessageType>) => {
            state.messages = [...state.messages, action.payload]
        },
    },
})

export const {setClientName,setMessages, setNewMessage} = chatSlice.actions
export const chatReducer = chatSlice.reducer


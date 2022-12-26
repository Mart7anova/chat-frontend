import {configureStore} from '@reduxjs/toolkit'
import {chatReducer} from "store/slices";



export const store = configureStore({
    reducer: {
        chat: chatReducer,
    },
})


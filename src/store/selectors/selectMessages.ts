import {RootState} from "store/types";

export const selectMessages = (state: RootState) => state.chat.messages
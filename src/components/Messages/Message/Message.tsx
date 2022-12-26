import React from 'react';
import {PropsType} from "./types";

export const Message = ({name, message}: PropsType) => {
    return (
        <>
            <p><b>{name}</b>:</p>
            <p>{message}</p>
        </>
    );
};

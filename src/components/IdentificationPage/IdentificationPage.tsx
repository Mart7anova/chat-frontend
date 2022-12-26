import React, {ChangeEvent, useState} from 'react';
import {useAppDispatch} from "hooks";
import {sendName} from "store/thunks";

export const IdentificationPage = () => {
    const dispatch = useAppDispatch()

    const [name, setName] = useState('')

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const onSendName = () => {
        dispatch(sendName(name))
    }

    return (
        <>
            <h1>Enter your name</h1>
            <input type="text" value={name} onChange={onChangeName}/>
            <button onClick={onSendName}>Send name</button>
        </>
    );
};

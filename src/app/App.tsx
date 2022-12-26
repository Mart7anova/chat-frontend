import React, {useEffect} from 'react';
import style from 'app/App.module.css';
import {IdentificationPage, Messages} from "components";
import {useAppDispatch, useAppSelector} from "hooks";
import {selectClientName} from "store/selectors";
import {createConnection, destroyConnection} from "store/thunks";


export const App = () => {
    const dispatch = useAppDispatch()

    const name = useAppSelector(selectClientName)

    useEffect(() => {
        dispatch(createConnection())

        return () => {
            dispatch(destroyConnection())
        }

    }, [])

    return (
        <div className={style.chat}>
            {
                name
                    ? <Messages/>
                    : <IdentificationPage/>

            }
        </div>
    );
}


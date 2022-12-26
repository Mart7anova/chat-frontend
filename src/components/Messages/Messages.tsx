import React, {ChangeEvent, Fragment, UIEvent, useEffect, useRef, useState} from 'react';
import style from "./Messages.module.css";
import {useAppDispatch, useAppSelector} from "hooks";
import {sendMessage} from "store/thunks";
import {selectClientName, selectMessages} from "store/selectors";
import {Message} from "components/Messages/Message";


export const Messages = () => {
    const dispatch = useAppDispatch()

    const messages = useAppSelector(selectMessages)
    const name = useAppSelector(selectClientName)

    const [message, setMessage] = useState('hello')
    const [isAutoScrollActive, setIsAutoScrollActive] = useState(true)
    const [lastScrollTop, setLastScrollTop] = useState(0)

    const messagesAnchor = useRef<HTMLDivElement>(null)

    const onScroll = (e: UIEvent<HTMLDivElement>) => {
        const element = e.currentTarget
        const maxScrollPosition = element.scrollHeight - element.clientHeight

        if (lastScrollTop < element.scrollTop && Math.abs(maxScrollPosition - element.scrollTop) < 10) {
            setIsAutoScrollActive(true)
        } else {
            setIsAutoScrollActive(false)
        }
        setLastScrollTop(element.scrollTop)
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    const onSend = () => {
        dispatch(sendMessage(message))
        setMessage('')
    }

    useEffect(() => {
        if (isAutoScrollActive) {
            messagesAnchor.current?.scrollIntoView(false)
        }
    }, [messages])

    return (
        <>
            <h1>Your name: {name}</h1>
            <div className={style.messages} onScroll={onScroll}>
                {messages.map(({id, message, user: {name}}) => (
                    <Fragment key={id}>
                        <Message name={name} message={message}/>
                    </Fragment>
                ))}
                <div ref={messagesAnchor}/>
            </div>
            <div className={style.controls}>
                <textarea name="chat" value={message} onChange={onChange}/>
                <button onClick={onSend}>Send</button>
            </div>
        </>
    );
};

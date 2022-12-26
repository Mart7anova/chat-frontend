import socketIo, {Socket} from "socket.io-client";
import {MessageType} from "types";

export const socketApi = {
    socket: null as null | Socket,
    createConnection() {
        this.socket = socketIo('http://localhost:3009/')
    },
    destroyConnection() {
        this.socket?.disconnect()
        this.socket = null
    },
    subscribe(clientNameHandler: (name: string) => void,
              initMessagesHandler: (messages: MessageType []) => void,
              newMessagesHandler: (message: MessageType) => void) {
        this.socket?.on('client-name', clientNameHandler)
        this.socket?.on('init-messages', initMessagesHandler)
        this.socket?.on('new-message', newMessagesHandler)
    },
    sendName(name: string) {
        this.socket?.emit('client-name-sent', name)
    },
    sendMessage(message: string) {
        this.socket?.emit('client-message-sent', message)
    },
}

const { useState, useEffect, useRef } = React

import { eventBusService } from "../services/event-bus.service.js"

export function UserMsg() {
    const timeoutIdRef = useRef(null)
    const [msg, setMsg] = useState(null)

    useEffect(() => {
        const unsubscribe = eventBusService.on('show-user-msg', (msg) => {
            console.log('msg FromUserMsg: ', msg)
            setMsg(msg)

            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef)
            }
            timeoutIdRef.current = setTimeout(onCloseMsg, 3000)

        })
        return unsubscribe
    }, [])

    function onCloseMsg() {
        setMsg(null)
    }

    if (!msg) return <span></span>
    return <div className={"user-msg " + msg.type} >
        <button onClick={onCloseMsg}>X</button>
        <div className="text">
        </div>{msg.txt}</div >
}
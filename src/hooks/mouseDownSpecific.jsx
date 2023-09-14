import {useEffect, useRef} from 'react'

export const useMouseOutClickSpecific=(action)=>{

    const domRef=useRef()

    useEffect(()=>{
const clickHandler=(event)=>{
if(!domRef.current.contains(event.target)){
    action()
}
}
document.addEventListener('mousedown',clickHandler)

return ()=>{
    document.removeEventListener('mousedown',clickHandler)
}
    })


    return {domRef}
}
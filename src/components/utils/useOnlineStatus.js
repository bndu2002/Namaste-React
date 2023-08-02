//how to create the custom hook(start procedure)
// 1. finalize the contract => input? , output?

import { useEffect, useState } from "react"


const useOnlineStatus = () => {

    const [onlineStatus, setonlineStatus] = useState(true)

    //why using useEffect
    //Clarity and Best Practices: Using useEffect clearly communicates that you are performing a side effect (subscribing to events) in your hook. It's a recommended practice to use useEffect for side effects to improve code readability and maintainability.
    useEffect(() => {
        window.addEventListener('online', () => {
            setonlineStatus(true)
        })
        window.addEventListener('offline', () => {
            setonlineStatus(false)
        })
    },[])

    return onlineStatus
}

export default useOnlineStatus
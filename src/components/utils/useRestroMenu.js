
import { useEffect, useState } from "react"
import { SWIGGY_RESTRO_MENU_API } from "./constants"

const useRestroMenu = (resId) => {
    const [resInfo, setresInfo] = useState(null)

    useEffect(() => {
        fetchRestroMenu()
    }, [])


    const fetchRestroMenu = async () => {

        const response = await fetch(SWIGGY_RESTRO_MENU_API + resId)

        const json = await response.json()

        console.log('json from restromenu compo', json)

        setresInfo(json?.data)

        console.log('resInfo from useRestroMenu ==>', resInfo)

        //even if you don't explicitly write return resInfo in the fetchRestroMenu function, it still works because the useEffect hook doesn't rely on the return value of fetchRestroMenu. Instead, it depends on the state changes triggered by setresInfo, which eventually updates the component and renders the data.

    }
    return resInfo
}

export default useRestroMenu
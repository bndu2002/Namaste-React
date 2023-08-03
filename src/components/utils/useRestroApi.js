import { useEffect, useState } from "react"
import { SWIGGY_RESTRO_API } from "./constants"


const useRestroApi = () => {

    //state variable => super powerfull react variable
    const [listOfRestro, setlistOfRestro] = useState([])

    const [filteredRestroList, setfilteredRestroList] = useState([])

    useEffect(() => {

        fetchRestro()

    }, [])

    const fetchRestro = async () => {

        const response = await fetch(SWIGGY_RESTRO_API)

        const { data } = await response.json()

        console.log(data)

        const restaurants = data?.success?.cards?.[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants

        console.log("restro list is here", restaurants)

        setlistOfRestro(restaurants)

        //filteredRestroList => copy of listOfRestro 
        setfilteredRestroList(restaurants)

        intactRestroFromApi = restaurants


    }
    
    //returned object is using ES6 shorthand property syntax.
    // key and value have the same name ? can omit the value, and JS automatically use the variable with the same name
    //     equivalent to = return {
    //   listOfRestro: listOfRestro,
    //   filteredRestroList: filteredRestroList,
    //   setfilteredRestroList: setfilteredRestroList,
    //   setlistOfRestro: setlistOfRestro,
    // };

    return { listOfRestro, filteredRestroList, setfilteredRestroList, setlistOfRestro }
}

export default useRestroApi
import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import { SWIGGY_RESTRO_MENU_API } from "./utils/constants"


function RestroMenu() {

    const [isVegClicked, setisVegClicked] = useState(false)

    const { resId } = useParams()

    // const query = new URLSearchParams(window.location.search) //to access the query param
    //.search contains all the query params

    // const nameQuery = query.get('name')

    console.log('id from useParams', resId)

    const [resInfo, setresInfo] = useState(null)

    useEffect(() => {

        fetchMenu()

    }, [])


    const fetchMenu = async () => {
        const response = await fetch(SWIGGY_RESTRO_MENU_API + resId)

        const json = await response.json()

        console.log('json from restromenu compo', json)

        setresInfo(json?.data)

    }

    //  ?? => nullish coalescing operator, logical operator introduced in ECMAScript 2020 (ES11),
    // > to handle null or undefined values
    // > left-hand side operand === null/undefined ? right hand side operand : left hand side 
    // > usefful to provide default value when dealing with possibly null or undefined values
    // > unlike || which also give default value for other falsy values (e.g., false, 0, empty strings, etc.),
    //   ?? only considers null and undefined as falsy values

    const { name, cuisines, costForTwoMessage
    } = resInfo?.cards[0]?.card?.card?.info ?? {};

    const { itemCards } = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ?? {}

    console.log("itemCards", itemCards)

    return (resInfo === null ? <Shimmer /> :
        <div className='menu'>

            <h1>{name}</h1>
            <h3>{cuisines.join(" , ")} - {costForTwoMessage}</h3>

            <h2>menu</h2>
            <button onClick={() => setisVegClicked(!isVegClicked)}>{isVegClicked ? "veg & non-veg" : "only veg"}</button>
            <ul >

                {
                    isVegClicked ?
                        itemCards?.map((val) => {
                            if (val?.card?.info?.isVeg)
                                return <li key={val?.card?.info?.id}>{val?.card?.info?.name} - ₹{val?.card?.info?.price / 100 || val?.card?.info?.defaultPrice / 100}</li>
                        })
                        : itemCards?.map(val => <li key={val?.card?.info?.id}>{val?.card?.info?.name} - ₹{val?.card?.info?.price / 100 || val?.card?.info?.defaultPrice / 100}</li>)

                }
            </ul>

        </div>
    )
}

export default RestroMenu
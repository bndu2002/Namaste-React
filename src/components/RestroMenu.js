import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import useRestroMenu from './utils/useRestroMenu'

//before useRestroMenu => RestroMenu was doing 2 things : 1. fetching data , 2. displaying data
//after useRestroMenu => RestroMenu has single responsiility (display the data)
function RestroMenu() {

    const [isVegClicked, setisVegClicked] = useState(false)

    const { resId } = useParams()

    const resInfo = useRestroMenu(resId)

    console.log('id from useParams', resId)

    console.log('resInfo from RetroMenu ===>' , resInfo)

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

            <h1 className='font-bold text-[36px] py-4'>{name}</h1>
            <h3 className='font-bold'>{cuisines.join(" , ")} - {costForTwoMessage}</h3>

            <h2 className='text-red-700'>menu</h2>
            <button className="hover:bg-slate-300 py-4" onClick={() => setisVegClicked(!isVegClicked)}>{isVegClicked ? "veg & non-veg" : "only veg"}</button>
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
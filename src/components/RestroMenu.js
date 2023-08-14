import React, { useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import useRestroMenu from './utils/useRestroMenu'
import RestroCategory from './RestroCategory'


//before useRestroMenu => RestroMenu was doing 2 things : 1. fetching data , 2. displaying data
//after useRestroMenu => RestroMenu has single responsiility (display the data)
function RestroMenu() {

    const [expand, setexpand] = useState(true)

    const [collapseIndex, setcollapseIndex] = useState(0)

    const [isVegClicked, setisVegClicked] = useState(false)

    const { resId } = useParams()

    const resInfo = useRestroMenu(resId)

    console.log('id from useParams', resId)

    console.log('resInfo from RetroMenu ===>', resInfo)

    //  ?? => nullish coalescing operator, logical operator introduced in ECMAScript 2020 (ES11),
    // > to handle null or undefined values
    // > left-hand side operand === null/undefined ? right hand side operand : left hand side 
    // > usefful to provide default value when dealing with possibly null or undefined values
    // > unlike || which also give default value for other falsy values (e.g., false, 0, empty strings, etc.),
    //   ?? only considers null and undefined as falsy values

    const { name, cuisines, costForTwoMessage
    } = resInfo?.cards[0]?.card?.card?.info ?? {};

    //@ not valid js property name hence ["name"]
    const categories = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(val => val.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    console.log("categories", categories)
    
    return (resInfo === null ? <Shimmer /> :
        <div className='text-center'>

            <h1 className='font-bold text-[36px] py-4'>{name}</h1>

            <p className='font-bold'>{cuisines.join(" , ")} - {costForTwoMessage}</p>

            <button onClick={() => setisVegClicked(!isVegClicked)}>{isVegClicked ? "both ?" : "only veg ?"}</button>

            
            {/* categories accordian => for each category */}

            {categories.map((category, ind) =>
            //controlled <RestroCategory/> compo
                <RestroCategory
                    key={category?.card?.card?.title}
                    categoryData={category?.card?.card}
                    isVegClicked={isVegClicked}
                    collapse={ind === collapseIndex ? expand : false}
                    setcollapseIndex={()=>setcollapseIndex(ind)}
                    index = {ind}
                    expand = {expand}
                    setexpand = {setexpand}
                    collapseIndex={collapseIndex}
                    />)
                   
            }

        </div>
    )
}

export default RestroMenu
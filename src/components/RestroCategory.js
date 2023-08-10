
import React from "react"
import { useState } from "react"
import CategoryItemList from "./CategoryItemList"

const RestroCategory = (props) => {
    const [collapse, setcollapse] = useState(true)
    const { categoryData, isVegClicked } = props
    const { title } = categoryData

    // console.log("categoryData from RestroCategory ======>", categoryData)
    console.log("itemCards from RestroCategory ======>", categoryData?.itemCards)


    const vegItemsOnly = categoryData?.itemCards.filter(item =>

        item?.card?.info?.isVeg ? item : null
    )

    console.log("unfiltered", categoryData?.itemCards.length)
    console.log(vegItemsOnly.length)


    return <>
        {/* accordian header */}

        <div className="shadow-lg p-4 w-6/12 mx-auto my-4 bg-gray-50">

            <div className=" flex justify-between cursor-pointer" onClick={() => setcollapse(!collapse)}>
                <span className="font-bold text-lg">{title} ({isVegClicked ? vegItemsOnly.length : categoryData?.itemCards.length})</span>
                <span >🔻</span>
            </div>
            {/* accordian body  */}


            {/* diff syntax for same thing */}

            {/*
             { isVegClicked && collapse && <CategoryItemList itemCards={vegItemsOnly} />}

             { !isVegClicked && collapse && <CategoryItemList itemCards={categoryData?.itemCards} />}
            */}


            {/* 
                    { isVegClicked && collapse ? <CategoryItemList itemCards={vegItemsOnly} /> :
                    !isVegClicked && collapse && <CategoryItemList itemCards={vegItemsOnly} />                    
                    }
              */}


            {/* optimised way */}
            {collapse && <CategoryItemList itemCards={isVegClicked ? vegItemsOnly : categoryData?.itemCards} />}



        </div>
    </>
}

export default RestroCategory
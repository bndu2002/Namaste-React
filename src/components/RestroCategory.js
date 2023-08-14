
import React from "react"
import { useState } from "react"
import CategoryItemList from "./CategoryItemList"

const RestroCategory = (props) => {

    //Uncontrolled => when RestroCategory manages its own state (collapse)
    //Controlled => when its parent (RestroMenu) sends the state(collapse) as a prop to the child (RestroCategory)
    //const [collapse, setcollapse] = useState(true)
    const { categoryData, isVegClicked, collapse, setcollapseIndex, index, expand, setexpand, collapseIndex } = props
    const { title } = categoryData

    // console.log("categoryData from RestroCategory ======>", categoryData)
    console.log("itemCards from RestroCategory ======>", categoryData?.itemCards)


    const vegItemsOnly = categoryData?.itemCards.filter(item =>

        item?.card?.info?.isVeg ? item : null
    )

    console.log("unfiltered", categoryData?.itemCards.length)
    console.log(vegItemsOnly.length)

    //BUG => when all the categories are closed manually and then onClick of a category first the collapseIndex changes then when clicked again collapse and expand becomes true

    //the issue you're facing is that when you click on the header of one category, the expand state gets updated for all categories. This is because all categories share the same expand state from the parent. 

    const handleAccoHeaderOnClick = () => {
        setcollapseIndex()
        //this check closes the open category and opens the category that is clicked
        //will only work when the collapsed category is clicked
        if (collapseIndex == index) {
            setexpand(!expand)
        }
    }

    return <>
        {/* accordian header */}

        <div className="shadow-lg p-4 w-6/12 mx-auto my-4 bg-gray-50">

            <div className=" flex justify-between cursor-pointer" onClick={handleAccoHeaderOnClick} >
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
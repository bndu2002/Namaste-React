import RestroCard from "./RestroCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import { SWIGGY_RESTRO_API } from "./utils/constants"
import useOnlineStatus from "./utils/useOnlineStatus"
import useRestroApi from "./utils/useRestroApi"


const Body = () => {

    const { listOfRestro, filteredRestroList, setfilteredRestroList, setlistOfRestro } = useRestroApi()

    console.log("useRestroApi() ====>", useRestroApi())

    //state variable => super powerfull react variable
    // const [listOfRestro, setlistOfRestro] = useState([])

    // const [filteredRestroList, setfilteredRestroList] = useState([])

    const [searchText, setsearchText] = useState("")

    const onlineStatus = useOnlineStatus()

    console.log('useOnlineStatus called BODY ...........')

    // useEffect(() => {
    //     fetchData()
    // }, [])


    // const fetchData = async () => {
    //     const response = await fetch(SWIGGY_RESTRO_API)

    //     const { data } = await response.json()

    //     console.log("data from Body",data)

    //     const restaurants = data?.success?.cards?.[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants

    //     console.log("restro list is here", restaurants)

    //     setlistOfRestro(restaurants) 

    //     //filteredRestroList => copy of listOfRestro 
    //     setfilteredRestroList(restaurants)

    //     intactRestroFromApi = restaurants

    // }


    const handleSerachOnClick = () => {

        //filtering from listOfRestro so that after filtering once user can again change the search input and get the result from listOfRestro 
        const filterRestro = listOfRestro.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setfilteredRestroList(filterRestro)

    }

    const handleSerachOnChange = (e) => {
        //console.log('from onachenge brfoe', isSearchClicked)
        console.log('hoo')
        setsearchText(e.target.value)
    }

    if (onlineStatus == false) return <h1>looks like you are offline</h1>

    return (listOfRestro?.length === 0 ? <Shimmer /> :
        <div className="">
            <div className="filter flex items-center">
                <div className="m-4 p-4 ">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={handleSerachOnChange} />
                    <button onClick={handleSerachOnClick} className=" px-4 py-1 m-4 bg-green-100">search</button>
                </div>
                <div className="m-4 p-4 rounded-lg">
                    <button className="px-4 py-2 bg-gray-100 hover:bg-gray-300" onClick={() => {

                        const filter = listOfRestro.filter((restro) => restro.info.avgRating > 4)

                        console.log('filtered restro from BODY ..' , filter)
                        //topRatedRestro Filter
                        setfilteredRestroList(filter)
                    }}>Top Rated Restaurants</button>
                </div>

                <br />

            </div>
            <div className="flex flex-wrap px-20 ">

                {/* rendering restros from filteredRestroList so that the list can be filtered acc to serach input */}
                {
                    filteredRestroList.map((val, ind) =>
                        <Link to={`/restraunts/${val.info.id}?name=vandana`} key={val.info.id} >
                            <RestroCard restroData={val} setlistOfRestro={setlistOfRestro} listOfRestro={listOfRestro} />
                        </Link>)
                }

            </div>
        </div>
    )
}

export default Body
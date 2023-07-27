import RestroCard from "./RestroCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import {SWIGGY_RESTRO_API} from "./utils/constants"


const Body = () => {

    //state variable => super powerfull react variable
    const [listOfRestro, setlistOfRestro] = useState([])

    const [filteredRestroList, setfilteredRestroList] = useState([])

    const [searchText, setsearchText] = useState("")

    useEffect(() => {

        fetchData()

    }, [])

    let isSearchClicked = false


    const fetchData = async () => {

        const response = await fetch(SWIGGY_RESTRO_API)

        const { data } = await response.json()

        console.log(data)

        const restaurants = data?.success?.cards?.[5]?.gridWidget?.gridElements?.infoWithStyle?.restaurants

        console.log("restro list is here", restaurants)

        setlistOfRestro(restaurants)

        //filteredRestroList => copy of listOfRestro 
        setfilteredRestroList(restaurants)

        intactRestroFromApi = restaurants
    }

  


    const handleSerachOnClick = () => {

        //filtering from listOfRestro so that after filtering once user can again change the search input and get the result from listOfRestro 
        const filterRestro = listOfRestro.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setfilteredRestroList(filterRestro)
        isSearchClicked = true
        console.log('from obclick', isSearchClicked)
    }

    const handleSerachOnChange = (e) => {
        console.log('from onachenge brfoe', isSearchClicked)
        console.log('hoo')
        setsearchText(e.target.value)
    }

    return (listOfRestro?.length === 0 ? <Shimmer /> :
        <div className="body">
            {/* <div>
                <input placeholder="write restro name" onChange={inputHandler} value={input} />
            </div> */}
            <div className="filter">
                <div className="search">
                    <input type="text" className="input" value={searchText} onChange={handleSerachOnChange} />
                    <button onClick={handleSerachOnClick}>search</button>
                </div>
                <button className="filter_btn" onClick={() => {
                    // listOfRestro = listOfRestro.filter((restro) =>
                    //     restro.info.avgRating > 4
                    // )
                    // console.log(listOfRestro)
                    //data is filtered but the UI does not update why ? ideally the the UI should show THeobroma only

                    const filter = listOfRestro.filter((restro) => restro.info.avgRating > 4)

                    setlistOfRestro(filter)
                }}>Top Rated Restaurants</button>
                <br />

            </div>
            <div className="restro_container">

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
import RestroCard from "./RestroCard"
import restroList from "./utils/mockData"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"


const Body = () => {

    //state variable => super powerfull react variable
    const [listOfRestro, setlistOfRestro] = useState([])

    const [filteredRestroList, setfilteredRestroList] = useState([])

    const [input, setinput] = useState("")

    const [searchText, setsearchText] = useState("")

    useEffect(() => {

        fetchData()

    }, [])

    let isSearchClicked = false

    let intactRestroFromApi;

    const fetchData = async () => {

        const response = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.7040592&lng=77.10249019999999")

        const { data } = await response.json()

        console.log(data)

        const restaurants = data?.success?.cards?.[5]?.gridWidget?.gridElements?.infoWithStyle?.restaurants

        console.log(restaurants)

        setlistOfRestro(restaurants)

        //filteredRestroList => copy of listOfRestro 
        setfilteredRestroList(restaurants)

        intactRestroFromApi = restaurants
    }

    //normal JS variable
    let listOfRestroJs = [
        {
            "info": {
                "id": "444780",
                "name": "Theobroma",
                "cloudinaryImageId": "egg7tpiijieiows8e6xj",
                "costForTwo": "₹850 for two",
                "cuisines": [
                    "Bakery",
                    "Desserts"
                ],
                "avgRating": 4.5,
                "sla": {
                    "deliveryTime": 27,
                },
            },
        },

        {
            "info": {
                "id": "444781",
                "name": "Dominos",
                "cloudinaryImageId": "egg7tpiijieiows8e6xj",
                "costForTwo": "₹850 for two",
                "cuisines": [
                    "Bakery",
                    "Desserts"
                ],
                "avgRating": 3.8,
                "sla": {
                    "deliveryTime": 27,
                },
            },
        }
    ]

    // const inputHandler = (e) => {
    //     setinput(e.target.value)
    //     const filter = listOfRestro.filter((val) => val.info.name.toLocaleLowerCase().includes(input))
    //     setlistOfRestro(filter)
    // }

    // if(listOfRestro.length === 0 ){
    //     return <Shimmer/>
    // }


    const handleSerachOnClick = () => {

        //filtering from listOfRestro so that after filtering once user can again change the search input and get the result from listOfRestro 
        const filterRestro = listOfRestro.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setfilteredRestroList(filterRestro)
        isSearchClicked = true
        console.log('from obclick', isSearchClicked)
    }

    const handleSerachOnChange = (e) => {
        console.log('from onachenge brfoe', isSearchClicked)
        // if(isSearchClicked){
        //     console.log('from onachenge' , isSearchClicked)
        //     setlistOfRestro(intactRestroFromApi)
        // }
        console.log('hoo')
        setsearchText(e.target.value)
    }

    return (listOfRestro.length === 0 ? <Shimmer /> :
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
                {filteredRestroList.map((val, ind) => <RestroCard restroData={val} key={ind} setlistOfRestro={setlistOfRestro} listOfRestro={listOfRestro} ind={ind} />)}

            </div>
        </div>
    )
}

export default Body
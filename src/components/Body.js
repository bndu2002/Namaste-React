import RestroCard from "./RestroCard"
import restroList from "./utils/mockData"


const Body = () => {
    console.log("this is ==>", restroList[0])
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restro_container">
                {restroList.map(val => <RestroCard restroData={val} key={val.info.id} />)}
            </div>
        </div>
    )
}

export default Body
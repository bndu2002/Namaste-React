import { CLOUDINARY_URL } from "./utils/constants"

const RestroCard = ({ restroData , setlistOfRestro , listOfRestro ,ind}) => {

    const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } = restroData?.info //optional chaining

    // const deleteCARD = ()=>{
    //     const filter = listOfRestro.filter( (val,index ) => ind != index ) 
    //     setlistOfRestro(filter)
    //     console.log(ind)
    // }
    return (
        <div className="restro_card">
            {/* <h1 onClick={deleteCARD}>🍃</h1> */}
            <img className="foodImg" src={CLOUDINARY_URL + cloudinaryImageId} alt="foodImg" />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} min</h4>
        </div>
    )
}


export default RestroCard
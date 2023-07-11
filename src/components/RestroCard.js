import { CLOUDINARY_URL } from "./utils/constants"

const RestroCard = ({ restroData }) => {

    const { name, cuisines, avgRatingString, costForTwo, sla, cloudinaryImageId } = restroData?.info //optional chaining

    return (
        <div className="restro_card">
            <img className="foodImg" src={CLOUDINARY_URL + cloudinaryImageId} alt="foodImg" />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} min</h4>
        </div>
    )
}


export default RestroCard
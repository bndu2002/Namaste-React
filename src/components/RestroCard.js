import { CLOUDINARY_URL } from "./utils/constants"

const RestroCard = ({ restroData }) => {

    const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } = restroData?.info //optional chaining


    return (
        <div className="m-4 p-4 w-[250px] h-[400px] rounded-lg bg-gray-200 hover:bg-gray-400">
            <img className="rounded-lg" src={CLOUDINARY_URL + cloudinaryImageId} alt="foodImg" />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4 className="break-all">{cuisines.join(",")}-</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} min</h4>
        </div>
    )
}

// Higher Order Compo => function taking compo as input and returns new compo, enhancer
export const withPromotedLabel = (Bandu) => {
    //returns RestroCardPromoted
    return ({restroData}) => {
        //console.log('restroData from higher order compo ' , restroData)
        return <>
            <label className="absolute bg-black text-white rounded-md m-2 p-1">Promoted</label>
            <Bandu restroData = {restroData}/>
        </>
    }
}


export default RestroCard
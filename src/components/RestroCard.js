import { CLOUDINARY_URL } from "./utils/constants"

//practiced promise
// const dummyAsync = () => {
//     let functionReturningPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const num = Math.random()

//             if(num > 0.5){
//                 resolve("yes num is more that 20")
//             }else{
//                 reject(new Error('Something went wrong'))
//             }
//         }, 5000)


//     })

//     //functionReturningPromise.then(() => console.log("resolve from .then")).catch(() => console.log("reject from .then"))

//     return functionReturningPromise.then((result)=>console.log(result)).catch((error)=>console.log(error.message))

// }

// dummyAsync()

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


export default RestroCard
import { CLOUDINARY_URL } from "./utils/constants"

const CategoryItemList = (props) => {
    const { itemCards } = props

    console.log("itemCards from CategoryItemList -------- ", itemCards)

    return <>
        <div>
            {itemCards.map(item =>
                //for veg filter => unoptimised
                // if (isVegClicked) {

                //     if (item?.card?.info?.isVeg) {

                //         return <div key={item?.card?.info?.id} className="p-2 m-2  border-black-200 border-b-4 text-left rounded-lg flex justify-between">
                //             <div className="w-9/12">
                //                 <div className="font-semibold py-2">
                //                     <span>{item?.card?.info?.name}</span>
                //                     <span >  -  ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</span>
                //                 </div>
                //                 <p className="text-xs"><span>{item?.card?.info?.description}</span></p>

                //             </div>
                //             <div className="w-3/12 ">
                //                 <div className="absolute bg-white rounded-md mx-8 ">
                //                     <button > Add +</button>
                //                 </div>
                //                 <img src={CLOUDINARY_URL + item?.card?.info?.imageId} alt="food imgage" className="w-28 " />

                //             </div>
                //         </div>
                //     }
                // }
                // else {
                //     return <div key={item?.card?.info?.id} className="p-2 m-2  border-black-200 border-b-4 text-left rounded-lg flex justify-between">
                //         <div className="w-9/12">
                //             <div className="font-semibold py-2">
                //                 <span>{item?.card?.info?.name}</span>
                //                 <span >  -  ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</span>
                //             </div>
                //             <p className="text-xs"><span>{item?.card?.info?.description}</span></p>

                //         </div>
                //         <div className="w-3/12 ">
                //             <div className="absolute bg-white rounded-md mx-8 ">
                //                 <button > Add +</button>
                //             </div>
                //             <img src={CLOUDINARY_URL + item?.card?.info?.imageId} alt="food imgage" className="w-28 " />

                //         </div>
                //     </div>
                // }

                <div key={item?.card?.info?.id} className="p-2 m-2  border-black-200 border-b-4 text-left rounded-lg flex justify-between">
                    <div className="w-9/12">
                        <div className="font-semibold py-2">
                            <span>{item?.card?.info?.name}</span>
                            <span >  -  ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</span>
                        </div>
                        <p className="text-xs"><span>{item?.card?.info?.description}</span></p>

                    </div>
                    <div className="w-3/12 ">
                        <div className="absolute bg-white rounded-md mx-8 ">
                            <button > Add +</button>
                        </div>
                        <img src={CLOUDINARY_URL + item?.card?.info?.imageId} alt="food imgage" className="w-28 " />

                    </div>
                </div>

            )}
        </div>

    </>
}

export default CategoryItemList
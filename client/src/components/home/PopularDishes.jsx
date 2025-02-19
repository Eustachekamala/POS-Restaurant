import { popularDishes } from "../../constants"

function PopularDishes(){
    return(
        <div className="mt-6 pr-4 sm:pr-6">
            <div className="bg-[#1a1a1a] w-full rounded-lg">
                {/** Header Section */}
                <div className="flex justify-between items-center px-4 sm:px-6 py-4">
                <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
                    Popular Dishes
                </h1>
                <a href="#" className="text-[#025cca] text-sm sm:text-base">
                    view all
                </a>
                </div>

                {/** Dishes List */}
                <div className="overflow-y-scroll h-[400px] sm:h-[680px] scrollbar-hide px-4 sm:px-6">
                {popularDishes.map((dish) => (
                    <div
                    key={dish.id}
                    className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-4 sm:px-6 py-4 mt-4 mb-4"
                    >
                    <h1 className="text-[#f5f5f5] font-bold text-xl mr-3 sm:mr-5">
                        {dish.id < 10 ? `0${dish.id}` : dish.id}
                    </h1>
                    <img
                        className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full"
                        src={dish.image}
                        alt={dish.name}
                    />
                    <div>
                        <h1 className="text-[#f5f5f5] font-bold tracking-wide text-sm sm:text-base">
                        {dish.name}
                        </h1>
                        <p className="text-[#f5f5f5] text-xs sm:text-sm font-bold">
                        <span className="text-[#ababab]">Orders: </span>
                        {dish.numberOfOrders}
                        </p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
    )
}


export default PopularDishes
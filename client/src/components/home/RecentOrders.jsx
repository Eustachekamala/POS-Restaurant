import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";

function RecentOrders(){
    return (
        <div className="px-3 md:px-8 mt-6">
            <div className="bg-[#1a1a1a] w-full h-auto sm:h-[450px] rounded-lg">
                {/** Header Section */}
                <div className="flex justify-between items-center px-4 sm:px-6 py-4">
                <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
                    Recent Orders
                </h1>
                <a href="#" className="text-[#025cca] text-sm sm:text-base">
                    view all
                </a>
                </div>

                {/** Search Section */}
                <div className="flex items-center gap-4 bg-[#1f1f1f] px-4 sm:px-6 rounded-[20px] py-3 mx-4 sm:mx-6">
                <FaSearch className="text-[#f5f5f5]" />
                <input
                    type="text"
                    name="search"
                    placeholder="Search recent orders"
                    className="bg-[#1f1f1f] text-[#f5f5f5] outline-none rounded-md flex-1"
                />
                </div>

                {/** Order List Section */}
                <div className="mt-4 px-4 sm:px-6 overflow-y-scroll h-[300px] scrollbar-hide">
                <OrderList />
                </div>
            </div>
        </div>
    )
}

export default RecentOrders;
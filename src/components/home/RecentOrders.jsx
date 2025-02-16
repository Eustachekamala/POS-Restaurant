import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";

function RecentOrders(){
    return (
        <div className="px-8 mt-6">
            <div className="bg-[#1a1a1a] w-full h-[450px] rounded-lg">
                <div className="flex justify-between items-center px-6 py-4">
                    <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">Recent Orders</h1>
                    <a href="#" className="text-[#025cca]">view all</a>
                </div>
                {/**SEARCH */}
                <div className="flex items-center gap-4 bg-[#1f1f1f] px-6 rounded-[20px] py-4 mx-6">
                    <FaSearch className="text-[#f5f5f5]"/>
                    <input type="text" name="search" placeholder="Search recent orders" 
                        className="bg-[#1f1f1f] text-[#f5f5f5] outline-none rounded-md"/>
                </div>
                {/**Order list */}
                <div className="mt-4 px-6 overflow-y-scroll h-[300px] scrollbar-hide">
                    <OrderList/>
                    <OrderList/>
                    <OrderList/>
                    <OrderList/>
                    <OrderList/>
                    <OrderList/>
                    <OrderList/>
                </div>
                
            </div>
        </div>
    )
}

export default RecentOrders;
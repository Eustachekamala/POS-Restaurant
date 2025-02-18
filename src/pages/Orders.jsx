import ButtonNav from "../components/shared/ButtonNav";
import OrderCard from "../components/Orders/OrderCard";
import BackButton from "../components/shared/BackButton";
import { useState } from "react";
import { orders } from "../constants";

function Orders() {
   const [status, setStatus] = useState("all");

    const filteredOrders = orders.filter((order) => {
        if (status === "all") return true;
        if (status === "progress") return order.status === "progress"; // Exact match for "In Progress"
        if (status === "ready") return order.status === "ready"; // Exact match for "Ready"
        if (status === "completed") return order.status === "completed"; // Exact match for "Completed"
        return false; // Default case if none of the above
    });

    return (
        <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
            <div className="flex sm:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-4 mt-2 gap-4 sm:gap-0">
                <div className="flex items-center gap-4">
                    <BackButton />
                    <h1 className="text-[#f5f5f5] font-bold text-2xl">Orders</h1>
                </div>
                <div className="flex items-center justify-around gap-1">
                    <button
                        onClick={() => setStatus("all")}
                        className={`text-[#ababab] text-sm md:text-lg rounded-lg px-5 py-2 ${status === "all" && "bg-[#383838] rounded-lg px-5 py-2"} font-semibold tracking-wide`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setStatus("progress")}
                        className={`text-[#ababab] text-sm md:text-lgrounded-lg px-5 py-2 ${status === "progress" && "bg-[#383838] rounded-lg px-5 py-2"} font-semibold tracking-wide`}
                    >
                        In Progress
                    </button>
                    <button
                        onClick={() => setStatus("ready")}
                        className={`text-[#ababab] text-sm md:text-lgrounded-lg px-5 py-2 ${status === "ready" && "bg-[#383838] rounded-lg px-5 py-2"} font-semibold tracking-wide`}
                    >
                        Ready
                    </button>
                    <button
                        onClick={() => setStatus("completed")}
                        className={`text-[#ababab] text-lg rounded-lg px-5 py-2 ${status === "completed" && "bg-[#383838] rounded-lg px-5 py-2"} font-semibold tracking-wide`}
                    >
                        Completed
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 lg:p-10 overflow-auto scrollbar-hide h-[calc(100vh-10rem)] sm:h-[700px]">
                {
                    filteredOrders.map((order) => {
                        return <OrderCard key={order.id} order={order} />;
                    })
                }
                </div>
            <ButtonNav />
        </section>
    );
}

export default Orders;

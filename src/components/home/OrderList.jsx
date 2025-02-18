import { FaCheckDouble, FaCircle, FaClock } from "react-icons/fa";
import { orders } from "../../constants";

function OrderList() {
    return (
        <>
            {orders.map((order) => {
                const isReady = order.status === "Ready";
                return (
                    <div key={order.id} className="flex items-center justify-between gap-5 mb-3">
                        {/* Left Section */}
                        <div className="flex items-center gap-4 flex-1">
                            <button className="bg-[#f6b100] p-4 text-xl font-bold rounded-lg">
                                {order.initial}
                            </button>
                            <div className="flex flex-col items-start gap-2">
                                <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
                                    {order.customer}
                                </h1>
                                <p className="text-[#ababab] text-sm">{order.items} Items</p>
                            </div>
                        </div>

                        {/* Middle Section */}
                        <div className="flex-1 flex items-center justify-center">
                            <h1 className="text-[#f6b100] font-bold border border-[#f6b100] rounded-lg p-1">
                                Table No: {order.tableNo}
                            </h1>
                        </div>

                        {/* Right Section */}
                        <div className="flex-1 flex flex-col items-end gap-2">
                            <p
                                className={`px-2 py-1 rounded-lg ${
                                    isReady
                                        ? "text-green-600 bg-[#2e4a40]"
                                        : "text-yellow-500 bg-[#4a3e2e]"
                                }`}
                            >
                                {isReady ? (
                                    <FaCheckDouble className="inline mr-2" />
                                ) : (
                                    <FaClock className="inline mr-2" />
                                )}
                                {order.status}
                            </p>
                            <p className="text-[#ababab] text-sm">
                                <FaCircle
                                    className={`inline m-2 ${
                                        isReady ? "text-green-600" : "text-yellow-500"
                                    }`}
                                />
                                {isReady ? "Ready to serve" : "In Progress"}
                            </p>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default OrderList;
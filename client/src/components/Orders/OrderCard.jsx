import { FaCheckDouble, FaCircle, FaClock } from "react-icons/fa";
import { orders } from "../../constants";

function OrderCard() {
    return (
        <>
            {orders.map((order) => {
                const isReady = order.status === "ready";
                return (
                    <div key={order.id} className="w-[500px] bg-[#262626] p-4 rounded-lg mb-2">
                        <div className="flex items-center gap-5">
                            <button className="bg-[#f6b100] p-4 text-xl font-bold rounded-lg">
                                {order.initial}
                            </button>
                            <div className="flex items-center justify-between w-[100%]">
                                <div className="flex flex-col items-start gap-2">
                                    <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
                                        {order.customer}
                                    </h1>
                                    <p className="text-[#ababab] text-sm">
                                        #{order.id} / Dine in
                                    </p>
                                </div>
                                <div className="flex flex-col items-end gap-2">
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
                        </div>
                        <div className="flex justify-between items-center mt-4 text-[#ababab]">
                            <p>{order.dateTime}</p>
                            <p>{order.items} items</p>
                        </div>
                        <hr className="text-[#f5f5f5] w-full mt-4 border-gray-500" />
                        <div className="flex items-center justify-between mt-4">
                            <h1 className="text-[#f5f5f5] text-lg font-semibold">Total</h1>
                            <p className="text-[#f5f5f5] text-lg font-semibold">
                                KES {order.total.toFixed(2)}
                            </p>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default OrderCard;
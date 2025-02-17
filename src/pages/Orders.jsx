import ButtonNav from "../components/shared/ButtonNav";
import OrderCard from "../components/Orders/OrderCard";
import BackButton from "../components/shared/BackButton";
import { useState } from "react";

function Orders(){
    const [status, setStatus] = useState("all");

    return(
        <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
            <div className="flex items-center justify-between px-10 py-4 mt-2">
                <div className="flex items-center gap-4">
                    <BackButton/>
                    <h1 className="text-[#f5f5f5] font-bold text-2xl">Orders</h1>
                </div>
                <div className="flex items-center justify-around gap-4">
                    <button onClick={() => setStatus("all")} className={`text-[#ababab] text-lg rounded-lg px-5 py-2 ${status === "all" && "bg-[#383838] rounded-lg px-5 py-2"} font-semibold tracking-wide`}>All</button>
                    <button onClick={() => setStatus("progress")} className={`text-[#ababab] text-lg rounded-lg px-5 py-2 ${status === "progress" && "bg-[#383838] rounded-lg px-5 py-2"} font-semibold tracking-wide`}>In Progess</button>
                    <button onClick={() => setStatus("ready")} className={`text-[#ababab] text-lg rounded-lg px-5 py-2 ${status === "ready" && "bg-[#383838] rounded-lg px-5 py-2"} font-semibold tracking-wide`}>Ready</button>
                    <button onClick={() => setStatus("completed")} className={`text-[#ababab] text-lg rounded-lg px-5 py-2 ${status === "completed" && "bg-[#383838] rounded-lg px-5 py-2"} font-semibold tracking-wide`}>Completed</button>
                </div>
            </div>
            <div className="flex flex-wrap px-14 items-center justify-center gap-6 py-4 overflow-scroll scrollbar-hide h-[calc(100vh-5rem-5rem)]">
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
            </div>
            <ButtonNav/>
        </section>
    )
}

export default Orders;
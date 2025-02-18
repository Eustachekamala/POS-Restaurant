import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../../utils";

function Greetings(){
    const [dateTime, setDateTime] = useState(new Date());
    const customerData = useSelector(state => state.customer);
    
    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, [])

    const formatTime = (date) =>
        `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}
        :${String(date.getSeconds()).padStart(2, '0')}`;

    return(
        <div className="flex justify-between items-center px-8 mt-5">
            <div>
                <h1 className="text-[#f5f5f5] text-2xl font-semibold">Good Morning, {customerData.customerName}</h1>
                <p className="text-[#ababab] text-sm">Give your best services for customers </p>
            </div>
            <div className="">
                <h1 className="text-[#f5f5f5] text-3xl font-bold tracking-wide">{formatTime(dateTime)}</h1>
                <p className="text-[#ababab] text-sm">{formatDate(dateTime)}</p>
            </div>
        </div>
    )
}

export default Greetings;
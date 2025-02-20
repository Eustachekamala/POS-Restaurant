import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../../utils";

function Greetings(){
    const [dateTime, setDateTime] = useState(new Date());
    // const customerData = useSelector(state => state.customer);
    const userData = useSelector(state => state.user);
    
    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, [])

    const formatTime = (date) =>
        `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}
        :${String(date.getSeconds()).padStart(2, '0')}`;

    return(
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 mt-5 gap-4 sm:gap-0">
            {/** Left Section */}
            <div className="w-full sm:w-auto text-center sm:text-left">
                <h1 className="text-[#f5f5f5] text-lg sm:text-2xl font-semibold">
                    Good Morning, {userData.name || "Test User"}
                </h1>
                <p className="text-[#ababab] text-xs sm:text-sm">
                    Give your best services for customers
                </p>
            </div>

            {/** Right Section */}
            <div className="w-full sm:w-auto text-center sm:text-right">
                <h1 className="text-[#f5f5f5] text-lg sm:text-3xl font-bold tracking-wide">
                    {formatTime(dateTime)}
                </h1>
                <p className="text-[#ababab] text-xs sm:text-sm">
                    {formatDate(dateTime)}
                </p>
            </div>
        </div>
    )
}

export default Greetings;
import { useSelector } from "react-redux";
import { formatDate, getAvatarName } from "../../utils";
import { useState } from "react";

const CustomerInfo = () => {
  const customerData = useSelector(state => state.customer);
  const [dateTime, setDateTime] = useState(new Date());

  return (
    <div className="flex items-center justify-between px-4 py-3">
        <div className="flex flex-col items-start">
            <h1 className="text-[#f5f5f5] text-md font-semibold tracking-wide">{customerData.customerName || "Customer Name"}</h1>
            <p className="text-[#ababab] text-xs font-medium mt-1">#{customerData.orderId || "N/A"}/-Dine in</p>
            <p className="text-[#ababab] text-xs font-medium mt-2">{formatDate(dateTime)}</p>
        </div>
        <button className="bg-[#F6B100] p-3 text-xl font-bold rounded-lg">{getAvatarName(customerData.customerName || "Customer Name")}</button>
    </div>
  )
}

export default CustomerInfo

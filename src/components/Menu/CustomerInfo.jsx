const CustomerInfo = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3">
        <div className="flex flex-col items-start">
            <h1 className="text-[#f5f5f5] text-md font-semibold tracking-wide">Customer Name</h1>
            <p className="text-[#ababab] text-xs font-medium mt-1">#101/Dine in</p>
            <p className="text-[#ababab] text-xs font-medium mt-2">February 18, 2025 05:35 AM</p>
        </div>
        <button className="bg-[#F6B100] p-3 text-xl font-bold rounded-lg">CN</button>
    </div>
  )
}

export default CustomerInfo

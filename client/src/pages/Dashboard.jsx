import { MdCategory, MdTableBar } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";
import Metrics from "../components/dashboard/Metrics";
import RecentOrders from "../components/dashboard/RecentOrders";
import { useState } from "react";
import Modal from "../components/dashboard/Modal";

const buttons = [
  { label: "Add Table", icon: <MdTableBar />, action: "table" },
  { label: "Add Category", icon: <MdCategory />, action: "category" },
  { label: "Add Dishes", icon: <BiSolidDish />, action: "dishes" },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Metrics");
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);

  const handleOpenModal = (action) => {
    if(action === "table") setIsTableModalOpen(true);
  };

  const tabs = ["Metrics", "Orders", "Payment"];

  return (
    <div className="bg-[#1f1f1f] min-h-[calc(100vh-4.5rem)]">
      {/* Header Section */}
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-8 px-4 sm:px-6 md:px-8 lg:px-12 gap-4">
        {/* Buttons Section */}
        <div className="flex flex-wrap gap-3">
          {buttons.map(({ label, icon, action }) => (
            <button
              key={action}
              className="bg-[#1a1a1a] hover:bg-[#262626] px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-[#f5f5f5] font-semibold text-sm sm:text-md flex items-center gap-2"
              onClick={() => handleOpenModal(action)}
            >
              {label} {icon}
            </button>
          ))}
        </div>

        {/* Tabs Section */}
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-[#f5f5f5] font-semibold text-sm sm:text-md flex items-center gap-2 ${
                activeTab === tab
                  ? "bg-[#262626]"
                  : "bg-[#1a1a1a] hover:bg-[#262626]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {activeTab === "Metrics" && <Metrics />}
        {activeTab === "Orders" && <RecentOrders />}

        {isTableModalOpen && <Modal setIsTableModalOpen={setIsTableModalOpen}/>}
      </div>
    </div>
  );
};

export default Dashboard;
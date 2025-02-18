import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";

function ButtonNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsButtonActive(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsButtonActive(false); 
  };

  const handleCreateOrder = () => {
    navigate("/tables");
    closeModal();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 flex gap-3 h-16 justify-around">
      <button
        onClick={() => navigate("/")}
        className={`flex items-center justify-center text-[#ababab] ${
          isActive("/") ? "bg-[#F6B100] text-[#f5f5f5]" : "bg-[#343434]"
        } w-[200px] rounded-[20px]`}
      >
        <FaHome className="inline mr-3" size={24} />
        <p>Home</p>
      </button>
      <button
        onClick={() => navigate("/orders")}
        className={`flex items-center justify-center text-[#ababab] ${
          isActive("/orders") ? "bg-[#F6B100] text-[#f5f5f5]" : "bg-[#343434]"
        } w-[200px] rounded-[20px]`}
      >
        <MdOutlineReorder className="inline mr-3" size={24} />
        <p>Orders</p>
      </button>
      <button
        onClick={() => navigate("/tables")}
        className={`flex items-center justify-center text-[#ababab] ${
          isActive("/tables") ? "bg-[#F6B100] text-[#f5f5f5]" : "bg-[#343434]"
        } w-[200px] rounded-[20px]`}
      >
        <MdTableBar className="inline mr-3" size={24} />
        <p>Tables</p>
      </button>
      <button
        onClick={() => navigate("/more")}
        className={`flex items-center justify-center text-[#ababab] ${
          isActive("/more") ? "bg-[#F6B100] text-[#f5f5f5]" : "bg-[#343434]"
        } w-[200px] rounded-[20px]`}
      >
        <CiCircleMore className="inline mr-3" size={24} />
        <p>More</p>
      </button>
      <button
        disabled={isActive("/tables") || isActive("/menu")}
        onClick={openModal}
        className={`absolute bottom-6 ${
          isButtonActive ? "bg-blue-500" : "bg-[#F6B100]"
        } rounded-full p-4 text-[#f5f5f5] h-16 w-16 flex items-center justify-center`}
      >
        <BiSolidDish size={30} />
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
        <div className="flex flex-col gap-6">
          <div>
            <label className="block text-[#ababab] mb-2 text-sm font-medium">Customer Name</label>
            <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
              <input
                type="text"
                placeholder="Enter customer name"
                className="bg-transparent placeholder:opacity-75 flex-1 text-white focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-[#ababab] mb-2 text-sm font-medium">Customer Phone</label>
            <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
              <input
                type="number"
                placeholder="(+254)-7000100911"
                className="bg-transparent placeholder:opacity-75 flex-1 text-white focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-[#ababab] mb-2 text-sm font-medium">Guests</label>
            <div className="flex items-center justify-between rounded-lg p-3 px-4 bg-[#1f1f1f]">
              <button
                onClick={() => setGuestCount((prevCount) => Math.max(prevCount - 1, 0))}
                className="text-yellow-500 text-2xl"
              >
                &minus;
              </button>
              <span className="text-white">{guestCount}</span>
              <button
                onClick={() => setGuestCount(guestCount + 1)}
                className="text-yellow-500 text-2xl"
              >
                &#43;
              </button>
            </div>
          </div>
          <button
            onClick={handleCreateOrder}
            className="w-full bg-[#F6B100] text-[#f5f5f5] rounded-lg py-3 mt-3 hover:bg-yellow-700"
          >
            Create Order
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default ButtonNav;
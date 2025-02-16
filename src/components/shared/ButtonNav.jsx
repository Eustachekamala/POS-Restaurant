import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";

function ButtonNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 flex gap-3 h-16 justify-around">
        <button className="flex items-center justify-center text-[#ababab] bg-[#343434] w-[200px] rounded-[20px] "><FaHome className="inline mr-3" size={24}/><p>Home</p></button>
        <button className="flex items-center justify-center text-[#ababab] bg-[#343434] w-[200px] rounded-[20px] "><MdOutlineReorder className="inline mr-3" size={24}/><p>Orders</p></button>
        <button className="flex items-center justify-center text-[#ababab] bg-[#343434] w-[200px] rounded-[20px] "><MdTableBar className="inline mr-3" size={24}/><p>Tables</p></button>
        <button className="flex items-center justify-center text-[#ababab] bg-[#343434] w-[200px] rounded-[20px] "><CiCircleMore className="inline mr-3" size={24}/><p>More</p></button>
        <button className="absolute bottom-6 bg-[#F6B100] rounded-full p-3 text-[#f5f5f5] items-center"> <BiSolidDish size={24}/></button>
    </div>
  );
}

export default ButtonNav;
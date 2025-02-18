import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

function Header() {
    return (
        <header className="flex sm:flex-row justify-between items-center py-4 px-4 sm:px-8 bg-[#1a1a1a] gap-4 sm:gap-0">
        {/** LOGO and Name Section */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
            <img src="logo.png" className="h-8 w-8 white-logo" alt="Logo" />
            <h1 className="text-lg font-semibold text-[#f5f5f5]">Pos-Resto</h1>
        </div>

        {/** Search Section */}
        <div className="flex items-center gap-4 bg-[#1f1f1f] px-4 sm:px-5 rounded-[20px] py-2 w-full sm:w-[500px]">
            <FaSearch className="text-[#f5f5f5]" />
            <input
            type="text"
            name="search"
            placeholder="Search..."
            className="bg-[#1f1f1f] text-[#f5f5f5] outline-none rounded-md w-full"
            />
        </div>

        {/** Logged User Details Section */}
        <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
            <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
            <FaBell className="text-[#f5f5f5]" />
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
            <FaUserCircle className="text-[#f5f5f5] text-3xl sm:text-4xl" />
            <div className="flex flex-col items-start">
                <h1 className="text-sm sm:text-md text-[#f5f5f5] font-semibold">Eustache Dev</h1>
                <p className="text-xs text-[#ababab] font-medium">Admin</p>
            </div>
            </div>
        </div>
    </header>
    );
}

export default Header;
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { IoLogOut } from "react-icons/io5"
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../https/api";
import { enqueueSnackbar } from "notistack";
import { removeUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

function Header() {

    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutMutation = useMutation({
    mutationFn: () => logout(), // Call the logout API
    onSuccess: (data) => {
        console.log(data); // Log the response data for debugging
        enqueueSnackbar("Logout successful!", { variant: "success" }); // Show success message
        dispatch(removeUser()); // Remove user from Redux store
        navigate("/auth"); // Redirect to the auth page
    },
    onError: (error) => {
        console.log(error); // Log the error for debugging
        // Show error message if response exists
        if (error.response && error.response.data) {
            enqueueSnackbar(error.response.data.message, { variant: "error" });
        } else {
            enqueueSnackbar("An error occurred during logout.", { variant: "error" });
        }
    }
});

    const handleLogout = () => {
        logoutMutation.mutate();
    }

    return (
        <>
            {/** Desktop Header */}
            <header className="hidden sm:flex justify-between items-center py-4 px-4 sm:px-8 bg-[#1a1a1a]">
                {/** LOGO */}
                <div className="flex items-center gap-2">
                    <img src="logo.png" className="h-8 w-8 white-logo" alt="Logo" />
                    <h1 className="text-lg font-semibold text-[#f5f5f5]">Pos-Resto</h1>
                </div>

                {/** SEARCH */}
                <div className="flex items-center gap-4 bg-[#1f1f1f] px-5 rounded-[20px] py-2 w-full sm:w-[500px]">
                    <FaSearch className="text-[#f5f5f5]" />
                    <input
                        type="text"
                        name="search"
                        placeholder="Search..."
                        className="bg-[#1f1f1f] text-[#f5f5f5] outline-none rounded-md w-full"
                    />
                </div>

                {/** LOGGED USER DETAILS */}
                <div className="flex items-center gap-4">
                    <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
                        <FaBell className="text-[#f5f5f5]" />
                    </div>
                    <div className="flex items-center gap-3 cursor-pointer">
                        <FaUserCircle className="text-[#f5f5f5] text-4xl" />
                        <div className="flex flex-col items-start">
                            <h1 className="text-md text-[#f5f5f5] font-semibold">{userData.name || "Test User"}</h1>
                            <p className="text-xs text-[#ababab] font-medium">{userData.role || "Role"}</p>
                        </div>
                        <IoLogOut onClick={handleLogout} className="text-[#f5f5f5]" size={40}/>
                    </div>
                </div>
            </header>

            {/** Mobile Header */}
            <header className="sm:hidden flex flex-col justify-between items-center py-4 px-4 bg-[#1a1a1a] gap-4">
                {/** LOGO and User Details Section */}
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <img src="logo.png" className="h-8 w-8 white-logo" alt="Logo" />
                        <h1 className="text-lg font-semibold text-[#f5f5f5]">Pos-Resto</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
                            <FaBell className="text-[#f5f5f5]" />
                        </div>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <FaUserCircle className="text-[#f5f5f5] text-3xl" />
                            <div className="flex flex-col items-start">
                                <h1 className="text-sm text-[#f5f5f5] font-semibold">Eustache Dev</h1>
                                <p className="text-xs text-[#ababab] font-medium">Admin</p>
                            </div>
                            <IoLogOut onClick={handleLogout} className="text-[#f5f5f5]" size={22}/>
                        </div>
                    </div>
                </div>

                {/** SEARCH */}
                <div className="flex items-center gap-4 bg-[#1f1f1f] px-4 py-2 rounded-[20px] w-full">
                    <FaSearch className="text-[#f5f5f5]" />
                    <input
                        type="text"
                        name="search"
                        placeholder="Search..."
                        className="bg-[#1f1f1f] text-[#f5f5f5] outline-none rounded-md w-full"
                    />
                </div>
            </header>
        </>
    );
}

export default Header;
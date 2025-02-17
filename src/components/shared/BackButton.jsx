import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function BackButton(){
    const navigate = useNavigate();

    return(
        <button onClick={() => navigate(-1)} className="bg-[#025cca] p-3 text-xl text-[#f5f5f5] font-bold rounded-full"> <IoArrowBackOutline/></button>
    )
}
export default BackButton
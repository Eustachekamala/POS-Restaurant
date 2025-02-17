import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const TableCard = ({name, seats, initials, status, color, key}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if(status === "Booked") return;
    navigate(`/menu`);
  }

  return (
    <div onClick={handleClick} key={key} className="w-[300px] bg-[#262626] rounded-lg p-4 cursor-pointer hover:bg-[#1f1f1f]">
        <div className="flex items-center justify-between px-1">
            <h1 className="text-[#f5f5f5] text-xl font-semibold">{name}</h1>
            <p className={`${status === "Booked" ? "text-green-600 bg-[#3d7e679f]" : "text-white bg-[#8e6b14be]"} px-2 py-1 rounded-lg`}>{status}</p>
        </div>
        <div className="flex items-center justify-center mt-5 mb-7">
            <h1 className="text-white text-xl rounded-full h-16 w-16 flex items-center justify-center" style={{backgroundColor : color}}>{initials}</h1>
        </div>
        <p className='text-[#abab] text-sm font-semibold'>{seats}<span> Seats</span></p>
    </div>
  )
}

TableCard.propTypes = {
    name : PropTypes.string,
    seats : PropTypes.number,
    initials : PropTypes.string,
     status: PropTypes.string,
    color: PropTypes.string,
    key: PropTypes.number
}

export default TableCard

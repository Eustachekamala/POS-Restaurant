import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { getBgColor } from '../../utils';
import { useDispatch } from 'react-redux';
import { updateTable } from '../../redux/slices/customerSlice';

const TableCard = ({name, seats, initials, status}) => {
  const navigate = useNavigate();
  const disptch = useDispatch();

  const handleClick = (name) => {
    if(status === "Booked") return;
    disptch(updateTable({tableNo : name}))
    navigate(`/menu`);
  }

  return (
    <div
    onClick={() => handleClick(name)}
    className="w-full sm:w-[300px] bg-[#262626] rounded-lg p-4 cursor-pointer hover:bg-[#1f1f1f] hover:border-gray-400 hover:shadow-lg"
    >
        <div className="flex items-center justify-between px-1">
            <h1 className="text-[#f5f5f5] text-xl font-semibold">{name}</h1>
            <p
                className={`${
                    status === "Booked"
                        ? "text-green-600 bg-[#3d7e679f]"
                        : "text-white bg-[#8e6b14be]"
                } px-2 py-1 rounded-lg`}
            >
                {status}
            </p>
        </div>
        <div className="flex items-center justify-center mt-5 mb-7">
            <h1
                className="text-white text-xl rounded-full h-16 w-16 flex items-center justify-center"
                style={{ backgroundColor: getBgColor() }}
            >
                {initials}
            </h1>
        </div>
        <p className="text-[#abab] text-sm font-semibold">
            Seats: <span className="text-[#f5f5f5]">{seats}</span>
        </p>
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

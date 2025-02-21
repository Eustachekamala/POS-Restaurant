import { easeOut, motion } from "framer-motion"
import { IoMdClose } from "react-icons/io"
import PropTypes from "prop-types";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addTable } from "../../https/api";
import {enqueueSnackbar} from "notistack";

const Modal = ({setIsTableModalOpen}) => {
    const [tableData, setTableData] = useState({
        tableNo : "",
        seats : ""
    });

    const handleInputChange = (e) => {
        const {name, value } = e.target;
        setTableData((prev) => ({...prev, [name] : value}));
    }

    const haandleSubmit = (e) => {
        e.preventDefault();
        console.log(tableData)
        tableMutation.mutate(tableData);
    }

    const handleCloseModal = () => {
        setIsTableModalOpen(false)
    }

    const tableMutation  = useMutation({
        mutationFn : (reqData) => addTable(reqData),
        onSuccess: (res) => {
            setIsTableModalOpen(false);
            const { data } = res
            enqueueSnackbar(data.message, { variant: "success"});
        },
        onError: (error) => {
            const { data } = error.response
            enqueueSnackbar(data.message, { variant: "error"});
        }
    });
    
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{opacity:0, scale:0.9}}
        animate= {{opacity:1, scale:1}}
        exit={{opacity:0 , scale:0.9}}
        transition={{duration:0.3, ease:easeOut}}
        className="bg-[#262626] p-6 rounded-lg shadow-lg w-96"
      >
        {/** Modal  Header*/}
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#f5f5f5] text-xl font-semibold"> Add Table</h2>
            <button onClick={handleCloseModal} className="text-[#f5f5f5] hover:text-red-500">
                <IoMdClose size={24}/>
            </button>
        </div>

        {/** Modal Body */}
        <form onSubmit={haandleSubmit} className="space-y-4 mt-10">
             <div>
                <label className="block text-[#ababab] mt-3 mb-2 text-sm font-medium">
                    Table Number
                </label>
                <div className="flex item-center rounded-lg p-4 px-4 bg-[#1f1f1f]">
                    <input onChange={handleInputChange} value={tableData.tableNo} type="number" className="bg-transparent flex-1 h-full text-white focus:outline-none"
                        required = "required" name="tableNo" />
                </div>
            </div>
            <div>
                <label className="block text-[#ababab] mt-3 mb-2 text-sm font-medium">
                    Number of Seats
                </label>
                <div className="flex item-center rounded-lg p-4 px-4 bg-[#1f1f1f]">
                    <input onChange={handleInputChange} value={tableData.seats} type="number" className="bg-transparent h-full flex-1 text-white focus:outline-none"
                        required = "required" name="seats" />
                </div>
            </div>
            <button type="submit" className="w-full rounded-lg mt-8 py-3 text-lg bg-yellow-400 text-gray-900 font-bold">
                Add Table
            </button>
        </form>
      </motion.div>
    </div>
  )
}

Modal.propTypes = {
    setIsTableModalOpen : PropTypes.bool
}

export default Modal

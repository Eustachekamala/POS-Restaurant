import ButtonNav from "../components/shared/ButtonNav";
import BackButton from "../components/shared/BackButton";
import { useState } from "react";
import TableCard from "../components/tables/TableCard";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getTables } from "../https/api";
import { enqueueSnackbar } from "notistack";

function Tables(){
    const [status, setStatus] = useState("all")

    const { data: resData, isError } = useQuery({
            queryKey: ["tables"],
            queryFn: async () => {
                return await getTables();
            },
            placeholderData: keepPreviousData
    })

    if(isError){
        enqueueSnackbar("Something went wrong!", { variant: "error"});
    }
    
    return(
        <section className="bg-[#1f1f1f] md:h-[calc(100vh-5rem)] overflow-hidden">
            <div className="flex sm:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-4 mt-2 gap-4 sm:gap-0">
                <div className="flex items-center gap-4">
                    <BackButton />
                    <h1 className="text-[#f5f5f5] font-bold text-xl sm:text-2xl">Tables</h1>
                </div>
                <div className="flex items-center justify-around gap-4">
                    <button
                        onClick={() => setStatus("all")}
                        className={`text-[#ababab] text-base sm:text-lg rounded-lg px-3 sm:px-5 py-1 sm:py-2 ${
                            status === "all" && "bg-[#383838]"
                        } font-semibold tracking-wide`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setStatus("booked")}
                        className={`text-[#ababab] text-base sm:text-lg rounded-lg px-3 sm:px-5 py-1 sm:py-2 ${
                            status === "booked" && "bg-[#383838]"
                        } font-semibold tracking-wide`}
                    >
                        Booked
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 lg:p-10 overflow-auto scrollbar-hide h-[calc(100vh-10rem)] sm:h-[700px]">
                {
                    resData?.data.data.map((table, index) =>{
                        return(
                            <TableCard key={index}  id={table._id} name={table.tableNo} 
                            status={table.status} initials={table?.currentOrder?.customerDetails.name} seats={table.seats}/>
                        )
                    })
                }
            </div>
            <ButtonNav/>
        </section>
    )
}

export default Tables
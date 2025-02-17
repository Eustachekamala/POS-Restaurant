import ButtonNav from "../components/shared/ButtonNav";
import BackButton from "../components/shared/BackButton";
import { useState } from "react";
import TableCard from "../components/tables/TableCard";
import { tables } from "../constants";

function Tables(){
    const [status, setStatus] = useState("all")
    return(
        <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
            <dir className="flex items-center justify-between px-10 py-4 mt-2">
                <div className="flex items-center gap-4">
                    <BackButton/>
                    <h1 className="text-[#f5f5f5] font-bold text-2xl">Tables</h1>
                </div>
                <div className="flex items-center justify-around gap-4">
                    <button onClick={() => setStatus("all")} className={`text-[#ababab] text-lg rounded-lg px-5 py-2 ${status === "all" && "bg-[#383838] rounded-lg px-5 py-2"} font-semibold tracking-wide`}>All</button>
                    <button onClick={() => setStatus("booked")} className={`text-[#ababab] text-lg rounded-lg px-5 py-2 ${status === "booked" && "bg-[#383838] rounded-lg px-5 py-2"} font-semibold tracking-wide`}>Booked</button>
                </div>
            </dir>
            <div className="flex flex-wrap gap-6 p-10 overflow-scroll scrollbar-hide h-[700px]">
                {
                    tables.map((table) =>{
                        return(
                            <TableCard key={table.id} id={table.id} name={table.name} 
                            status={table.status} initials={table.initial} seats={table.seats} color={table.color}/>
                        )
                    })
                }
            </div>
            <ButtonNav/>
        </section>
    )
}

export default Tables
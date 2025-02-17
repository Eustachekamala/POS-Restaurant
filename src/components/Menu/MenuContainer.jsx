import { GrRadialSelected } from "react-icons/gr"
import { menus } from "../../constants"
import { useState } from "react"


const MenuContainer = () => {
    const [selected, setSelected] = useState(menus[0]);
    const [itemsCount, setItemCount] = useState(0);
    const [itemId, setItemId] = useState();

    const increment = (id) =>{
        setItemId(id)
        if(itemsCount >= 4) return;
        setItemCount((prev) => prev + 1);
    }

    const decrement = (id) =>{
        setItemId(id)
        if(itemsCount <= 0) return;
        setItemCount((prev) => prev - 1);
    }

  return (
    <>
        <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
            {
                menus.map((menu) => {
                    return (
                        <div key={menu.id} onClick={() => setSelected(menu)} style={{backgroundColor : menu.bgColor}} className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer">
                            <div className="flex items-center justify-between w-full">
                                <h1 className="text-[#f5f5f5] font-semibold text-lg">{menu.icon} {menu.name}</h1>
                                { selected.id === menu.id && <GrRadialSelected className="text-white" size={20}/>}
                            </div>
                            <p className="text-[#ababab] text-sm font-semibold">{menu.items.length} items</p>
                        </div>
                    )
                })
            }
        </div>
        <hr className="border-[#2a2a2a] border-t-2 mt-4" />

        <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
            {
                selected?.items.map((menu) => {
                    return (
                        <div key={menu.id} className="flex flex-col 
                            items-start justify-between bg-[#1a1a1a] p-4 rounded-lg h-[150px] cursor-pointer hover:bg-gray-500">
                            <div className="flex items-center justify-between w-full">
                                <h1 className="text-[#f5f5f5] font-semibold text-lg">{menu.name}</h1>
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <p className="text-[#ababab] text-xl font-bold">KES {menu.price} </p>
                                <div className="flex items-center justify-between gap-6 rounded-lg z-20 p-3 px-4 bg-[#1f1f1f]">
                                <button
                                    onClick={() => decrement(menu.id)}
                                    className="text-yellow-500 text-2xl"
                                >
                                    &minus;
                                </button>
                                <span className="text-white">{menu.id === itemId ? itemsCount : "0"}</span>
                                <button
                                    onClick={() => increment(menu.id)}
                                    className="text-yellow-500 text-2xl"
                                >
                                    &#43;
                                </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default MenuContainer

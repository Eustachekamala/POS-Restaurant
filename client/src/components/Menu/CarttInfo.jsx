import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/slices/cartSlice";
import { useEffect, useRef } from "react";

/**
 * CartInfo component displays the details of the items in the cart.
 * It uses Redux to fetch the cart data and provides functionality to remove items from the cart.
 * 
 * @component
 * @example
 * return (
 *   <CartInfo />
 * )
 * 
 * @returns {JSX.Element} The rendered component.
 * 
 * @description
 * - Uses `useSelector` to access the cart data from the Redux store.
 * - Uses `useRef` to create a reference for the scrollable container.
 * - Uses `useEffect` to scroll to the bottom of the container whenever the cart data changes.
 * - Provides a `handleRemove` function to dispatch an action to remove an item from the cart.
 * - Renders a message if the cart is empty, otherwise renders the list of items in the cart.
 */
const CartInfo = () => {
    const cartData = useSelector((state) => state.cart);
    const scrollRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        if(scrollRef.current){
            scrollRef.current.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: "smooth"            
            })
        }
    }, [cartData]);

    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId))
    }

    return (
        <div className="px-4 py-2">
            <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide">Order Details</h1>
            <div className="mt-4 overflow-y-scroll scrollbar-hide h-[380px]" ref={scrollRef}>
                {cartData.length === 0 ? (
                        <p className="px-4 py-2 text-[#ababab] text-sm flex justify-center items-center h-[380px]"> Your cart is empty. Start adding items!</p>
                    ) : cartData.map((item) => {
                    return (
                        <div key={item.id} className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2">
                            <div className="flex items-center justify-between">
                                <h1 className="text-[#ababab] font-semibold tracking-wide">
                                    {item.name}
                                </h1>
                                <p className="text-[#ababab] font-semibold">x{item.quantity}</p> 
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-3">
                                    <RiDeleteBin2Fill onClick={() => handleRemove(item.id)} className="text-[#ababab] cursor-pointer" size={20} />
                                    <FaNotesMedical className="text-[#ababab] cursor-pointer" size={20} />
                                </div>
                                <p className="text-[#f5f5f5] text-sm font-semibold">KES {item.price}</p> 
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CartInfo;
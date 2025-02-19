import BackButton from "../components/shared/BackButton"
import ButtonNav from "../components/shared/ButtonNav"
import { MdRestaurantMenu } from "react-icons/md"
import MenuContainer from "../components/Menu/MenuContainer"
import CustomerInfo from "../components/Menu/CustomerInfo"
import CartInfo from "../components/Menu/CarttInfo"
import BillInfo from "../components/Menu/BillInfo"
import { useSelector } from "react-redux"

const Menu = () => {
  const customerData = useSelector(state => state.customer);

  return (
   <section className="bg-[#1f1f1f] md:h-[calc(100vh-5rem)] overflow-hidden flex flex-col md:flex-row gap-3 mb-[63px] md:mb-0">
    {/** Left Div */}
    <div className="flex-[3]">
        <div className="flex sm:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-4 mt-2 gap-4 sm:gap-0">
            <div className="flex items-center gap-4">
                <BackButton />
                <h1 className="text-[#f5f5f5] font-bold text-2xl">Menu</h1>
            </div>
            <div className="flex items-center justify-around gap-4">
                <div className="flex items-center gap-3 cursor-pointer">
                    <MdRestaurantMenu className="text-[#f5f5f5] text-4xl" />
                    <div className="flex flex-col items-start">
                        <h1 className="text-md text-[#f5f5f5] font-semibold">
                            {customerData.customerName || "Customer Name"}
                        </h1>
                        <p className="text-xs text-[#ababab] font-medium">
                            {customerData.tableNo || "N/A"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <MenuContainer />
    </div>

    {/** Right Div */}
    <div className="flex-[1] bg-[#1a1a1a] mt-4 mr-3 h-[780px] rounded-lg pt-2">
        {/** Customer Info */}
        <CustomerInfo />
        <hr className="border-[#2a2a2a] border-t-2" />

        {/** Cart Items */}
        <CartInfo />
        <hr className="border-[#2a2a2a] border-t-2" />

        {/** Bills */}
        <BillInfo />
    </div>

    {/** Button Navigation */}
    <ButtonNav />
</section>
  )
}

export default Menu
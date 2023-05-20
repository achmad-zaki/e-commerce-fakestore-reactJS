import { useContext } from "react";
import ProductCart from "./ProductCart";

import { RxCross2 } from "react-icons/rx";
import { SideBarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";

const Sidebar = () => {
  const { isShow, handleClose } = useContext(SideBarContext);
  const { cartProduct } = useContext(CartContext);
  return (
    <div className={`${
        isShow ? "block" : "hidden"
      } bg-white fixed top-0 right-0 z-20 w-full md:w-2/4 lg:w-2/5 h-full overflow-y-auto border border-black shadow-lg`}
    >
      <div className="bg-white px-4 flex items-center justify-between border-b border-b-black py-5 sticky top-0">
        <div className="text-2xl">Your bag (14)</div>
        <button onClick={handleClose}>
          <RxCross2 size={25} />
        </button>
      </div>
      {cartProduct.length ? (
        cartProduct.map((item) => {
          return <ProductCart key={item.id} item={item} />;
        })
      ) : (
        <div className="flex items-center justify-center h-[60vh] font-bold text-xl">
          No Item
        </div>
      )}
      <div className={`${cartProduct.length < 1 ? "hidden" : "flex"} bg-blue-300 h-2/6 items-center justify-center px-4`}>
        <div className="flex flex-col gap-y-3 w-full">
            <div className="flex flex-col gap-y-2">
                <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">Total :</div>
                    <div className="text-lg font-bold">$446.00</div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-[#9B9B9B]">Shipping</div>
                    <div className="text-lg text-[#9B9B9B]">Free</div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <button className="py-3 font-semibold text-sm">View Bag</button>
                <button className="bg-black text-white py-3 font-semibold text-sm">Go To Checkout</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

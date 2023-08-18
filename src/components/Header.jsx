import { FaBars } from "react-icons/fa";

import IconBasket from "../assets/icons/basket.svg";
import { useContext } from "react";
import { SideBarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { isShow, setIsShow } = useContext(SideBarContext)
  const { totalItem } = useContext(CartContext)
  return (
      <header className="border-b-2">
        <div className="bg-[#F7F7F7] text-center py-3 text-xs font-normal">
          Free Shipping On All U.S. Orders
        </div>
        <div className="container mx-auto flex items-center justify-between px-4 py-4 bg-white">
          <div className="hidden lg:flex lg:flex-1">
            <ul className="lg:flex items-center list-none gap-x-10 text-[15px] font-normal">
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
          <button className="lg:hidden md:flex md:flex-1">
            <FaBars size={30} />
          </button>
          <h1 className="font-palanquin-dark text-5xl tracking-[-0.055em] text-center flex-none">
            Participle+
          </h1>
          <div onClick={() => setIsShow(!isShow)} className="md:flex md:flex-1 md:justify-end">
            <div className="relative flex justify-center md:border md:border-[#A0A0A0] md:flex md:items-center md:gap-x-3 md:px-5 md:py-3 cursor-pointer">
              <div className="absolute top-2 text-white text-sm z-10 md:static md:flex md:gap-x-1 md:text-black">
                <div>{totalItem}</div>
                <span className="hidden md:inline">Items</span>
              </div>
              <img src={IconBasket} className="h-8 md:h-5" alt="iconBasket" />
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;

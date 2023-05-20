import { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const FilterProduct = ({sortByPrice, sortByRate}) => {
  const [isShow, setIsShow] = useState(false);
  const location = useLocation()

  return (
    <div className="container mx-auto flex items-center justify-between px-4 py-7">
      <div className="hidden text-[#5E5E5E] text-sm md:block">283 Product</div>
      <div className="flex flex-wrap items-center gap-3">
        <Link to="/" className={`${location.pathname === "/" ? "text-black" : ""} text-sm text-[#5E5E5E]`}>
          Home
        </Link>
        <div className="bg-[#5E5E5E] w-[2px] h-4"></div>
        <Link to="/clothing" className={`${location.pathname === "/clothing" ? "text-black" : ""} text-sm text-[#5E5E5E]`}>
          Clothing
        </Link>
        <div className="bg-[#5E5E5E] w-[2px] h-4"></div>
        <Link to="/jewelery" className={`${location.pathname === "/jewelery" ? "text-black" : ""} text-sm text-[#5E5E5E]`}>
          Jewelery
        </Link>
        <div className="bg-[#5E5E5E] w-[2px] h-4"></div>
        <Link to="/electronic" className={`${location.pathname === "/electronic" ? "text-black" : ""} text-sm text-[#5E5E5E]`}>
          Electronic
        </Link>
      </div>
      <div
        onClick={() => setIsShow(!isShow)}
        className="relative text-sm flex items-center gap-2 cursor-pointer"
      >
        Sort By
        <div className={`${isShow ? "rotate-180" : "rotate-0"}`}>
          <IoIosArrowDown />
        </div>
        <ul
          className={`absolute bg-white drop-shadow-md -bottom-20 right-0 border w-full ${
            isShow ? "flex flex-col gap-y-2" : "hidden"
          } py-2 px-3 z-10`}
        >
          <li className="hover:bg-black hover:text-white">Price</li>
          <li className="hover:bg-black hover:text-white">Rate</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterProduct;

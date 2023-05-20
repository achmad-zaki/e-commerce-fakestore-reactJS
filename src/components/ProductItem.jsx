import { FiPlus } from "react-icons/fi"
import { AiFillEye } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const ProductItem = ({item}) => {
  const { id, title, image, price } = item
  const { addCartItems } = useContext(CartContext)
  return (
    <div className='cursor-pointer'>
      <div className='relative border w-full h-[300px] flex items-center justify-center'>
        <img src={image} className='max-h-24 md:max-h-28' alt="" />
        <div className="absolute bottom-5 right-5 flex gap-x-3">
          <Link to={`/product/${id}`} className="border border-black text-black h-10 w-10 flex items-center justify-center rounded-md">
            <AiFillEye size={20}/>
          </Link>
          <div onClick={() => addCartItems(item, id)} className="bg-black text-white h-10 w-10 flex items-center justify-center rounded-md">
            <FiPlus size={20}/>
          </div>
        </div>
      </div>
      <div className="mt-3 flex text-[#5E5E5E] text-[15px] justify-between gap-2 font-bold">
        <div className="truncate">
          {title}
        </div>
        <div className="font-semibold">
          ${price}
        </div>
      </div>
    </div>
  )
}

export default ProductItem
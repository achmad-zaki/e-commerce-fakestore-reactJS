import { useContext } from "react"
import { BiMinus, BiPlus } from "react-icons/bi"
import { FaRegTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

const ProductCart = ({item}) => {
    const { id, image, title, price, quantity } = item
    const { deleteCartItem, increasedQuantity, decreasedQuantity } = useContext(CartContext)
  return (
    <div className="flex gap-5 justify-between py-5 px-4 border-b border-gray-400">
        <div className="w-full min-h-[150px] flex items-start gap-4">
            <Link to={`/product/${id}`}>
                <img src={image} className="max-w-[90px]" alt="" />
            </Link>
            <div className="w-full h-full flex flex-col justify-start">
                <Link to={`/product/${id}`}>
                    <h3 className="text-[15px] font-semibold">{title}</h3>
                </Link>
                <div className="text-gray-400 flex-1">Quanty : {quantity}</div>
                <div className="flex gap-x-3 flex-1">
                    <div onClick={() => decreasedQuantity(id)} className="bg-black text-white h-8 w-8 flex items-center justify-center cursor-pointer"><BiMinus size={20}/></div>
                    <div onClick={() => increasedQuantity(id)} className="bg-black text-white h-8 w-8 flex items-center justify-center cursor-pointer"><BiPlus size={20}/></div>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-evenly">
            <div className="font-bold flex-1">
                {`$${parseFloat(price * quantity).toFixed(2)}`}
            </div>
            <button onClick={() => deleteCartItem(id)} className="self-end text-gray-400 flex-1">
                <FaRegTrashAlt size={25}/>
            </button>
        </div>
    </div>
  )
}

export default ProductCart
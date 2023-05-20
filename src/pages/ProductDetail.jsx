import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

import { BsStarFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
    const { id } = useParams();
    const { product } = useContext(ProductContext);
    const { addCartItems } = useContext(CartContext);
    const itemDetail = product.find((item) => item.id === parseInt(id));
    if (!itemDetail) {
        return (
            <section className="h-[60vh] flex items-center justify-center text-xl font-semibold">
                Loading ...
            </section>
        );
    }
    console.log(id)
    return (
        <div className="px-4 py-4">
            <div className="flex items-center justify-center pt-10">
                <div className="container flex flex-col items-start justify-between gap-5 mx-auto md:flex-row">
                    <div className="flex items-center justify-center w-full">
                        <img src={itemDetail.image} className="max-h-[300px]" alt="" />
                    </div>
                    <div className="flex flex-col gap-y-3 basis-2/3">
                        <div className="text-2xl font-bold">${itemDetail.price}</div>
                        <h1 className="text-xl font-semibold">{itemDetail.title}</h1>
                        <div className="flex items-center justify-center w-24 gap-1 py-1 border border-gray-400 rounded-md">
                            <div className="text-[#FFC400]"><BsStarFill size={15} /></div>
                            <div className="text-sm">{itemDetail.rating.rate}</div>
                            <div className="text-sm">({itemDetail.rating.count})</div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Description Product :</h3>
                            <div className="mt-2">{itemDetail.description}</div>
                            <button onClick={() => addCartItems(itemDetail, parseInt(id))} className="flex items-center justify-center w-full gap-3 py-2 mt-5 text-white bg-black md:w-2/5 text-md">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

import { useContext } from "react";

// components
import { ProductContext } from "../context/ProductContext";

// icon
import ProductItem from "../components/ProductItem";
import FilterProduct from "../components/FilterProduct";

const Clothing = () => {
  const { product, handleSortPrice } = useContext(ProductContext);
  const filterClothing = product.filter((item) => item.category === "men's clothing" || item.category === "women's clothing");
  return (
    <>
      <FilterProduct/>
      <section>
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filterClothing.map((item) => {
            return (
              <ProductItem 
                key={item.id} 
                item={item} 
              />
            )
          })}
        </div>
      </section>
    </>
    )
};

export default Clothing;

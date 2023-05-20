import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import ProductItem from "../components/ProductItem"
import FilterProduct from "../components/FilterProduct"

const Home = () => {
  const { product } = useContext(ProductContext)
  return (
    <>
      <FilterProduct/>
      <section>
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {product.map((item) => {
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
}

export default Home
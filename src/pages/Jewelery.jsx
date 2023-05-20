import { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import ProductItem from '../components/ProductItem'
import FilterProduct from '../components/FilterProduct'

const Jewelery = () => {
    const { product } = useContext(ProductContext)
    const filterJewelery = product.filter((item) => item.category === "jewelery")
  return (
    <>
      <FilterProduct/>
      <section>
        <div className='container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {filterJewelery.map((item) => {
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

export default Jewelery
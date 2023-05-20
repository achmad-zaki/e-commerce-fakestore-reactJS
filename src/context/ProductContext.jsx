import { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext()

const ProductProvider = ({children}) => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json())
      .then(json => setProduct(json))
  }, [])

  return (
    <ProductContext.Provider 
      value={{
        product,
      }}
    >
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
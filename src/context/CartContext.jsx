import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
  const [cartProduct, setCartProduct] = useState([])
  const [total, setTotal] = useState(0)

  const addCartItems = (product, id) => {
    const existingCartItems = cartProduct.find((item) => {
      return item.id === id
    })

    if (existingCartItems) {
      const newItem = [...cartProduct].map((item) => {
        if (item.id === id) {
          return {...item, quantity: existingCartItems.quantity + 1}
        } else {
          return item
        }
      })
      setCartProduct(newItem)
    } else {
      const newCart = {...product, quantity: 1}
      setCartProduct([...cartProduct, newCart])
    }
  }

  const deleteCartItem = (id) => {
    const cartItem = cartProduct.filter((item) => {
      return item.id !== id
    })
    setCartProduct(cartItem)
  }

  const increasedQuantity = (id) => {
    const cartItem = cartProduct.find((item) => {
      return item.id === id
    })
    addCartItems(cartItem, id)
  }

  const decreasedQuantity = (id) => {
    const cartItem = cartProduct.find((item) => {
      return item.id === id
    })

    if (cartItem) {
      const newItem = cartProduct.map((item) => {
        if (item.id === id) {
          return {...item, quantity: cartItem.quantity - 1}
        } else {
          return item
        }
      })
      setCartProduct(newItem)
    }

    if (cartItem.quantity < 2) {
      deleteCartItem(id)
    }
  }

  useEffect(() => {
    if (cartProduct) {
      const quantity = cartProduct.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.quantity
      }, 0)
      setTotal(quantity)
    }
  })
  console.log(cartProduct)

  return (
    <CartContext.Provider
      value={{
        cartProduct,
        setCartProduct,
        addCartItems,
        deleteCartItem,
        increasedQuantity,
        decreasedQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
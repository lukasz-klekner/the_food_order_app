import { useReducer } from 'react'
import CartContext from './CartContext'

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const updatedItems = [...state.items, action.item]
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      }
    }

    default:
      return defaultCartState
  }
}

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )

  const addItemToCartHandler = (item) =>
    dispatchCartAction({ type: 'ADD', item })

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}

export default CartProvider

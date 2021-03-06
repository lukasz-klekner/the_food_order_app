import { memo, useContext } from 'react'
import styled from 'styled-components'

import CartContext from '../../context/CartContext'
import Modal from '../UI/Modal'
import CartItem from './CartItem'

const Cart = ({ className, onClose }) => {
  const { items, totalAmount } = useContext(CartContext)

  const totalAmountRounded = `$${totalAmount.toFixed(2)}`
  const hasItems = items.length > 0

  const cartItemRemoveHandler = (id) => {}

  const cartItemAddHandler = (item) => {}

  const cartItems = (
    <ul>
      {items.map(({ id, name, price, amount }) => (
        <CartItem
          key={id}
          name={name}
          price={price}
          amount={amount}
          onRemove={(id) => cartItemRemoveHandler(id)}
          onAdd={(item) => cartItemAddHandler(item)}
        />
      ))}
    </ul>
  )

  return (
    <Modal className={className} onClick={onClose}>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>{totalAmountRounded}</span>
      </div>
      <div>
        <button onClick={onClose}>Close</button>
        {hasItems && <button>Order</button>}
      </div>
    </Modal>
  )
}

const Memoized = memo(Cart)
const Styled = styled(Memoized)`
  > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  > div:last-child {
    text-align: right;

    > button {
      font: inherit;
      cursor: pointer;
      background-color: transparent;
      border: 1px solid #8a2b06;
      padding: 0.5rem 2rem;
      border-radius: 25px;
      margin-left: 1rem;

      &:hover,
      &:active {
        background-color: #5a1a01;
        border-color: #5a1a01;
        color: white;
      }

      &:first-child {
        color: #8a2b06;
      }

      &:last-child {
        background-color: #8a2b06;
        color: white;
      }
    }
  }
`

Styled.displayName = 'Cart'
export default Styled

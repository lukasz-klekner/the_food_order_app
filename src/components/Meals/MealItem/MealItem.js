import { memo, useContext } from 'react'
import styled from 'styled-components'
import CartContext from '../../../context/CartContext'

import MealItemForm from './MealItemForm'

const MealItem = ({ className, id, name, price, description }) => {
  const { addItem } = useContext(CartContext)
  const priceRounded = `$${price.toFixed(2)}`

  const addToCartHandler = (amount) => addItem({ id, name, amount, price })

  return (
    <li className={className}>
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>{priceRounded}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}

const Memoized = memo(MealItem)
const Styled = styled(Memoized)`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  > div > h3 {
    margin: 0 0 0.25rem 0;
  }

  > div > div:first-child {
    font-style: italic;
  }

  > div > div:last-child {
    margin-top: 0.25rem;
    font-weight: bold;
    color: #ad5502;
    font-size: 1.25rem;
  }
`

Styled.displayName = 'MealItem'
export default Styled

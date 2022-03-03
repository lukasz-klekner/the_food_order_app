import { memo } from 'react'
import styled from 'styled-components'

const CartItem = ({ className, name, price, amount, onAdd, onRemove }) => {
  const priceRounded = `$${price.toFixed(2)}`

  return (
    <li className={className}>
      <div>
        <h2>{name}</h2>
        <div>
          <span>{priceRounded}</span>
          <span>x {amount}</span>
        </div>
      </div>
      <div>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  )
}

const Memoized = memo(CartItem)
const Styled = styled(Memoized)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #8a2b06;
  padding: 1rem 0;
  margin: 1rem 0;

  h2 {
    margin: 0 0 0.5rem 0;
    color: #363636;
    + div {
      width: 10rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > span:first-child {
        font-weight: bold;
        color: #8a2b06;
      }

      > span:last-child {
        font-weight: bold;
        border: 1px solid #ccc;
        padding: 0.25rem 0.75rem;
        border-radius: 6px;
        color: #363636;
      }
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
  }
`

Styled.displayName = 'CartItem'
export default Styled

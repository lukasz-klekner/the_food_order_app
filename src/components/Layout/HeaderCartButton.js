import { memo } from 'react'
import styled from 'styled-components'

import CartIcon from '../Cart/CartIcon'

const HeaderCartButton = ({ className }) => (
  <button className={className}>
    <span>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span>3</span>
  </button>
)

const Memoized = memo(HeaderCartButton)
const Styled = styled(Memoized)`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #2c0d00;
  }

  span:first-child {
    width: 1.35rem;
    height: 1.35rem;
    margin-right: 0.5rem;
  }

  span:last-child {
    background-color: #b94517;
    padding: 0.25rem 1rem;
    border-radius: 25px;
    margin-left: 1rem;
    font-weight: bold;
  }
`

Styled.displayName = 'HeaderCartButton'
export default Styled

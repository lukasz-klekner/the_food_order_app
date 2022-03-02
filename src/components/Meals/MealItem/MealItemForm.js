import { memo } from 'react'
import styled from 'styled-components'

import Input from '../../UI/Input'

const MealItemForm = ({ className, id }) => (
  <form className={className}>
    <Input
      label='Amount'
      input={{
        id: 'amount_' + id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
      }}
    />
    <button>+ Add</button>
  </form>
)

const Memoized = memo(MealItemForm)
const Styled = styled(Memoized)`
  text-align: right;

  > button {
    font: inherit;
    cursor: pointer;
    background-color: #8a2b06;
    border: 1px solid #8a2b06;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;

    &:hover,
    &:active {
      background-color: #641e03;
      border-color: #641e03;
    }
  }
`
Styled.displayName = 'MealItem'
export default Styled

import { memo, forwardRef } from 'react'
import styled from 'styled-components'

const Input = forwardRef(({ className, input, label }, ref) => (
  <div className={className}>
    <label htmlFor={input.id}>{label}</label>
    <input ref={ref} {...input} />
  </div>
))

const Memoized = memo(Input)
const Styled = styled(Memoized)`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  > label {
    font-weight: bold;
    margin-right: 1rem;
  }

  > input {
    width: 3rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
  }
`
Styled.displayName = 'Input'
export default Styled

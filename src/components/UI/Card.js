import { memo } from 'react'
import styled from 'styled-components'

const Card = ({ className, children }) => (
  <div className={className}>{children}</div>
)

const Memoized = memo(Card)
const Styled = styled(Memoized)`
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
`
Styled.displayName = 'Card'
export default Styled

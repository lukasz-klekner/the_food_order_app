import { memo } from 'react'
import styled from 'styled-components'

import HeaderCartButton from './HeaderCartButton'
import mealsImage from '../../assets/meals.jpg'

const Header = ({ className, onShowCart }) => {
  return (
    <div className={className}>
      <header>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={onShowCart} />
      </header>
      <div>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </div>
  )
}

const Memoized = memo(Header)
const Styled = styled(Memoized)`
  > header {
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    height: 5rem;
    background-color: #8a2b06;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 10;
  }
  > div {
    width: 100%;
    height: 25rem;
    z-index: 0;
    overflow: hidden;

    > img {
      width: 110%;
      height: 100%;
      object-fit: cover;
      transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
    }
  }
`
Styled.displayName = 'Header'
export default Styled

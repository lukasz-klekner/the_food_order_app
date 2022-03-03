import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import { useState } from 'react'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const toggleCartHandler = () => setCartIsShown((prevState) => !prevState)

  return (
    <>
      {cartIsShown && <Cart onClose={toggleCartHandler} />}
      <Header onShowCart={toggleCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  )
}

export default App

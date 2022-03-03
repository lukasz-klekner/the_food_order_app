import { useState } from 'react'

import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './context/CartProvider'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const toggleCartHandler = () => setCartIsShown((prevState) => !prevState)

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={toggleCartHandler} />}
      <Header onShowCart={toggleCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './components/cart/Cart'
import Shop from './components/shop/Shop'
import { ShopContextProvider } from './context/ShopContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Shop />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>

          </Router>
        </ShopContextProvider>
      </div>
    </>
  )
}

export default App

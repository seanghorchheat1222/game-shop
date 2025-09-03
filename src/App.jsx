import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './component/header/header'
import Footer from './component/footer/footer'
import Home from './pages/home/home'
import QandA from './pages/q&a/q&a'
import Contact from './pages/contact/contact'
import './App.css'
import Favorite from './pages/favorite/favorite'
import Cart from './pages/cart/cart'
import View from './pages/view/view'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Router>
  <Header></Header>
  <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/qanda' element={<QandA></QandA>}></Route>
    <Route path='/contact' element={<Contact></Contact>}></Route>
    <Route path="/favorite" element={<Favorite></Favorite>}></Route>
    <Route path="/cart" element={<Cart></Cart>}></Route>
    <Route path="/view/:id" element={<View></View>}></Route>
  </Routes>
  <Footer></Footer>
</Router>
    </>
  )
}

export default App

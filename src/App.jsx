import { Routes, Route } from 'react-router-dom'
import About from './pages/About/About'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Cards from './components/HomeCard/card'
import ProductDetails from './pages/ProductDetails/productDetails';

function App() {

  return (
    <>
      <Routes>
        <Route path='/product/:id' element = {<ProductDetails></ProductDetails>}></Route>
        <Route path='/cards' element = {<Cards></Cards>}></Route>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/about' element = {<About></About>}></Route>
        <Route path='/products' element = {<Products></Products>}></Route>
        <Route path='/cart' element = {<Cart></Cart>}></Route>
      </Routes>
    </>
  )
}

export default App

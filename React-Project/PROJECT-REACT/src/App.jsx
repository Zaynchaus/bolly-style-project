import './App.css'
import NavigationBar from './Components/NavigationBar'
import AboutUs from './Views/AboutUs'
import Build from './Views/Contact'
import ProductDetail from './Views/ProductDetail'
import Login from './Views/Login'
import Product from './Views/Product'
import Register from './Views/Register'
import { Route, Routes } from "react-router-dom"
import { Home } from './Views/Home'
import { Cart } from './Views/Cart'


function App() {

  return (
    <>

 {/* <Cart /> */}
 <NavigationBar/>
      <Routes >

        <Route path='/' element={<Home/>} />
        <Route path='Login' element={<Login />} />
        <Route path='Register' element={<Register />} />
        <Route path='Build' element={< Build />} />
        <Route path='AboutUs' element={<AboutUs />} />
        <Route path='Product' element={<Product />} />
        <Route path='/details/:id' element={<ProductDetail />} />
        <Route path='cart' element={<Cart/>}>
          
        </Route>

      </Routes>
    </>
  )
}

export default App






















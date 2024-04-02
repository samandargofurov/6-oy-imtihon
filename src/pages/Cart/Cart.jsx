import { IoIosMoon } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router-dom"
import './cart.css'

function Cart() {
  return (
    <>
      <div className="backColor">
        <div className="container">
          <div className="signUp">
            <NavLink to='/login' className="signin"><span>Sign in / Guest</span></NavLink>
            <NavLink to='/register' className="register"><span>Create Account</span></NavLink>
          </div>
        </div>
      </div>

          {/* header page */}
          <div className="headercolor">
            <div className="header">
              <NavLink to='/' className="logoIcon"><span>C</span></NavLink>
              <div className="pages">
                <NavLink to='/' className="home"><span>Home</span></NavLink>
                <NavLink to='/about' className="about" style={{fontSize: "13px"}}><span>About</span></NavLink>
                <NavLink to='/products' className="products" style={{fontSize: "13px"}}><span>Products</span></NavLink>
                <NavLink to='/cart' className="cart" style={{fontSize: "13px"}}><span>Cart</span></NavLink>
              </div>
              <div className="actions">
                <IoIosMoon className="icon"/>
                <BsCart3 className="icon"/>
                <select className="form-select">
                  <option value="uz">Uzbek</option>
                  <option value="ru">Russian</option>
                  <option value="eng">English</option>
                </select>
              </div>
            </div>
          </div>
    </>
  )
}

export default Cart
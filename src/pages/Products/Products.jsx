import { IoIosMoon } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom"
import './products.css'

function Products() {
  return (
    <>
      <div className="backcolor">
        <div className="container">
          <div className="signUp">
            <Link to='/login' className="signin"><span>Sign in / Guest</span></Link>
            <Link to='/register' className="register"><span>Create Account</span></Link>
          </div>
        </div>
      </div>

          {/* header page */}
          <div className="headerColor">
            <div className="header">
              <NavLink to='/' className="logoicon"><span>C</span></NavLink>
              <div className="pages">
                <NavLink to='/' className="home"><span>Home</span></NavLink>
                <NavLink to='/about' className="about" style={{fontSize: "13px"}}><span>About</span></NavLink>
                <NavLink to='/products' className="products" style={{fontSize: "13px"}}><span>Products</span></NavLink>
                <NavLink to='/cart' className="cart" style={{fontSize: "13px"}}><span>Cart</span></NavLink>
              </div>
              <div className="actions">
                <IoIosMoon className="moonIcon" style={{fontSize: "30px"}}/>
                <BsCart3 className="basketIcon" style={{fontSize: "30px"}}/>
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

export default Products
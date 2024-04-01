import { IoIosMoon } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router-dom"
import './home.css'

function Home() {
  return (
    <>
      <div className="color">
        <div className="container">
          <div className="signUp">
            <NavLink to='/login' className="signin"><span>Sign in / Guest</span></NavLink>
            <NavLink to='/register' className="register"><span>Create Account</span></NavLink>
          </div>
        </div>
      </div>

          <div className="headerColor">
            <div className="header">
              <NavLink to='/'><span className="btn btn-primary fw-bold fs-2 logo">C</span></NavLink>
              <div className="pages">
                <NavLink to='/' className="home"><span>Home</span></NavLink>
                <NavLink to='/about' className="about"><span>About</span></NavLink>
                <NavLink to='/products' className="products"><span>Products</span></NavLink>
                <NavLink to='/cart' className="cart"><span>Cart</span></NavLink>
              </div>
              <div className="actions">
                <IoIosMoon className="moon"/>
                <BsCart3 className="basket"/>
                <select class="form-select">
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

export default Home
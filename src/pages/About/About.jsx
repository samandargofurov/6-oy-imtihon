import { IoIosMoon } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router-dom"
import './about.css'

function About() {
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

          {/* header page */}
          <div className="headerColor">
            <div className="header">
              <NavLink to='/' className="headerLogo"><span>C</span></NavLink>
              <div className="pages">
                <NavLink to='/' className="home"><span>Home</span></NavLink>
                <NavLink to='/about' className="about" style={{fontSize: "13px"}}><span>About</span></NavLink>
                <NavLink to='/products' className="products" style={{fontSize: "13px"}}><span>Products</span></NavLink>
                <NavLink to='/cart' className="cart" style={{fontSize: "13px"}}><span>Cart</span></NavLink>
              </div>
              <div className="actions">
                <IoIosMoon className="moonicon" style={{fontSize: "30px"}} />
                <BsCart3 className="basketicon" style={{fontSize: "30px"}} />
                <select className="form-select">
                  <option value="uz">Uzbek</option>
                  <option value="ru">Russian</option>
                  <option value="eng">English</option>
                </select>
              </div>
            </div>
          </div>

          {/* hero page */}

          <div className="hero d-flex gap-3 flex-column mt-5 justify-content-center align-items-center">
            <div className="aboutTitle">We love <span className="comfy">comfy</span></div>
            <p className="aboutDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!</p>
          </div>
    </>
  )
}

export default About
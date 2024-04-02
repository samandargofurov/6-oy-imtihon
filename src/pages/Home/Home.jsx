import img1 from "../../assets/hero1.webp"
import img2 from "../../assets/hero2.webp"
import img3 from "../../assets/hero3.webp"
import img4 from "../../assets/hero4.webp"
import { IoIosMoon } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom"
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
              <Link to='/'className="logo"><span>C</span></Link>
              <div className="pages">
                <NavLink to='/' className="home"><span>Home</span></NavLink>
                <NavLink to='/about' className="about" style={{fontSize: "13px"}}><span>About</span></NavLink>
                <NavLink to='/products' className="products" style={{fontSize: "13px"}}><span>Products</span></NavLink>
                <NavLink to='/cart' className="cart" style={{fontSize: "13px"}}><span>Cart</span></NavLink>
              </div>
              <div className="actions">
                <IoIosMoon className="moon"/>
                <BsCart3 className="basket"/>
                <select className="form-select">
                  <option value="uz">Uzbek</option>
                  <option value="ru">Russian</option>
                  <option value="eng">English</option>
                </select>
              </div>
            </div>
          </div>

        {/* hero page */}

        <div className="hero d-flex gap-5 mt-5">
          {/* text area */}
          <div className="textArea w-50 mt-5 d-flex flex-column gap-3">
            <h1 className="heroTitle font-bold">We are changing the way people shop</h1>
            <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
            <button className="button btn btn-primary">OUR PRODUCTS</button>
          </div>

          {/* slider side */}
            <div className="caruselItem">
                <img src={img1} alt="" className="" />

                <img src={img2} alt=""/>

                <img src={img3} alt=""/>

                <img src={img4} alt=""/>
            </div>
        
        </div>


        {/* featured products */}

        <div className="productsPage mt-5">
          <h1 className="ptn">Featured Products</h1>
        </div>
    </>
  )
}

export default Home
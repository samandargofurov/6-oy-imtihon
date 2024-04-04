import { IoIosMoon } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { useEffect, useState } from 'react';
import {useParams,  useNavigate} from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
function ProductDetails() {
     const [product, setProduct] = useState({});
     const {id} = useParams();
     const navigate = useNavigate();
     useEffect(() => {
          if (id) {
               fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
                    .then(res => res.json())
                    .then(data => {
                         setProduct(data.data)
                         console.log(data);
                    })
                    .catch(err => {
                         console.log(err);
                    })
          } else {
               navigate("/")
          }
     }, [id])

     function handleChange(e) {
          setLang(e.target.value);
          i18n.changeLanguage(e.target.value);
          localStorage.setItem('lang', e.target.value)
        }

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
                <Link to="/cart" className="basket"><BsCart3/></Link>
                <select onChange={handleChange} value={lang} className="form-select">
                  <option value="uz">Uzbek</option>
                  <option value="eng">English</option>
                </select>
              </div>
            </div>
          </div>
    </>
  )
}

export default ProductDetails
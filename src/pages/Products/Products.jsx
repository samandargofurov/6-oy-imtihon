import { useTranslation } from "react-i18next";
import { IoIosMoon } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom"
import { useState, useEffect } from "react";
import Card from "../../components/Card";
import './products.css'

function Products() {
  const [products, setProducts] = useState([])
  const {t, i18n} = useTranslation();
  const [lang, setLang] = useState('uz');

  useEffect(() => {
       fetch(`https://strapi-store-server.onrender.com/api/products`)
            .then(res => res.json())
            .then(data => {
                 setProducts(data.data)
            })
            .catch(err => {
                 console.log(err);
            })
  }, []);

  function handleChange(e) {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setItem('lang', e.target.value)
  }

  return (
    <>
      <div className="backcolor">
        <div className="container">
          <div className="signUp">
            <NavLink to='/login' className="signin"><span>{t("Sign in")} / {t("Guest")}</span></NavLink>
            <NavLink to='/register' className="register"><span>{t("Create Account")}</span></NavLink>
          </div>
        </div>
      </div>

      {/* header page */}
          <div className="headerColor">
            <div className="header">
              <NavLink to='/' className="logoicon"><span>C</span></NavLink>
              <div className="pages">
                <NavLink to='/' className="home"><span>{t('Home')}</span></NavLink>
                <NavLink to='/about' className="about" style={{fontSize: "13px"}}><span>{t('About')}</span></NavLink>
                <NavLink to='/products' className="products" style={{fontSize: "13px"}}><span>{t('Products')}</span></NavLink>
                <NavLink to='/cart' className="cart" style={{fontSize: "13px"}}><span>{t('Cart')}</span></NavLink>
              </div>
              <div className="actions">
                <IoIosMoon className="moonIcon" style={{fontSize: "30px"}}/>
                <Link to="/cart" className="basketIcon"><BsCart3/></Link>
                <select onChange={handleChange} value={lang} className="form-select">
                  <option value="uz">Uzbek</option>
                  <option value="eng">English</option>
                </select>
              </div>
            </div>
          </div>

          {/* category */}

        <div>
          
        </div>

          {/* products details info */}

      <div className="producDetailsCardInfo">
          {
               products.map((product, index) => {
                    return (
                         <Card key={index} product = {product}></Card>
                    );
               })
          }
      </div>
      
    </>
  )
}

export default Products
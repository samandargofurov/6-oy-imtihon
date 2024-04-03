import { useTranslation } from "react-i18next";
import { IoIosMoon } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react";
import './products.css'

function Products() {
  const {t, i18n} = useTranslation();
  const [lang, setLang] = useState('uz');

  useEffect(() => {

  }, [])

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
                <NavLink to='/' className="home"><span>{t('Home')}</span></NavLink>
                <NavLink to='/about' className="about" style={{fontSize: "13px"}}><span>{t('About')}</span></NavLink>
                <NavLink to='/products' className="products" style={{fontSize: "13px"}}><span>{t('Products')}</span></NavLink>
                <NavLink to='/cart' className="cart" style={{fontSize: "13px"}}><span>{t('Cart')}</span></NavLink>
              </div>
              <div className="actions">
                <IoIosMoon className="moonIcon" style={{fontSize: "30px"}}/>
                <BsCart3 className="basketIcon" style={{fontSize: "30px"}}/>
                <select onChange={handleChange} value={lang} className="form-select">
                  <option value="uz">Uzbek</option>
                  <option value="eng">English</option>
                </select>
              </div>
            </div>
          </div>

      {/* products details info */}

      <div className="proDetails">
        
      </div>
      
    </>
  )
}

export default Products
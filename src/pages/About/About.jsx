import { useTranslation } from "react-i18next";
import { IoIosMoon } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom"
import { useEffect, useState } from "react";
import './about.css'

function About() {
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
      <div className="color">
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
              <NavLink to='/' className="headerLogo"><span>C</span></NavLink>
              <div className="pages">
                <NavLink to='/' className="home"><span>{t('Home')}</span></NavLink>
                <NavLink to='/about' className="about" style={{fontSize: "13px"}}><span>{t("About")}</span></NavLink>
                <NavLink to='/products' className="products" style={{fontSize: "13px"}}><span>{t('Products')}</span></NavLink>
                <NavLink to='/cart' className="cart" style={{fontSize: "13px"}}><span>{t('Cart')}</span></NavLink>
              </div>
              <div className="actions">
                <IoIosMoon className="moonicon" style={{fontSize: "30px"}} />
                <Link to="/cart" className="basketicon"><BsCart3/></Link>
                <select onChange={handleChange} value={lang} className="form-select">
                  <option value="uz">Uzbek</option>
                  <option value="eng">English</option>
                </select>
              </div>
            </div>
          </div>

          {/* hero page */}

          <div className="hero d-flex gap-3 flex-column mt-5 justify-content-center align-items-center">
            <div className="aboutTitle">{t('We love')} <span className="comfy">{t('comfy')}</span></div>
            <p className="aboutDesc">{t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!')}</p>
          </div>
    </>
  )
}

export default About
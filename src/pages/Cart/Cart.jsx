import { useTranslation } from "react-i18next";
import img from "../../assets/hero2.webp"
import { IoIosMoon } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react";
import './cart.css'

function Cart() {
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
                <NavLink to='/' className="home"><span>{t('Home')}</span></NavLink>
                <NavLink to='/about' className="about" style={{fontSize: "13px"}}><span>{t('About')}</span></NavLink>
                <NavLink to='/products' className="products" style={{fontSize: "13px"}}><span>{t('Products')}</span></NavLink>
                <NavLink to='/cart' className="cart" style={{fontSize: "13px"}}><span>{t('Cart')}</span></NavLink>
              </div>
              <div className="actions">
                <IoIosMoon className="icon"/>
                <BsCart3 className="icon"/>
                <select onChange={handleChange} className="form-select">
                  <option value="uz">Uzbek</option>
                  <option value="eng">English</option>
                </select>
              </div>
            </div>
          </div>

          {/* shopping cart */}

          <div className="shopCart">
            <h1 className="nt">{t('Shopping Cart')}</h1>

            {/* cart oder total */}

            <div className="order">
              <img src={img} alt="" className="rounded-4" style={{width: "140px", height: "140px"}} />
              {/* coffe table */}
              <div className="cofetable">
                <h3 className="ctt">{t("Coffee Table")}</h3>
                <h4 className="place">Modenza</h4>
                <div className="paintCol">{t("Color")}: <span className="paint"></span></div>
              </div>
              {/* Amount */}
              <div className="amount">
                <h5 className="titlename">{t("Amount")}</h5>
                <select className="number">
                  <option value="one">1</option>
                  <option value="two">2</option>
                  <option value="three">3</option>
                  <option value="four">4</option>
                  <option value="five">5</option>
                  <option value="six">6</option>
                  <option value="seven">7</option>
                  <option value="eight">8</option>
                </select>
                <span className="delete text-primary" style={{cursor: "pointer"}}>{t("remove")}</span>
              </div>
              {/* cost */}
              <div className="costotal">
                <h4>$179.99</h4>
                <div className="d-flex flex-column gap-3">
                  <div className="procost">
                    <div className="subtotal">{t("Subtotal")} <span className="cost">$179.99</span></div>
                    <div className="shipping">{t("Shipping")} <span className="cost">$5.00</span></div>
                    <div className="tax">{t("Tax")} <span className="cost">$18.00</span></div>
                        {/* order total */}
                    <div className="ordertotal">
                        {t("Order Total")} <span className="ordertotalcost">$202.99</span>
                    </div>
                  </div>
                  <NavLink to="/login"><button className="btn btn-primary w-100 mt-4" style={{fontWeight: "600"}}>{t("PLEASE LOGIN")}</button></NavLink>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Cart
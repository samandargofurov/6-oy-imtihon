import { useTranslation } from "react-i18next";
import Card from "../../components/Cards/card"
import img1 from "../../assets/hero1.webp"
import img2 from "../../assets/hero2.webp"
import img3 from "../../assets/hero3.webp"
import img4 from "../../assets/hero4.webp"
import { IoIosMoon } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom"
import './home.css'
import { useEffect, useState } from "react";

function Home() {
  const {t, i18n} = useTranslation();
  const [lang, setLang] = useState('uz');

  // useEffect(() => {
  //   if (localStorage.getItem('lang')) {
  //     i18n.changeLanguage(localStorage.setItem('lang'))
  //     setLang(localStorage.getItem('lang'))
  //   } else {
  //     i18n.changeLanguage('uz')
  //     setLang('uz')
  //   }
  // }, [])

  function handleChange(e) {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setItem('lang', e.target.value)
  }

  // const api = 'https://strapi-store-server.onrender.com/api/products?featured=true'

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
                <NavLink to='/' className="home"><span>{t("Home")}</span></NavLink>
                <NavLink to='/about' className="about" style={{fontSize: "13px"}}><span>{t("About")}</span></NavLink>
                <NavLink to='/products' className="products" style={{fontSize: "13px"}}><span>{t("Products")}</span></NavLink>
                <NavLink to='/cart' className="cart" style={{fontSize: "13px"}}><span>{t("Cart")}</span></NavLink>
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

        {/* hero page */}

        <div className="hero d-flex gap-5 mt-5">
          {/* text area */}
          <div className="textArea w-50 mt-5 d-flex flex-column gap-3">
            <h1 className="heroTitle font-bold">{t('We are changing the way people shop')}</h1>
            <p className="desc">{t('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.')}</p>
            <button className="button btn btn-primary">{t('OUR PRODUCTS')}</button>
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

        <div className="productsPage">
            <h1 className="ptn">{t('Featured Products')}</h1>

            <div className="productDetails">
              <Card></Card>
            </div>
        </div>
    </>
  )
}

export default Home
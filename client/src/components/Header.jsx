import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const navbarRef = useRef();
  const navbar2Ref=useRef()
  const [scroll, setScroll] = useState(0);
  window.onscroll = () => {
    setScroll(window.scrollY);
  };
  if(scroll > 150){
    navbarRef.current.style.position = "fixed"
    navbarRef.current.style.zIndex = "2"
    navbarRef.current.style.backgroundColor = "white"
    navbar2Ref.current.style.display="none"

  }

  return (
    <div className="nav" ref={navbarRef} >
      <div className="nav__top" ref={navbar2Ref}>
        <div className="nav__top__left">
          <p>Free shipping for standard order over $100</p>
        </div>
        <div className="nav__top__right">
          <p>Help & FAQs</p>
          <p>MY Account</p>
          <p>EN</p>
          <p>USD</p>
        </div>
      </div>
      <div className="nav__bottom">
        <div className="nav__bottom__left">
          <div className="nav__bottom__left__img">
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png"
              alt=""
            />
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Products</Link>
            </li>
            <li>
              <a href=""></a>Features
            </li>
            <li>
              <a href=""></a>Blog
            </li>
            <li>
              <a href=""></a>About
            </li>
            <li>
              <a href=""></a>Contact
            </li>
          </ul>
        </div>
        <div className="nav__bottom__right">
          <div className="nav__bottom__right__icons">
            <AiOutlineSearch />
            <MdShoppingCart />
            <FiHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

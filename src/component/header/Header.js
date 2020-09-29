import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./header.scss";

import { FaFacebookF, FaInstagram, FaYoutube, FaRegUserCircle, FaBars } from "react-icons/fa";
import { BsHeartFill, BsImageFill, BsBag } from "react-icons/bs";
import { FiX } from "react-icons/fi";

import imageBrand from "../../assets/images/logo.png"
import Cart from '../Cart/Cart';

export default function Header() {
    const [bars, setBars] = useState(false);
    const handleBars = () => {
        setBars(!bars);
        const menuMobile = document.querySelector(".menu-mobile");
        menuMobile.classList.toggle("height-mobile-click");
    }
    return (
        <header>
            <div className="menu-desktop">
                <div className="menu-desktop__top">
                    <div className="menu-desktop__top__icon">
                        <i> <FaFacebookF /></i>
                        <i> <FaInstagram /></i>
                        <i><BsImageFill /></i>
                        <i> <BsHeartFill /></i>
                        <i><FaYoutube /></i>
                    </div>
                    <div className="menu-desktop__top__text">
                        <span>Free shipping for standard order over $100</span>
                    </div>
                    <div className="menu-desktop__top__email">
                        <span>fashe@example.com</span>
                    </div>
                </div>
                <div className="menu-desktop__navbar d-flex justify-content-between pl-5 pr-5">
                    <div className="menu-desktop__navbar__brand">
                        <Link to="/">
                            <img src={imageBrand} alt="logo" />
                        </Link>
                    </div>
                    <nav className="menu-desktop__navbar__menu">
                        <ul className="menu-desktop__navbar__menu___ul d-flex">
                            <li className="menu-desktop__navbar__menu--navItem">
                                <Link className="menu-desktop__navbar__menu--navLink" to="/">home</Link>
                            </li>
                            <li className="menu-desktop__navbar__menu--navItem">
                                <Link className="menu-desktop__navbar__menu--navLink" to="/shop">Shop</Link>
                            </li>
                            <li className="menu-desktop__navbar__menu--navItem">
                                <Link className="menu-desktop__navbar__menu--navLink" to="/features">Features</Link>
                            </li>
                            <li className="menu-desktop__navbar__menu--navItem">
                                <Link className="menu-desktop__navbar__menu--navLink" to="/about">About us</Link>
                            </li>
                            <li className="menu-desktop__navbar__menu--navItem">
                                <Link className="menu-desktop__navbar__menu--navLink" to="/contact">Contact us</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="menu-desktop__navbar__user d-flex">
                        <div className="menu-desktop__navbar__user__icons">
                            <i><FaRegUserCircle /></i>
                        </div>
                        <div className="menu-desktop__navbar__user__cart">
                            <Cart />
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-mobile">
                <div className="menu-mobile__top d-flex justify-content-between pl-3 pr-3">
                    <div className="menu-mobile__top__brand">
                        <Link to="/">
                            <img src={imageBrand} alt="logo" />
                        </Link>

                    </div>
                    <div className="menu-mobile__top__icons">
                        <i><FaRegUserCircle /></i>
                        <div><Cart /></div>
                        <i className="menu-mobile__top__icons__bars" onClick={handleBars}>{bars ? <FiX /> : <FaBars />}</i>
                    </div>
                </div>
                <div className="menu-mobile__center">
                    <div className="menu-mobile__center__top pl-3"><span>Free shipping for standard order over $100</span></div>
                    <div className="menu-mobile__center__center pl-3">fashe@example.com</div>
                    <div className="menu-mobile__center__bottom pl-2">
                        <i> <FaFacebookF /></i>
                        <i> <FaInstagram /></i>
                        <i><BsImageFill /></i>
                        <i> <BsHeartFill /></i>
                        <i><FaYoutube /></i>
                    </div>
                </div>
                <div className="menu-mobile__bottom">
                    <ul className="menu-mobile__bottom__menu">
                        <li className="menu-mobile__bottom__menu__item">
                            <Link className="menu-mobile__bottom__menu__link" to="/">Home</Link>
                        </li>
                        <li className="menu-mobile__bottom__menu__item">
                            <Link className="menu-mobile__bottom__menu__link" to="/">Shop</Link>
                        </li>
                        <li className="menu-mobile__bottom__menu__item">
                            <Link className="menu-mobile__bottom__menu__link" to="/">Features</Link>
                        </li>
                        <li className="menu-mobile__bottom__menu__item">
                            <Link className="menu-mobile__bottom__menu__link" to="/">About us</Link>
                        </li>
                        <li className="menu-mobile__bottom__menu__item">
                            <Link className="menu-mobile__bottom__menu__link" to="/">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

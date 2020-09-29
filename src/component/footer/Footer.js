import React from 'react'
import { Col, Row } from 'reactstrap';
import "./footer.scss";


import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsHeartFill, BsImageFill } from "react-icons/bs";

import footerimg1 from "../../assets/images/visa.png";
import footerimg2 from "../../assets/images/paypal.png";
import footerimg3 from "../../assets/images/mastercard.png";
import footerimg4 from "../../assets/images/discover.png";
import footerimg5 from "../../assets/images/express.png";


export default function Footer() {
    return (
        <footer className="footer">
            <Row>
                <Col lg="4" className="mb-3">
                    <h3 className="footer--title">GET IN TOUCH</h3>
                    <p className="footer--text">Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                    <div>
                        <i> <FaFacebookF /></i>
                        <i> <FaInstagram /></i>
                        <i><BsImageFill /></i>
                        <i> <BsHeartFill /></i>
                        <i><FaYoutube /></i>
                    </div>
                </Col>
                <Col >
                    <h3 className="footer--title">CATEGORIES</h3>
                    <ul>
                        <li>men</li>
                        <li>women</li>
                        <li>dreees</li>
                        <li>sunglasses</li>
                    </ul>
                </Col>
                <Col >
                    <h3 className="footer--title">LINKS</h3>
                    <ul>
                        <li>search</li>
                        <li>about us</li>
                        <li>contact</li>
                        <li>returns</li>
                    </ul>
                </Col>
                <Col >
                    <h3 className="footer--title">HELP</h3>
                    <ul>
                        <li>track order</li>
                        <li>shopping</li>
                        <li>returns</li>
                        <li>sunglasses</li>
                    </ul>
                </Col>
                <Col lg="3">
                    <h3 className="footer--title">newsletter</h3>
                    <form>
                        <input type="text" name="" id="" placeholder="email@gmail.com" />
                        <button type="submit">subscribe</button>
                    </form>
                </Col>
            </Row>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <img src={footerimg1} alt="" />
                <img src={footerimg2} alt="" />
                <img src={footerimg3} alt="" />
                <img src={footerimg4} alt="" />
                <img src={footerimg5} alt="" />
                <p className="footer--text mt-2">Copyright © 2017 Colorlib. All rights reserved.</p>
            </div>
        </footer >
    )
}

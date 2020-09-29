import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./Colections.scss";

import colectionOne from "../../../assets/images/banner-02.jpg";
import colectionTwo from "../../../assets/images/banner-03.jpg";
import colectionThree from "../../../assets/images/banner-04.jpg";
import colectionFour from "../../../assets/images/banner-05.jpg";
import colectionFive from "../../../assets/images/banner-07.jpg";
import imageSix from "../../../assets/images/bg-01.jpg";
export default function Colections() {
    return (
        <Container className="mt-5 mb-5">
            <Row>
                <Col xs="12" md="12" lg="4">
                    <div className="colectionItem  mb-4">
                        <img src={colectionOne} alt="" style={{ width: "100%" }} />
                        <button>dresses</button>
                    </div>
                    <div className="colectionItem mb-4">
                        <img src={colectionFour} alt="" style={{ width: "100%" }} />
                        <button>sunglasses</button>
                    </div>
                </Col>
                <Col xs="12" md="12" lg="4">
                    <div className="colectionItem mb-4">
                        <img src={colectionTwo} alt="" style={{ width: "100%" }} />
                        <button>watches</button>
                    </div>
                    <div className="colectionItem mb-4">
                        <img src={colectionFive} alt="" style={{ width: "100%" }} />
                        <button>footerwear</button>
                    </div>
                </Col>
                <Col xs="12" md="12" lg="4">
                    <div className="colectionItem mb-4">
                        <img src={colectionThree} alt="" style={{ width: "100%" }} />
                        <button>bags</button>
                    </div>
                    <div className="colectionItemText">
                        <img src={imageSix} alt="" />
                        <div className="colectionItemText__div">
                            <div>
                                <h4>Sign up & get 20% off</h4>
                                <p>Be the frist to know about the latest fashion news and get exclu-sive offers</p>
                                <button>sign up</button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container >
    )
}

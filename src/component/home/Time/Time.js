import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import lady from "../../../assets/images/lady.jpg";
import glass from "../../../assets/images/glass.jpg";
import "./Time.scss";
export default function Time() {
    return (
        <section className="time">
            <Container >
                <Row>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <div className="lady">
                            <img src={lady} alt="lady" />
                            <div>
                                <h4>the beauty</h4>
                                <h3>look book</h3>
                                <span>  view collection</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <div className="glass">
                            <img src={glass} alt="glasses" />
                            <div>
                                <p>Gafas sol Hawkers one</p>
                                <span>$ 15.00</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

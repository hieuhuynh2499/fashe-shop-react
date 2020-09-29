import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import "./about.scss";
import imageLadyAbout from "../../assets/images/about-lady.jpg";

export default function About() {
    return (
        <>
            <section className="about">
                <div className="about__bg">
                    <h2>about</h2>
                </div>
                <Container>
                    <Row>
                        <Col lg="4">
                            <div className="about__left">
                                <img src={imageLadyAbout} alt="" />
                            </div>
                        </Col>
                        <Col lg="8">
                            <div className="about__right">
                                <div className="about__right__top mb-4">
                                    <h4>Our story</h4>
                                    <p>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>
                                </div>
                                <div className="about__right__bottom">
                                    <p>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
                                    <p><span>- Steve Job’s</span></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

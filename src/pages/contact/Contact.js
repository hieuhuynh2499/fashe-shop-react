import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import "./contact.scss";

export default function Contact() {
    return (
        <>
            <section className="contact">
                <div className="contact__bg">
                    <h2>contact</h2>
                </div>
                <Container className="mb-5">
                    <Row>
                        <Col lg="6">
                            <div className="mb-3">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269657.8284140415!2d106.99994215110671!3d15.113529911011264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421c170ed1e2c1%3A0x9f0b5188c9bf7c77!2zSG_DoCBOaMahbiwgSMOyYSBWYW5nLCDEkMOgIE7hurVuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1601344546687!5m2!1svi!2s" style={{ height: "500px", width: "100%", border: "none", outline: "none" }}></iframe>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="contact__right">
                                <p>Send us your message</p>
                                <form >
                                    <input type="text" placeholder="Full Name" />
                                    <input type="text" placeholder="Phone Number" />
                                    <input type="text" placeholder="Email Gmail" />
                                    <textarea placeholder="Message..."></textarea>
                                </form>
                                <button>Send</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

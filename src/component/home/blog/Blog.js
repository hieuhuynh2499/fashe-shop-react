import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import "./blog.scss";
import blog1 from "../../../assets/images/blog-01.jpg";
import blog2 from "../../../assets/images/blog-02.jpg";
import blog3 from "../../../assets/images/blog-03.jpg";

const listBlog = [
    {
        image: blog1,
        title: "Black Friday Guide: Best Sales & Discount Codes",
        time: "By Nancy Ward on July 22, 2017",
        content: "Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames"
    },
    {
        image: blog2,
        title: "The White Sneakers Nearly Every Fashion Girls Own",
        time: "By Nancy Ward on July 22, 2017",
        content: "Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames"
    },
    {
        image: blog3,
        title: "New York SS 2018 Street Style: Annina Mislin",
        time: "By Nancy Ward on July 22, 2017",
        content: "Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames"
    }
]

const list = listBlog.map((item) => (
    <Col lg="4" md="6" sm="12" xs="12">
        <div className="blog">
            <div className="blog__img"><img src={item.image} alt="" /></div>
            <div className="blog__content">
                <h3>{item.title}</h3>
                <span>{item.time}</span>
                <p>{item.content}</p>
            </div>
        </div>
    </Col>
));
export default function Blog() {

    return (
        <section className="blog-container">
            <Container>
                <h2 className="mb-5">blog</h2>
                <Row>
                    {list}
                </Row>
            </Container>
        </section>
    )
}

import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import "./Products.scss";
import Product from "./Product";


export default function Products(props) {
    const { listProducts, handleProduct } = props;
    return (
        <section className="mb-5">
            <Container>
                <h2 className="mb-5">FEATURED PRODUCTS</h2>
                <Row>
                    {listProducts.map((item) =>

                        <Product product={item} handleProducts={handleProduct} lg="3" md="6" sm="6" xs="12" />

                    )}
                </Row>
            </Container>
        </section>
    )
}

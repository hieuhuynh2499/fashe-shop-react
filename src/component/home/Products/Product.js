import React from 'react';
import { Col } from "reactstrap";

export default function Product(props) {
    const { product, lg, md, sm, xs, handleProducts } = props;
    return (
        <Col lg={lg} md={md} sm={sm} xs={xs}>
            <div className="product">
                <div className="product__img">
                    <img src={product.image} alt="" />
                    <button onClick={() => handleProducts(product)}>add to cart</button>
                </div>
                <div className="product__content">
                    <p >{product.name}</p>
                    <p>$ {product.price}.00</p>
                </div>
            </div>
        </Col>
    )
}

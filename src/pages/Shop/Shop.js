import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import { useDispatch } from "react-redux";
import Product from '../../component/home/Products/Product';
import "./shop.scss";
import Images from '../../contains/Image';
import { addNewProduct } from '../../actions/actions';
import { FiSearch } from "react-icons/fi";



const listProducts = [
    {
        id: 1,
        name: "Herschel supply co 25l",
        price: 75.00,
        image: Images.imageProductOne,
        amount: 1
    },
    {
        id: 2,
        name: "Denim jacket blue",
        price: 65.00,
        image: Images.imageProductTwo,
        amount: 1
    },
    {
        id: 3,
        name: "Coach slim easton black",
        price: 74.00,
        image: Images.imageProductThree,
        amount: 1
    },
    {
        id: 4,
        name: "Frayed denim shorts",
        price: 42.00,
        image: Images.imageProductFour,
        amount: 1
    },
    {
        id: 5,
        name: "Herschel supply co 25l",
        price: 42.00,
        image: Images.imageProductFive,
        amount: 1
    }
    , {
        id: 6,
        name: "Denim jacket blue",
        price: 42.00,
        image: Images.imageProductSix,
        amount: 1
    }
    , {
        id: 7,
        name: "Herschel supply co 25l",
        price: 42.00,
        image: Images.imageProductSeven,
        amount: 1
    }
    , {
        id: 8,
        name: "Frayed denim shorts",
        price: 42.00,
        image: Images.imageProductEight,
        amount: 1
    }, {
        id: 9,
        name: "Frayed denim shorts",
        price: 42.00,
        image: Images.imageProductNine,
        amount: 1
    }
]
const listColor = ["#00bbec", "#2c6ed5", "#ffa037", "#ff5337", "#a88c77", "#393939", "#cccccc"];

export default function Shop() {

    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
        const action = addNewProduct(item);
        dispatch(action);
    }
    const list = listProducts.map((item, index) => (<Product key={index} product={item} lg={4} md={6} sm={6} xs={12} handleProducts={handleAddToCart} />))
    return (
        <section className="shop">
            <div className="shop__bg">
                <div>
                    <h2>women</h2>
                    <h4>New Arrivals Women Collection 2018</h4>
                </div>
            </div>
            <Container>
                <Row>
                    <Col lg="3">
                        <div className="shop__sidebars">
                            <h3 className="shop__sidebars--titile">Categories</h3>
                            <ul>
                                <li>men</li>
                                <li>women</li>
                                <li>dreees</li>
                                <li>sunglasses</li>
                            </ul>
                        </div>
                        <div className="shop__filter">
                            <h3 className="shop__sidebars--titile">Filter</h3>
                            <div className="shop__filter__range">
                                <h4 className="shop__sidebars--titile">Price</h4>
                                <input type="range" />
                                <span className="shop__filter__range__filter">Filter</span>
                                <span>Range: $50 - $200</span>
                            </div>
                        </div>
                        <div className="pt-3 pb-5">
                            <h3 className="shop__sidebars--titile">Color</h3>
                            <div className="d-flex">
                                {
                                    listColor.map(item => (<div style={{
                                        background: item, height: '25px'
                                        , width: '25px', borderRadius: '50%', marginRight: '7px'
                                    }}></div>))
                                }
                            </div>
                        </div>
                        <div className="shop__sidebars__input">
                            <input type="text" placeholder="Search Products ..." />
                            <button><FiSearch />    </button>
                        </div>

                    </Col>
                    <Col lg="9">
                        <Row>
                            {list}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

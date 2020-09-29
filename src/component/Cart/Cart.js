import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from '../../actions/actions';
import "./cart.scss";
export default function Cart() {
    const [showCart, setShowCart] = useState(true);
    const handleShowCart = () => {
        setShowCart(!showCart);
    }
    const listPro = useSelector(state => state.addtocart.list);
    const dispatch = useDispatch();
    const handleRemoveCart = (item) => {
        const action = removeProduct(item);
        dispatch(action);
    }
    let tempTotal = 0;
    let itemsTotal = 0;
    listPro.map(item => {
        tempTotal += item.price * item.amount;
        itemsTotal += item.amount;
    });
    return (
        <div className="cart-container">
            <div className="cart">
                <div className="notification" onClick={handleShowCart}><BsBag /></div>
                <span className="badge">{listPro.length}</span>
            </div>
            <div className={showCart ? "cart--content--container" : "cart--content--container show--cart-content"}>
                <div>
                    <h3>YOUR CART</h3>
                </div>
                <div className="cart--content">
                    {
                        listPro.length > 0 && listPro.map((product, index) => (
                            <div key={index} className="cart--content__item">
                                <div className="cart--content__item__img">
                                    <img src={product.image} alt="" />
                                </div>
                                <div className="cart--content__item__text">
                                    <p>{product.name}</p>
                                    <span>{product.amount}x{product.price}</span>
                                    <span className="remove" onClick={() => handleRemoveCart(product)}>remove</span>
                                </div>
                            </div>
                        ))
                    }
                    {
                        listPro.length === 0 && "you need order something"
                    }
                </div>
                <div className="cart--total">
                    <h3><span>total: $</span><span>{tempTotal}</span></h3>
                    <Link className="cart--total__link" to="/features">view cart</Link>
                    <Link className="cart--total__link" to="/features">check out</Link>
                </div>
            </div>
        </div>

    )
}

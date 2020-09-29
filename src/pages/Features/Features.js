import React from 'react';
import "./feature.scss";
import { useDispatch, useSelector } from "react-redux";
import { Container } from 'reactstrap';
import { FiPlus, FiMinus } from "react-icons/fi";

export default function Features() {
    const listPro = useSelector(state => state.addtocart.list);
    let tempTotal = 0;
    let itemsTotal = 0;
    listPro.map(item => {
        tempTotal += item.price * item.amount;
        itemsTotal += item.amount;
    });
    return (
        <>
            <section className="features">
                <div className="features__bg">
                    <h2>cart</h2>
                </div>
                <Container>
                    <div className="features__table">
                        <table className="table">
                            <thead>
                                <tr className="tr">
                                    <th></th>
                                    <th>products</th>
                                    <th>price</th>
                                    <th>quantity</th>
                                    <th>total</th>
                                </tr>
                            </thead>
                            <tbody className="tbody">
                                {
                                    listPro.map(product => (
                                        <tr className="tbody__tr">
                                            <td><img src={product.image} alt="" style={{ height: '140px', width: '140px' }} /></td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>
                                                <span className="tbody__tr__amount"><FiPlus /></span>
                                                <span className="pr-3 pl-3">{product.amount}</span>
                                                <span className="tbody__tr__amount"><FiMinus /></span>
                                            </td>
                                            <td>{product.amount * product.price}</td>
                                        </tr>
                                    ))
                                }
                                {
                                    listPro.length === 0 && <tr><td><h1>Not Thing Here</h1></td></tr>
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="features__payMoney">
                        <div className="features__payMoney__code">
                            <input type="text" placeholder="coupon code ..." />
                            <button className="features__payMoney__btn">apply coupon</button>
                        </div>
                        <div className="features__payMoney__money">
                            <span className="features__payMoney__total">total: ${tempTotal}</span>
                            <button className="features__payMoney__btn">pay money</button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

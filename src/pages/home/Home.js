import React from 'react'
import Banner from "../../component/home/Banner/Banner";
import Blog from '../../component/home/blog/Blog';
import Colections from '../../component/home/colections/Colections';
import Products from '../../component/home/Products/Products';
import Time from '../../component/home/Time/Time';
import Images from '../../contains/Image';
import { useDispatch } from "react-redux";
import { addNewProduct } from '../../actions/actions';
const listProduct = [
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
    }
]

export default function Home() {
    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
        const action = addNewProduct(item);
        dispatch(action);
    }
    return (
        <>
            <Banner />
            <Colections />
            <Products listProducts={listProduct} handleProduct={handleAddToCart} />
            <Time />
            <Blog />
        </>
    )
}

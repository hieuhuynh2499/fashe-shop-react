import React from 'react';
import { Link } from "react-router-dom";
import "./Banner.scss";

export default function Banner() {
    return (
        <div className="banner">
            <div className="banner__caption">
                <h3>Women Collection 2018</h3>
                <h2>New arrivals</h2>
                <Link className="banner--link" to="/shop">shop now</Link>
            </div>
        </div>
    )
}
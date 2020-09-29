import React from 'react'

export default function Shoplist(props) {
    const { listProductShop } = props;
    return (
        <>
            <ul>
                <p>cart({listProductShop.length})</p>
                {
                    listProductShop.map((item, index) => (<div key={index}>
                        <img src={item.image} alt={item.name} style={{ width: "100px", height: "100px" }} />
                        <p>{item.name}</p>
                        <button>remove</button>
                    </div>))
                }
            </ul>
        </>
    )
}

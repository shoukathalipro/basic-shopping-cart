import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../Actions/cartActions";
import Styles from "../Styles/Products.module.css";

const Products = () => {
    const dispatch = useDispatch();
    const allItemsFromStore = useSelector( (state) => state.cartReducer)

    return(
        <div className={Styles.productsMain}>
            {
                allItemsFromStore["items"].map( (obj) => 
                <div key={obj.id} className={Styles.productsBox}>
                    <div className={Styles.productsTop}><img src={obj.image} alt={obj.title} className={Styles.productsImage} /></div>
                    <div className={Styles.productsBottom}>
                        <Link to={`/details/${obj.id}`} className={Styles.productsTitle}>{obj.title}</Link>
                        <div className={Styles.productsStock}>Stock: {obj.stock}</div>
                        <div className={Styles.productsPrice}>Price: {obj.price}</div>
                        <div><button onClick={ () => dispatch( addToCart(obj.id))} className={Styles.productsBtn}>Add to Cart</button></div>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default Products;
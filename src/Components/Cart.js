import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../Actions/cartActions";
import Styles from "../Styles/Cart.module.css";

const Cart = () => {
    const dispatch = useDispatch();
    const allItemsFromStore = useSelector( (state) => state.cartReducer)

    return(
        <div className={Styles.productsMain}>
            <div className={Styles.cartBox}>
                <div className={Styles.cartBoxText}>Total Items: {allItemsFromStore["totalItems"]}</div>
            </div>
            {
                //eslint-disable-next-line
                allItemsFromStore.addedItems.map( (obj) =>  
                (
                <div key={obj.id} className={Styles.productsBox}>
                    <div className={Styles.productsTop}><img src={obj.image} alt={obj.title} className={Styles.productsImage} /></div>
                    <div className={Styles.productsBottom}>
                        <Link to={`/details/${obj.id}`} className={Styles.productsTitle}>{obj.title}</Link>
                        {/* <div className={Styles.productsStock}>Stock: {obj.stock}</div> */}
                        <div className={Styles.productsPrice}>Price: {obj.price}</div>
                        <div>No. of items added: {obj.numOfItems}</div>
                        <div><button onClick={ () => dispatch( removeFromCart(obj.id))} className={Styles.productsBtn}>Remove from Cart</button></div>
                    </div>
                </div>
                )
                )
            }
        </div>
    )
}

export default Cart;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../Actions/cartActions";
import Styles from "../Styles/Details.module.css";

const Details = () => {
    const dispatch = useDispatch();
    const allItemsFromStore = useSelector( (state) => state.cartReducer)
    const { objectId } = useParams();

    return(
        <div className={Styles.productsMain}>
        {
            //eslint-disable-next-line
            allItemsFromStore["items"].map( (obj) => {
            if(obj.id === objectId) 
            return(
            <div key={obj.id} className={Styles.productsBox}>
                <div className={Styles.productsTop}><img src={obj.image} alt={obj.title} className={Styles.productsImage} /></div>
                <div className={Styles.productsBottom}>
                    <Link to={`/details/${obj.id}`} className={Styles.productsTitle}>{obj.title}</Link>
                    <div className={Styles.productsDescription}>{obj.description}</div>
                    <div className={Styles.productsStock}>Stock: {obj.stock}</div>
                    <div className={Styles.productsPrice}>Price: {obj.price}</div>
                    <div><button onClick={ () => dispatch( addToCart(obj.id))} className={Styles.productsBtn}>Add to Cart</button></div>
                </div>
            </div>
            )
            }
            )
        }
        </div>
    )
}

export default Details;
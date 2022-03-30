import React from "react";
import { useSelector } from "react-redux";

const View = () => {
    // const dispatch = useDispatch();
    const allItemsFromStore = useSelector( (state) => state.cartReducer)
    return(
        <div>
            {
                //eslint-disable-next-line
                allItemsFromStore["items"].map( (obj) => (
                    <div key={obj.id}>
                        <div>{obj.title}</div>
                        <div>{obj.description}</div>
                        <div>{obj.price}</div>
                        <div>{obj.stock}</div>
                    </div>
                )
                )
            }
        </div>
    )
}

export default View;
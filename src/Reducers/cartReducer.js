const initialState = {
    "items" : [
        {
            "id": "1",
            "title": "SmartPhone",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis nunc eget lorem dolor sed.",
            "image": "https://cdn.pixabay.com/photo/2021/01/29/16/54/smartphone-5961605_1280.png",
            "price": "999",
            "stock": "25"
        },
        {
            "id": "2",
            "title": "SmartWatch",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis nunc eget lorem dolor sed.",
            "image": "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/ns11150-image-kwvydmzb.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=a141add9bded49d7ac9b254c501c1da4",
            "price": "249",
            "stock": "300"
        },
        {
            "id": "3",
            "title": "TWS Earbuds",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis nunc eget lorem dolor sed.",
            "image": "https://thegadgetflow.com/wp-content/uploads/2021/07/Nothing-ear-1-earbuds-featured.jpeg",
            "price": "149",
            "stock": "49"
        },
        {
            "id": "4",
            "title": "Smart TV",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis nunc eget lorem dolor sed.",
            "image": "https://www.sony.co.in/image/f4d3ecf55a598c071e6f28990461a788?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320",
            "price": "1999",
            "stock": "27"
        },
        {
            "id": "5",
            "title": "Laptop",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis nunc eget lorem dolor sed.",
            "image": "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg",
            "price": "999",
            "stock": "56"
        }
    ],

    "addedItems" : [],

    "totalItems" : "0"
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            
            const id = action.payload;

            const existingProduct = state.items.find( (product) => product.id === id);

            const addedProduct = state.addedItems.find( (product) => product.id === id);

            //eslint-disable-next-line
            // state.addedItems.find( (obj) => {
            //     if(obj.id === existingProduct["id"]){
            //         obj["numOfItems"]++;
            //     }
            //     else {
            //         state["addedItems"].push({"id": existingProduct["id"], "numOfItems":"1", "title": existingProduct["title"], "image": existingProduct["image"], "price": existingProduct["price"], "stock": existingProduct["stock"]})
            //     }
            // })

            // state["addedItems"].forEach( (obj) => {
            //     if (obj.id === existingProduct["id"]) {
            //         obj["numOfItems"]++;
            //     }
            //     else {
            //         state["addedItems"].push({"id": existingProduct["id"], "numOfItems":"1", "title": existingProduct["title"], "image": existingProduct["image"], "price": existingProduct["price"], "stock": existingProduct["stock"]})
            //     }
            // })

            if (existingProduct) {
                existingProduct["stock"]--;
                state["totalItems"]++;

                    //state["addedItems"].forEach( (obj) => {
            }

            if (addedProduct) {
                addedProduct["numOfItems"]++;
            }
            else {
                state["addedItems"].push({"id": existingProduct["id"], "numOfItems":"1", "title": existingProduct["title"], "image": existingProduct["image"], "price": existingProduct["price"], "stock": existingProduct["stock"]})
            }

            return { ...state }

        case "REMOVE_FROM_CART":

            const id2 = action.payload;

            const existingProduct2 = state["items"].find( (product) => product.id === id2);

            const addedProduct2 = state.addedItems.find( (product) => product.id === id2);

        
            if (existingProduct2) {
                existingProduct2["stock"]++;
                state["totalItems"]--;

                //if (state["addedItems"].includes( (obj) => obj.id === existingProduct["id"])) {
                    // state["addedItems"].forEach( (obj) => {
                    //     if (obj.id === existingProduct["id"]) {
                    //         obj["numOfItems"]--
                    //     }
                    // }
                    // )
                //}

                    //state["addedItems"].filter( (obj) => obj.id !== existingProduct["id"])
            }

            if (addedProduct2) {
                addedProduct2["numOfItems"]--;

                if (addedProduct2["numOfItems"] === 0) {
                    const newAddedItems = state["addedItems"].filter( (obj) => obj.id !== existingProduct2.id);

                    state["addedItems"] = newAddedItems;
                }
            }

            return { ...state }
    
        default:
            // console.log(state["items"]);
            return state;
    }
}

export default cartReducer;




// if (state["addedItems"].includes( (obj) => obj.id === existingProduct["id"])) {

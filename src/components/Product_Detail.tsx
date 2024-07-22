import React from "react";
import FeedBack from "./FeedBack";
import Product_Cart from "./Product_Cart";
import Product_Info from "./Product_Info";
import Product_Review from "./Product_Review";
import User_Comment from "./User_Comment";

const Product_Detail = () => {
    return (
        <>
            <Product_Cart />
            <Product_Info />
            <Product_Review />
            <User_Comment />
            <FeedBack />
        </>
    );
};

export default Product_Detail;

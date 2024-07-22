import React from "react";
import Cate_ListProduct from "./Cate_ListProduct";
import Product from "./Product";
import FeedBack from "./FeedBack";

type Props = {};

const ListProduct = (props: Props) => {
    return (
        <>
            <Cate_ListProduct />
            <div className="bg-white">
                <Product />
            </div>
            <FeedBack />
        </>
    );
};

export default ListProduct;
